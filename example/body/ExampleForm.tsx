import { Form as AntdForm, Button } from 'antd';
import React from 'react';

import Form from '../../src';

const ExampleForm = props => {
  const {
    schema,
    uiSchema,
    formData,
    onSubmit,
    onCancel,
    onFormChanged,
    liveSettings,
    validate,
  } = props;

  return (
    <Form
      id="example-form"
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onFormChanged}
      liveValidate={liveSettings.validate}
      disabled={liveSettings.disabled}
      validate={validate}
    >
      <Button onClick={onCancel}>Cancel</Button>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AntdForm.create({ name: 'example' })(ExampleForm);
