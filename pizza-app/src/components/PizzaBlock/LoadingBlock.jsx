import React from 'react';
import ContentLoader from 'react-content-loader';

const LoadingBlock = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="139" cy="140" r="140" />
    <rect x="0" y="299" rx="6" ry="6" width="272" height="29" />
    <rect x="0" y="338" rx="6" ry="6" width="272" height="57" />
    <rect x="0" y="405" rx="6" ry="6" width="85" height="38" />
    <rect x="103" y="405" rx="21" ry="21" width="171" height="38" />
  </ContentLoader>
);

export default LoadingBlock;
