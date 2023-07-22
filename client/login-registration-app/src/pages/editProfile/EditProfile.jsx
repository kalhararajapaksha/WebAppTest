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
  const [formData, setFormData] = useState({profileImage: 'https://firebasestorage.googleapis.com/v0/b/reactapp-fa184.appspot.com/o/emptydp.jpg?alt=media',
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
  favoriteMovies: '',});

  const [errors, setErrors] = useState({});

  const fetchUserData = async (userId) => {
    try {
      const response = await fetchData(userId);
      const userData = response.data;
      setFormData(userData); 
    } catch (error) {
      console.error('Error fetching user data:', error);
     
    }
  };

useEffect(() => {
  const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      const userId = user.uid;
      fetchUserData(userId);
    } else {
      console.log('User is not logged in.');
    }
  });

  return () => unsubscribe();
}, []);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

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

    if (!formData.mobileNumber) {
      newErrors.mobileNumber = 'Mobile Number is required';
    }

    if (!formData.homeAddress) {
      newErrors.homeAddress = 'Home Address is required';
    }

    if (!formData.postalCode) {
      newErrors.postalCode = 'Postal Code is required';
    }

    if (!formData.salutation) {
      newErrors.salutation = 'Please select salutation';
    }
    if (!formData.country) {
      newErrors.country = 'Please select country';
    }
    if (!formData.nationality) {
      newErrors.nationality = 'Please select nationality';
    }
    if (!formData.gender) {
      newErrors.gender = 'Please select gender';
    }
    if (!formData.maritalStatus) {
      newErrors.maritalStatus = 'Please select marital status';
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
        
        saveUserToFirestore(formDataWithUserId);
      } else {
        console.log('User is not logged in.'); 
      }
    } else {
      console.log('Please fill in the required fields correctly.');
    }
  };
  
  const handleCancel = () => {
    setFormData({profileImage: 'https://firebasestorage.googleapis.com/v0/b/reactapp-fa184.appspot.com/o/emptydp.jpg?alt=media',
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
    favoriteMovies: '',}); 
  };

  return (
    <MainLayout>
      <div>
        <div className="my-profile-header-content">
          <h1 className="profile profile-title">Edit Profile</h1>
        <div className="mt-4">
            <a href="/profile">Go back to My profile</a>
        </div>
      </div>
        <TabView maritalStatus={formData.maritalStatus}>
          <TabView.Tab label="Basic Details">
            <EditUserDetailsBasic formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Additional Details">
            <EditUserDetailsAdditional formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Spouse Details">
            <EditUserDetailsSpouse formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
          <TabView.Tab label="Personal Preferences">
            <EditUserDetailsPreferences formData={formData} handleChange={handleChange} errors={errors} />
          </TabView.Tab>
        </TabView>

        <div className="mt-3 edit-profile-btn">
          <button className="btn btn-primary save-btn me-3" onClick={handleSaveProfile}>
            Save Profile
          </button>
          <button  className="btn btn-primary cancel-btn" onClick={handleCancel}>
            cancel
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default EditProfile;
