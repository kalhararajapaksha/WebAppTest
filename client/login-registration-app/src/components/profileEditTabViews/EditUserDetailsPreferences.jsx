import React from 'react';

const EditUserDetailsPreferences = ({ formData, handleChange, errors }) => {
  return (
    <div className="">
      <div className="form-group wr-edit-form-input mb-3">
        <label htmlFor="hobbies">Hobbies and Interests:</label>
        <input
          type="text"
          id="hobbies"
          name="hobbies"
          value={formData.hobbies}
          onChange={handleChange}
          placeholder="Ex: Reading, Traveling"
          className="additonal-detail-edit-form"
        />
        {errors.hobbies && <span className="error">{errors.hobbies}</span>}
      </div>
      
      <div className="form-group wr-edit-form-input mb-3">
        <label htmlFor="favoriteSports">Favorite Sports:</label>
        <input
          type="text"
          id="favoriteSports"
          name="favoriteSports"
          value={formData.favoriteSports}
          onChange={handleChange}
          placeholder="Ex: Soccer, Cricket"
          className="additonal-detail-edit-form"
        />
        {errors.favoriteSports && <span className="error">{errors.favoriteSports}</span>}
      </div>
      
      <div className="form-group wr-edit-form-input mb-3">
        <label htmlFor="musicGenres">Preferred Music Genre(s):</label>
        <input
          type="text"
          id="musicGenres"
          name="musicGenres"
          value={formData.musicGenres}
          onChange={handleChange}
          placeholder="Ex: Rock, Pop"
          className="additonal-detail-edit-form"
        />
        {errors.musicGenres && <span className="error">{errors.musicGenres}</span>}
      </div>
      
      <div className="form-group wr-edit-form-input mb-3">
        <label htmlFor="favoriteMovies">Favorite Movie/TV Show(s):</label>
        <input
          type="text"
          id="favoriteMovies"
          name="favoriteMovies"
          value={formData.favoriteMovies}
          onChange={handleChange}
          placeholder="Ex: Action, Comedy"
          className="additonal-detail-edit-form"
        />
        {errors.favoriteMovies && <span className="error">{errors.favoriteMovies}</span>}
      </div>
    </div>
  );
};

export default EditUserDetailsPreferences;
