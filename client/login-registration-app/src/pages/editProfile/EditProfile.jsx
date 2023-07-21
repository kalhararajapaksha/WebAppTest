import React, { useState,useEffect  } from 'react';
import TabView from '../../components/tabView/TabView';
import EditUserDetailsBasic from '../../components/profileEditTabViews/EditUserDetailsBasic';
import EditUserDetailsAdditional from '../../components/profileEditTabViews/EditUserDetailsAdditional';
import EditUserDetailsSpouse from '../../components/profileEditTabViews/EditUserDetailsSpouse';
import EditUserDetailsPreferences from '../../components/profileEditTabViews/EditUserDetailsPreferences';
import MainLayout from '../../layout/MainLayout';
import { saveUser } from '../../services/api';
import { fetchData } from '../../services/api';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const EditProfile = () => {
  const [formData, setFormData] = useState({
    profileImage: '',
    salutation: '',
    firstName: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    homeAddress: '',
    country: '',
    postalCode: '',
    nationality: '',
    dateOfBirth: '',
    gender: '',
    maritalStatus: '',
    hobbies: '',
    favoriteSports: '',
    musicGenres: '',
    favoriteMovies: '',
  });

  const [errors, setErrors] = useState({});

  const fetchUserData = async (userId) => {
    try {
      const response = await fetchData(userId);
      const userData = response.data;
      console.log(userData);
      setFormData(userData); 
    } catch (error) {
      console.error('Error fetching user data:', error);
     
    }
  };
  useEffect(() => {

    const currentUser = firebase.auth().currentUser;
    if (currentUser) {
      const userId = currentUser.uid;
      fetchUserData(userId);
    } else {
      console.log('User is not logged in.'); 
    }

  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isMarried = false; 

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName) {
      newErrors.firstName = 'First name is required';
    }

    if (!formData.lastName) {
      newErrors.lastName = 'Last name is required';
    }

    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };
  const saveUserToFirestore = async (userObject) => {
    try {
      const response = await saveUser({ userObject });
      console.log(response.data);
      const userId = response.data;
      console.log('User saved to Firestore with ID:');
      
    } catch (error) {
      console.error('Error saving user to Firestore edu:', error);
    
    }
  };

  const handleSaveProfile = () => {
    const isValid = validateForm();
    if (isValid) {
      const currentUser = firebase.auth().currentUser;
      if (currentUser) {
        const userId = currentUser.uid;
        const formDataWithUserId = {
          ...formData,
          userId: userId,
        };
        // Call the saveUserToFirestore function with the formData and userId
        saveUserToFirestore(formDataWithUserId);
      } else {
        console.log('User is not logged in.'); // Handle the case when the user is not logged in
      }
    } else {
      console.log('Please fill in the required fields correctly.');
      // Implement any feedback to the user about invalid form data
    }
  };
  return (
    <MainLayout>
      <div>
        <h1>Edit Profile</h1>
        <TabView>
          <TabView.Tab label="Basic Details">
            <EditUserDetailsBasic formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Additional Details">
            <EditUserDetailsAdditional formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Spouse Details" showWhen={() => isMarried}>
            <EditUserDetailsSpouse formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Personal Preferences">
            <EditUserDetailsPreferences formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
        </TabView>

        <div className="mt-4">
          <button className="btn btn-primary" onClick={handleSaveProfile}>
            Save Profile
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditProfile;
