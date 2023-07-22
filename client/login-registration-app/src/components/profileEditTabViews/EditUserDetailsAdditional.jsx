import React from 'react';

const EditUserDetailsAdditional = ({ formData, handleChange, errors }) => {
  return (
    <div className="additional-details-form">
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="mobileNumber">Mobile Number:</label>
        <input
          type="text"
          id="mobileNumber"
          name="mobileNumber"
          value={formData.mobileNumber}
          onChange={handleChange}
          placeholder="Mobile Number"
          className="additonal-detail-edit-form"
        />
        {errors.mobileNumber && <span className="error">{errors.mobileNumber}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="homeAddress">Home Address:</label>
        <input
          type="text"
          id="homeAddress"
          name="homeAddress"
          value={formData.homeAddress}
          onChange={handleChange}
          placeholder="Home Address"
          className="additonal-detail-edit-form"
        />
        {errors.homeAddress && <span className="error">{errors.homeAddress}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="country">Country:</label>
          <select id="country" name="country" value={formData.country} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Germany">Germany</option>
          <option value="Ireland">Ireland</option>
          <option value="Italy">Italy</option>
          <option value="Sri Lanka">Sri Lanka</option>
          <option value="Australia">Australia</option>
        </select>
        {errors.country && <span className="error">{errors.country}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="postalCode">Postal Code:</label>
        <input
          type="text"
          id="postalCode"
          name="postalCode"
          value={formData.postalCode}
          onChange={handleChange}
          placeholder="Postal Code"
          className="additonal-detail-edit-form"
        />
        {errors.postalCode && <span className="error">{errors.postalCode}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="nationality">Nationality:</label>
        <select id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
        <option value="">Select</option>
          <option value="German">German</option>
          <option value="Irish">Irish</option>
          <option value="Italian">Italian</option>
          <option value="Sri Lankan">Sri Lankan</option>
          <option value="Australian">Australian</option>
        </select>
        {errors.nationality && <span className="error">{errors.nationality}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="dateOfBirth">Date of Birth:</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          className="additonal-detail-edit-form"
        />
        {errors.dateOfBirth && <span className="error">{errors.dateOfBirth}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender" value={formData.gender} onChange={handleChange}>
        <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender && <span className="error">{errors.gender}</span>}
      </div>
      <div className="form-group wr-edit-form-input mb-4">
        <label htmlFor="maritalStatus">Marital Status:</label>
        <select id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange}>
          <option value="">Select</option>
          <option value="Single">Single</option>
          <option value="Married">Married</option>
        </select>
        {errors.maritalStatus && <span className="error">{errors.maritalStatus}</span>}
      </div>
    </div>
  );
};

export default EditUserDetailsAdditional;
