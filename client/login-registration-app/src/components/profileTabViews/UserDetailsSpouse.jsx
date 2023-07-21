import React from 'react';

const UserDetailsSpouse = ({ user }) => {
  return (
    <div>
      {/*  */}
      <div>
        <p>{`${user.salutation} ${user.firstName} ${user.lastName}`}</p>
      </div>
    </div>
  );
};

export default UserDetailsSpouse;
