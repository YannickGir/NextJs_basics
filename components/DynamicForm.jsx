// DynamicForm.jsx
import React from 'react';
import { useFormik } from 'formik';

const DynamicForm = ({ formType, formConfig }) => {
  const formFields = formConfig[formType] || [];

  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => {
      console.log('Form values:', values);
      // add fetch datas, update pages etc...
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      {formFields.map((field) => (
        <div key={field.name}>
          <label htmlFor={field.name}>{field.label}</label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name] || ''}
              required={field.required}
            >
              {field.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name] || ''}
              required={field.required}
            />
          ) : field.type === 'checkbox' ? (
            <input
              type="checkbox"
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              checked={formik.values[field.name] || false}
            />
          ) : (
            <input
              type={field.type}
              id={field.name}
              name={field.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name] || ''}
              required={field.required}
            />
          )}
          {formik.touched[field.name] && formik.errors[field.name] && (
            <div>{formik.errors[field.name]}</div>
          )}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default DynamicForm;
