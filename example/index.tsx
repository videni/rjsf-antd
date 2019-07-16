import React from 'react';
import ReactDOM from 'react-dom';

import Body from './body';
import examples from './examples';
import Menu from './menu';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const App = () => {
  const [selectedExample, setSelectedExample] = React.useState(examples.simple);

  const onSelectMenuItem = type => () => setSelectedExample(type);

  return (
    <Layout>
      <Sider theme="light">
        <Menu onSelectMenuItem={onSelectMenuItem} />
      </Sider>
      <Content>
        <Body selectedDemo={selectedExample} />
      </Content>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
