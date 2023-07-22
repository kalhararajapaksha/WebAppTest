import React from 'react';

const EditUserDetailsSpouse = ({ formData, handleChange, errors }) => {

  if (formData.maritalStatus === 'Single') {
    return null;
  }
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
      <div className="form-group wr-edit-form-input">
        <label htmlFor="spouseSalutation">Spouse Salutation:</label>
        <input
          type="text"
          id="spouseSalutation"
          name="spouseSalutation"
          className="additonal-detail-edit-form"
          value={`${initialSpouseSalutation} ${formData.firstName} ${formData.lastName}`}
          readOnly 
        />
      </div>
    </div>
  );
};

export default EditUserDetailsSpouse;
