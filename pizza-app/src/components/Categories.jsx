import React from 'react';
import PropTypes from 'prop-types';

// на функции
const Categories = React.memo(function Categories({ activeCategory, items, onClickCategory }) {
  // const [activeItem, setActiveItem] = React.useState(null);

  // const onSelectItem = (index) => {
  //   // setActiveItem(index);
  //   onClickItem(index);
  // };

  return (
    <div className="categories">
      <ul>
        <li
          className={activeCategory === null ? 'active' : ''}
          onClick={() => onClickCategory(null)}>
          Все
        </li>
        {items.map((item, index) => {
          return (
            <li
              className={activeCategory === index ? 'active' : ''}
              onClick={() => onClickCategory(index)}
              key={`${item}_${index}`}>
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
});

Categories.propTypes = {
  activeCategory: PropTypes.oneOf([PropTypes.number, null]),
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickCategory: PropTypes.func,
};

Categories.defaultProps = { activeCategory: null, items: [] };

export default Categories;

// На классах
// class Categories extends React.Component {
//   state = {
//     activeItem: null,
//   }

//   onSelectItem = index => {
//     this.setState({activeItem: index})
//   }

//   render () {
//     const {items, onClickItem}= this.props;
//     return (
//       <div className="categories">
//        <ul>
//          <li className="active">Все</li>
//         {items.map((item,index) => {
//            return <li className={this.state.activeItem === index ? 'active' : ''} onClick={() => this.onSelectItem(index)} key={`${item}_${index}`}>{item}</li>;
//          })}
//        </ul>
//      </div>
//     )
//   }
// }
