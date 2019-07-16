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
      schema={schema}
      uiSchema={uiSchema}
      formData={formData}
      onSubmit={onSubmit}
      onChange={onFormChanged}
      liveValidate={liveSettings.validate}
      disabled={liveSettings.disabled}
      validate={validate}
    >
      <Button variant="contained" color="default" onClick={onCancel}>
        Cancel
      </Button>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default AntdForm.create({ name: 'example' })(ExampleForm);
