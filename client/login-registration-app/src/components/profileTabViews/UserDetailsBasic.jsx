import React from 'react';

const UserDetailsBasic = ({ user }) => {
  return (
    <div>
      <div className="mb-4">
        <img src={user.profileImage} alt="Profile" className="img-thumbnail" style={{ cursor: 'pointer', width: '200px', height: '200px' }}/>
      </div>
      <div>
        <h6>Salutation<span>*</span></h6>
        <p>{user.salutation}</p>
        <h6>First Name<span>*</span></h6>
        <p>{user.firstName}</p>
        <h6>Last Name<span>*</span></h6>
        <p>{user.lastName}</p>
        <h6>Email address<span>*</span></h6>
        <p>{user.email}</p>
      </div>
    </div>
  );
};

export default UserDetailsBasic;
