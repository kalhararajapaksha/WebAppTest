import React from 'react';

const UserDetailsBasic = ({ user }) => {
  return (
    <div className="user-basic-details-wrapper">
      <div className="mb-4 detail-image-wrapper">
        <img src={user.profileImage} alt="Profile" className="img-thumbnail"/>
      </div>
      <div className="user-basic-details">
        <h6 className="detail-title mb-1">Salutation<span>*</span></h6>
        <p className="detail-data mb-3">{user.salutation}</p>
        <h6 className="detail-title mb-1">First Name<span>*</span></h6>
        <p className="detail-data mb-3">{user.firstName}</p>
        <h6 className="detail-title mb-1">Last Name<span>*</span></h6>
        <p className="detail-data mb-3">{user.lastName}</p>
        <h6 className="detail-title mb-1">Email address<span>*</span></h6>
        <p className="detail-data mb-3">{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetailsBasic;
