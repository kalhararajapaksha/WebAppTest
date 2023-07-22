import React from 'react';

const UserDetailsPreferences = ({ user }) => {
  return (
    <div>
      <div className="user-basic-details">
        <h6 className="detail-title mb-1">Hobbies :</h6>
        <p className="detail-data mb-3">{user.hobbies}</p>
        <h6 className="detail-title mb-1">Favorite Sports :</h6>
        <p className="detail-data mb-3">{user.favoriteSports}</p>
        <h6 className="detail-title mb-1">Music Genres :</h6>
        <p className="detail-data mb-3">{user.musicGenres}</p>
        <h6 className="detail-title mb-1">Favorite Movies :</h6>
        <p className="detail-data mb-3">{user.favoriteMovies}</p>
      </div>
    </div>
  );
};

export default UserDetailsPreferences;
