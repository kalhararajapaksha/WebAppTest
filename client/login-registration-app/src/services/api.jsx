import axios from 'axios';

const API_URL = 'http://localhost:5000'; 

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (userData) => {
  return api.post('/api/register', userData);
};

export const loginUser = (userData) => {
  return api.post('/api/login', userData);
};

export const uploadImage = async (file, userToken) => {
  try {
    const formData = new FormData();
    formData.append('image', file);

    const headers = {
      Authorization: `${userToken}`,
      'Content-Type': 'multipart/form-data', 
    };

    const response = await api.post('/api/upload', formData, { headers });
    return response;
  } catch (error) {
    
    throw error;
  }
};

export const saveUser = async (userObject) => {
  try {
    const response = await api.post('/api/saveUser', userObject);
    const userId = response.data.userId;
    console.log('User saved to Firestore with ID:');
  } catch (error) {
    console.error('Error saving user to Firestore:', error);
  }
};

export const fetchData = async (userId) => {
  try {
    const response = await api.get(`/api/getUser/${userId}`);
    const userData = response.data;
    return response;
  } catch (error) {
    console.error('Error fetching user data:', error);
    
  }
};
