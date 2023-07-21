import React from 'react';

const UserDetailsAdditional = ({ user }) => {
  return (
    <div>
      {/* */}
      <div>
        <h6>Mobile Number<span>*</span></h6>
        <p> {user.mobileNumber}</p>
        <h6>Home Address<span>*</span></h6>
        <p> {user.homeAddress}</p>
        <h6>Country<span>*</span></h6>
        <p> {user.country}</p>
        <h6>Postal code<span>*</span></h6>
        <p>{user.postalCode}</p>
        <h6>Nationality<span>*</span></h6>
        <p> {user.nationality}</p>
        <h6>Date of Birth</h6>
        <p> {user.dateOfBirth}</p>
        <h6>Gender</h6>
        <p> {user.gender}</p>
        <h6>Marital Status</h6>
        <p>{user.maritalStatus}</p>
      </div>
    </div>
  );
};

export default UserDetailsAdditional;
