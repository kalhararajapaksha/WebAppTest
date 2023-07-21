import React from 'react';

const EditUserDetailsPreferences = ({ formData, handleChange, errors }) => {
  return (
    <div>
      {/* Implement form fields for editing personal preferences */}
      <div className="form-group">
        <label htmlFor="hobbies">Hobbies and Interests:</label>
        <input
          type="text"
          id="hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          placeholder="Hobbies and Interests"
        />
        {errors.hobbies && <span className="error">{errors.hobbies}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="favoriteSports">Favorite Sports:</label>
        <input
          type="text"
          id="favoriteSports"
          name="favoriteSports"
          value={formData.favoriteSports}
          onChange={handleChange}
          placeholder="Favorite Sports"
        />
        {errors.favoriteSports && <span className="error">{errors.favoriteSports}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="musicGenres">Preferred Music Genre(s):</label>
        <input
          type="text"
          id="musicGenres"
          name="musicGenres"
          value={formData.musicGenres}
          onChange={handleChange}
          placeholder="Preferred Music Genre(s)"
        />
        {errors.musicGenres && <span className="error">{errors.musicGenres}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="favoriteMovies">Favorite Movie/TV Show(s):</label>
        <input
          type="text"
          id="favoriteMovies"
          name="favoriteMovies"
          value={formData.favoriteMovies}
          onChange={handleChange}
          placeholder="Favorite Movie/TV Show(s)"
        />
        {errors.favoriteMovies && <span className="error">{errors.favoriteMovies}</span>}
      </div>
    </div>
  );
};

export default EditUserDetailsPreferences;
