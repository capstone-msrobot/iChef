import React from 'react';

const FormErrors = ({formErrors}) =>
  <div className='formErrors' id="formMessage">
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        let name = fieldName;
        name = name.charAt(0).toUpperCase() + name.slice(1);
        return (
            
          <p key={i}>{name} {formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>

export default FormErrors;