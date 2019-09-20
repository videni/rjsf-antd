// remove this once https://github.com/rjsf-team/react-jsonschema-form/issues/1405 is resolved
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';

function withTheme(themeProps) {
  return forwardRef(({ fields, widgets, ...directProps }, ref) => (
    <Form
      {...themeProps}
      {...directProps}
      fields={{ ...themeProps.fields, ...fields }}
      widgets={{ ...themeProps.widgets, ...widgets }}
      ref={ref}
    />
  ));
}

withTheme.propTypes = {
  widgets: PropTypes.object,
  fields: PropTypes.object
};

export default withTheme;
