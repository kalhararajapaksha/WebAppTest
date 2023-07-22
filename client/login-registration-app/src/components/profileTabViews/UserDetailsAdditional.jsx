import React from 'react';

const UserDetailsAdditional = ({ user }) => {
  return (
    <div className="user-basic-details">
      <div className="mt-2">
        <h6 className="detail-title mb-5">Mobile Number<span>*</span></h6>
        <p className="detail-data mb-1"> {user.mobileNumber}</p>
        <h6 className="detail-title mb-5">Home Address<span>*</span></h6>
        <p className="detail-data mb-1"> {user.homeAddress}</p>
        <h6 className="detail-title mb-5">Country<span>*</span></h6>
        <p className="detail-data mb-1"> {user.country}</p>
        <h6 className="detail-title mb-5">Postal code<span>*</span></h6>
        <p className="detail-data mb-1">{user.postalCode}</p>
        <h6 className="detail-title mb-5">Nationality<span>*</span></h6>
        <p className="detail-data mb-1"> {user.nationality}</p>
        <h6 className="detail-title mb-5">Date of Birth</h6>
        <p className="detail-data mb-1"> {user.dateOfBirth}</p>
        <h6 className="detail-title mb-5">Gender</h6>
        <p className="detail-data mb-1"> {user.gender}</p>
        <h6 className="detail-title mb-5">Marital Status</h6>
        <p className="detail-data mb-1">{user.maritalStatus}</p>
      </div>
    </div>
  );
};

export default UserDetailsAdditional;
