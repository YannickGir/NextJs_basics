
import React from 'react';
import DynamicForm from '../../components/DynamicForm';
import formConfig from '../../pages/form/formConfig';

const VotrePage = () => {
  return (
    <div>
      <h1>Formulaire dynamique</h1>
      <DynamicForm formType="registrationForm" formConfig={formConfig} />
    </div>
  );
};

export default VotrePage;
