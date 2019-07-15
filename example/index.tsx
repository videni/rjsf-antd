import React from 'react';
import ReactDOM from 'react-dom';

import Body from './body';
import examples from './examples';
import Menu from './menu';

const App = () => {
  const [selectedExample, setSelectedExample] = React.useState(examples.simple);

  const onSelectMenuItem = type => () => setSelectedExample(type);

  return (
    <div>
      <Menu onSelectMenuItem={onSelectMenuItem} />
      <Body selectedDemo={selectedExample} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
