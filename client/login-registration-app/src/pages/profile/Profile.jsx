import React, { useState,useEffect } from 'react';
import TabView from '../../components/tabView/TabView';
import UserDetailsBasic from '../../components/profileTabViews/UserDetailsBasic';
import UserDetailsAdditional from '../../components/profileTabViews/UserDetailsAdditional';
import UserDetailsSpouse from '../../components/profileTabViews/UserDetailsSpouse';
import UserDetailsPreferences from '../../components/profileTabViews/UserDetailsPreferences';
import MainLayout from '../../layout/MainLayout';
import { fetchData } from '../../services/api';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const Profile = () => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [user, setUser] = useState({
    profileImage: 'https://firebasestorage.googleapis.com/v0/b/reactapp-fa184.appspot.com/o/emptydp.jpg?alt=media',
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

  const fetchUserData = async (userId) => {
    try {
      const response = await fetchData(userId);
      const userData = response.data;
      console.log(userData);
      setUser(userData); 
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

  const handleToggleEditMode = () => {
    setIsEditMode((prevEditMode) => !prevEditMode);
  };

  const handleSaveProfile = (formData) => {
    setUser(formData);
    setIsEditMode(false);
  };

  const isMarried = user.maritalStatus === 'Married';

  return (
    <MainLayout className="mainlayout">
      <div>
        <div className="my-profile-header-content">
          <h1 className="profile profile-title">My Profile</h1>
          <div className="mt-4">
            <a href="/edit-profile">Edit profile</a>
            {/* <button className="btn btn-primary edit-btn" onClick={handleToggleEditMode}>
              {isEditMode ? "Save Profile" : "Edit Profile"}
            </button> */}
          </div>
        </div>
        <div className="profile-data-wrapper mt-3">
          <TabView maritalStatus={user.maritalStatus}>
            <TabView.Tab label="Basic Details">
              <UserDetailsBasic user={user} />
            </TabView.Tab>
            <TabView.Tab label="Additional Details">
              <UserDetailsAdditional user={user} />
            </TabView.Tab>
            <TabView.Tab label="Spouse Details" showWhen={() => isMarried}>
              <UserDetailsSpouse user={user} />
            </TabView.Tab>
            <TabView.Tab label="Personal Preferences">
              <UserDetailsPreferences user={user} />
            </TabView.Tab>
          </TabView>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
