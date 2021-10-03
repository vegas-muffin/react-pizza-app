import React from 'react';

import { useDispatch } from 'react-redux';

import { Header } from './components/index';
import { Home, Cart } from './pages/index';
import { Route } from 'react-router-dom';
import { fetchPizzas } from './redux/actions/pizzas';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    console.log(dispatch(fetchPizzas()));
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route path="/" component={Home} exact />
        <Route path="/cart" component={Cart} exact />
      </div>
    </div>
  );
}

export default App;
