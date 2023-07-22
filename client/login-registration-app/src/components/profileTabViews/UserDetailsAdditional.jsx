import React from 'react';

const UserDetailsAdditional = ({ user }) => {
  return (
    <div className="user-basic-details">
      <div className="mt-2">
        <h6 className="detail-title mb-1">Mobile Number<span>*</span></h6>
        <p className="detail-data mb-3"> {user.mobileNumber}</p>
        <h6 className="detail-title mb-1">Home Address<span>*</span></h6>
        <p className="detail-data mb-3"> {user.homeAddress}</p>
        <h6 className="detail-title mb-1">Country<span>*</span></h6>
        <p className="detail-data mb-3"> {user.country}</p>
        <h6 className="detail-title mb-1">Postal code<span>*</span></h6>
        <p className="detail-data mb-3">{user.postalCode}</p>
        <h6 className="detail-title mb-1">Nationality<span>*</span></h6>
        <p className="detail-data mb-3"> {user.nationality}</p>
        <h6 className="detail-title mb-1">Date of Birth</h6>
        <p className="detail-data mb-3"> {user.dateOfBirth}</p>
        <h6 className="detail-title mb-1">Gender</h6>
        <p className="detail-data mb-3"> {user.gender}</p>
        <h6 className="detail-title mb-1">Marital Status</h6>
        <p className="detail-data mb-3">{user.maritalStatus}</p>
      </div>
    </div>
  );
};

export default UserDetailsAdditional;
