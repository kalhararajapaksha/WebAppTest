import React from "react";
import { uploadImage } from "../../services/api"; // Import the uploadImage function
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { toast } from "react-toastify";

const EditUserDetailsBasic = ({ formData, handleChange, errors }) => {
  const handleImageChange = async (e) => {
    const file = e.target.files[0];

    const currentUser = firebase.auth().currentUser;
    if (!currentUser) {
      toast.error("User is not authenticated.");
      return;
    }
    const userToken = currentUser.uid;

    uploadImage(file, userToken)
      .then((response) => {
        console.log(response.data);
        const imageUrl = response.data.imageUrl;
        handleChange({
          target: {
            name: "profileImage",
            value: imageUrl,
          },
        });
      })
      .catch((error) => {
        toast.error("Error uploading the image:", error);
      });
  };

  return (
    <div>
      <div className="edit-form-wrapper">
        <div className="mb-4 image-wrapper">
          <img
            src={formData.profileImage}
            alt="Profile"
            className="img-thumbnail"
            style={{ cursor: "pointer", width: "200px", height: "200px" }}
            onClick={() => document.getElementById("profileImageInput").click()}
          />
          <input
            type="file"
            id="profileImageInput"
            accept="image/*"
            style={{ display: "none" }}
            onChange={handleImageChange}
          />
          <label className="image-label mt-1">
            Upload Image <br />
            <span className="image-text">
              JPG or PNG format with <br /> maximum size of 1 MB
            </span>
          </label>
        </div>
        <div className="wr-edit-form-input">
          <div className="form-group edit-form-input mb-4">
            <label htmlFor="salutation me-1">Select Salutation*</label>
            <select
              id="salutation"
              name="salutation"
              value={formData.salutation}
              onChange={handleChange}
              style={{ widows: '200px' }}
            >
              <option value="Mr.">Mr.</option>
              <option value="Ms.">Ms.</option>
              <option value="Mrs.">Mrs.</option>
            </select>
          </div>
          
          <div className="form-group edit-form-input mb-4">
            <label htmlFor="firstName">First Name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="edit-form"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name"
            />
              {errors.firstName && (
                <span className="error">{errors.firstName}</span>
              )}
          </div>
          
          <div className="form-group edit-form-input mb-4">
            <label htmlFor="lastName">Last Name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="edit-form"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
            />
            {errors.lastName && (
              <span className="error">{errors.lastName}</span>
            )}
          </div>
          
          <div className="form-group edit-form-input mb-4">
            <label htmlFor="email">Email address*</label>
            <input
              type="text"
              id="email"
              name="email"
              className="edit-form"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUserDetailsBasic;
