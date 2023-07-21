import React from 'react';

const UserDetailsPreferences = ({ user }) => {
  return (
    <div>
      {/* */}
      <div>
        <h6>Hobbies:</h6>
        <p>{user.hobbies}</p>
        <h6>Favorite Sports</h6>
        <p>{user.favoriteSports}</p>
        <h6>Music Genres:</h6>
        <p>{user.musicGenres}</p>
        <h6>Favorite Movies</h6>
        <p>{user.favoriteMovies}</p>
      </div>
    </div>
  );
};

export default UserDetailsPreferences;
