import React from 'react';


import { ObjectFieldTemplateProps } from 'react-jsonschema-form';

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  uiSchema,
  idSchema,
}: ObjectFieldTemplateProps) => {

  return (
    <>
      {(uiSchema['ui:title'] || title) && (
        <TitleField
          id={`${idSchema.$id}-title`}
          title={title}
          required={required}
        />
      )}
      {description && (
        <DescriptionField
          id={`${idSchema.$id}-description`}
          description={description}
        />
      )}
      <div className='object-template'>
        {properties.map((element: any, index: number) => (
            {element.content}
        ))}
      </div>
    </>
  );
};

export default ObjectFieldTemplate;
