import React from 'react';
import { Typography, Button, Card, Layout, Form as AntdForm } from 'antd';
import { JSONSchema6 } from 'json-schema';
import Source from './Source';
import styles from './Example.less';
import ExampleForm from './ExampleForm';
import Form from '../../src';

const liveSettingsSchema: JSONSchema6 = {
  type: 'object',
  properties: {
    validate: { type: 'boolean', title: 'Live validation' },
    disabled: { type: 'boolean', title: 'Disable whole form' },
  },
};

const { Header, Footer, Sider, Content } = Layout;

class Example extends React.Component<any, any> {
  state = {
    ...this.props.data,
    liveSettings: {
      validate: true,
      disabled: false,
    },
  };

  componentDidCatch() {
    this.setState({
      [this.state.backType]: this.state.backSource,
    });
  }

  componentWillReceiveProps = ({ data }) => {
    this.setState({
      ...data,
    });
  };

  onChange = type => value => {
    this.setState({
      [type]: value,
      backSource: this.state[type],
      backType: type,
    });
  };

  onFormChanged = ({ formData }) => {
    this.setState({ formData });
  };

  onSubmit = value => {
    console.log('onSubmit:', value);
  };

  onCancel = () => {
    const { data } = this.props;

    this.setState({
      ...data,
    });
  };

  setLiveSettings = ({ formData }: any) =>
    this.setState({ liveSettings: formData });

  render() {
    const { data } = this.props;
    const { title } = data;
    const { schema, uiSchema, formData, liveSettings, validate } = this.state;

    return (
      <Layout className={styles.root}>
        <>
          <Typography component="h4" variant="h4">
            {title}
          </Typography>
          <Form
            schema={liveSettingsSchema}
            formData={liveSettings}
            onChange={this.setLiveSettings}
          ></Form>
        </>
        <br />
        <div className={styles.ctr}>
          <div className={styles.sourceCtr}>
            <div>
              <Source
                title="JSONSchema"
                source={schema}
                onChange={this.onChange('schema')}
              />
            </div>
            <div>
              <Source
                title="uiSchema"
                source={uiSchema}
                onChange={this.onChange('uiSchema')}
              />
              <Source
                title="formData"
                source={formData}
                onChange={this.onChange('formData')}
              />
            </div>
          </div>
          <div className={styles.display}>
            <Card>
              <ExampleForm
                schema={schema}
                uiSchema={uiSchema}
                formData={formData}
                onSubmit={this.onSubmit}
                onCancel={this.onCancel}
                onFormChanged={this.onFormChanged}
                liveSettings={liveSettings}
                validate={validate}
              />
            </Card>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Example;
