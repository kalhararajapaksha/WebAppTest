import React from 'react';

const EditUserDetailsSpouse = ({ formData, handleChange, errors }) => {
  const getSpouseSalutation = () => {
    if (formData.gender === 'Male' && formData.maritalStatus === 'Married') {
      return 'Mr.';
    } else if (formData.gender === 'Female' && formData.maritalStatus === 'Married') {
      return 'Mrs.';
    } else {
      return '';
    }
  };


  const initialSpouseSalutation = getSpouseSalutation();

  return (
    <div>
      <div className="form-group">
        <label htmlFor="spouseSalutation">Spouse Salutation:</label>
        <input
          type="text"
          id="spouseSalutation"
          name="spouseSalutation"
          value={`${initialSpouseSalutation} ${formData.firstName} ${formData.lastName}`}
          readOnly 
        />
      </div>
    </div>
  );
};

export default EditUserDetailsSpouse;
