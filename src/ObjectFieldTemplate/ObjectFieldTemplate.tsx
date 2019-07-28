import React from 'react';
import { ObjectFieldTemplateProps } from 'react-jsonschema-form';
import ObjectFieldTemplateContext from './ObjectFieldTemplateContext';

const ObjectFieldTemplate = ({
  DescriptionField,
  description,
  TitleField,
  title,
  properties,
  required,
  schema,
  uiSchema,
  idSchema
}: ObjectFieldTemplateProps) => {
  return (
    <ObjectFieldTemplateContext.Consumer>
       {
          templates => {
            const objectFieldTemplate = uiSchema['ui:template'] ;
            if (objectFieldTemplate && templates.hasOwnProperty(objectFieldTemplate)) {
              return templates[objectFieldTemplate];
            }

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
                {properties.map((element: any) => element.content)}
              </>
            )
          }
       }
    </ObjectFieldTemplateContext.Consumer>
  );
};

export default ObjectFieldTemplate;
