import React from 'react';

const UserDetailsPreferences = ({ user }) => {
  return (
    <div>
      <div className="user-basic-details">
        <h6 className="detail-title mb-5">Hobbies :</h6>
        <p className="detail-data mb-1">{user.hobbies}</p>
        <h6 className="detail-title mb-5">Favorite Sports :</h6>
        <p className="detail-data mb-1">{user.favoriteSports}</p>
        <h6 className="detail-title mb-5">Music Genres :</h6>
        <p className="detail-data mb-1">{user.musicGenres}</p>
        <h6 className="detail-title mb-5">Favorite Movies :</h6>
        <p className="detail-data mb-1">{user.favoriteMovies}</p>
      </div>
    </div>
  );
};

export default UserDetailsPreferences;
