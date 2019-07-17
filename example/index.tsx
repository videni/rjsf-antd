import React from 'react';
import ReactDOM from 'react-dom';

import Body from './body';
import examples from './examples';
import Menu from './menu';
import { Layout } from 'antd';

const { Header, Footer, Sider, Content } = Layout;

const theme = 'light';

const App = () => {
  const [selectedExample, setSelectedExample] = React.useState(examples.simple);

  const onSelectMenuItem = type => () => setSelectedExample(type);

  return (
    <Layout>
      <Header style={{ background: '#ffffff' }}>
        Ant Design for react-jsonschema-form playground
      </Header>
      <Layout>
        <Sider theme={theme}>
          <Menu onSelectMenuItem={onSelectMenuItem} />
        </Sider>
        <Content>
          <Body selectedDemo={selectedExample} />
        </Content>
      </Layout>
    </Layout>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
