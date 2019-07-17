import React from 'react';
import {
  isMultiSelect,
  getDefaultRegistry,
} from 'react-jsonschema-form/lib/utils';
import {
  ArrayFieldTemplateProps,
  FieldProps,
  IdSchema,
} from 'react-jsonschema-form';
import AddButton from '../AddButton/AddButton';
import IconButton from '../IconButton/IconButton';
import { JSONSchema6 } from 'json-schema';

const ArrayFieldTemplate: React.FC<ArrayFieldTemplateProps> = (
  props: ArrayFieldTemplateProps
) => {
  const {
    schema,
    registry = getDefaultRegistry(),
  }: { schema: JSONSchema6; registry: FieldProps['registry'] } = props;

  if (isMultiSelect(schema, registry.definitions)) {
    return <DefaultFixedArrayFieldTemplate {...props} />;
  } else {
    return <DefaultNormalArrayFieldTemplate {...props} />;
  }
};

type ArrayFieldTitleProps = {
  TitleField: any;
  idSchema: IdSchema;
  title: string;
  required: boolean;
};

const ArrayFieldTitle: React.FC<ArrayFieldTitleProps> = (
  props: ArrayFieldTitleProps
) => {
  const { TitleField, idSchema, title, required }: ArrayFieldTitleProps = props;

  if (!title) {
    return <div />;
  }

  const id: string = `${idSchema.$id}__title`;

  return <TitleField id={id} title={title} required={required} />;
};

type ArrayFieldDescriptionProps = {
  DescriptionField: any;
  idSchema: IdSchema;
  description: string;
};

const ArrayFieldDescription: React.FC<ArrayFieldDescriptionProps> = (
  props: ArrayFieldDescriptionProps
) => {
  const {
    DescriptionField,
    idSchema,
    description,
  }: ArrayFieldDescriptionProps = props;

  if (!description) {
    return <div />;
  }

  const id: string = `${idSchema.$id}__description`;

  return <DescriptionField id={id} description={description} />;
};

// Used in the two templates
const DefaultArrayItem: React.FC<any> = props => {
  const btnStyle: object = {
    flex: 1,
    paddingLeft: 6,
    paddingRight: 6,
    fontWeight: 'bold',
  };

  return (
    <div key={props.index} alignItems="center">
      <div>{props.children}</div>
      {props.hasToolbar && (
        <div>
          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-up"
              className="array-item-move-up"
              tabIndex={-1}
              style={btnStyle}
              disabled={props.disabled || props.readonly || !props.hasMoveUp}
              onClick={props.onReorderClick(props.index, props.index - 1)}
            />
          )}

          {(props.hasMoveUp || props.hasMoveDown) && (
            <IconButton
              icon="arrow-down"
              tabIndex={-1}
              style={btnStyle}
              disabled={props.disabled || props.readonly || !props.hasMoveDown}
              onClick={props.onReorderClick(props.index, props.index + 1)}
            />
          )}

          {props.hasRemove && (
            <IconButton
              icon="remove"
              tabIndex={-1}
              style={btnStyle}
              disabled={props.disabled || props.readonly}
              onClick={props.onDropIndexClick(props.index)}
            />
          )}
        </div>
      )}
    </div>
  );
};

const DefaultFixedArrayFieldTemplate: React.FC<ArrayFieldTemplateProps> = (
  props: ArrayFieldTemplateProps
) => {
  return (
    <fieldset className={props.className}>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <div
          className="field-description"
          key={`field-description-${props.idSchema.$id}`}
        >
          {props.uiSchema['ui:description'] || props.schema.description}
        </div>
      )}

      <div
        className="row array-item-list"
        key={`array-item-list-${props.idSchema.$id}`}
      >
        {props.items && props.items.map(DefaultArrayItem)}
      </div>

      {props.canAdd && (
        <AddButton
          className="array-item-add"
          onClick={props.onAddClick}
          disabled={props.disabled || props.readonly}
        />
      )}
    </fieldset>
  );
};

const DefaultNormalArrayFieldTemplate: React.FC<
  ArrayFieldTemplateProps
> = props => {
  return (
    <div>
      <ArrayFieldTitle
        key={`array-field-title-${props.idSchema.$id}`}
        TitleField={props.TitleField}
        idSchema={props.idSchema}
        title={props.uiSchema['ui:title'] || props.title}
        required={props.required}
      />

      {(props.uiSchema['ui:description'] || props.schema.description) && (
        <ArrayFieldDescription
          key={`array-field-description-${props.idSchema.$id}`}
          DescriptionField={props.DescriptionField}
          idSchema={props.idSchema}
          description={
            props.uiSchema['ui:description'] || props.schema.description
          }
        />
      )}

      <div key={`array-item-list-${props.idSchema.$id}`}>
        {props.items && props.items.map(p => DefaultArrayItem(p))}

        {props.canAdd && (
          <div justify="flex-end">
            <div item={true}>
              <AddButton
                className="array-item-add"
                onClick={props.onAddClick}
                disabled={props.disabled || props.readonly}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArrayFieldTemplate;
