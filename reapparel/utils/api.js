// utils/api.js
import axios from 'axios';

// Base URL for the Fake Store API
const BASE_URL = 'https://fakestoreapi.com';

// Function to fetch all products
export const fetchProducts = async (category) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/category/${category}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to fetch a single product by ID
export const fetchProductById = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/products/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error; // Rethrow the error for further handling
  }
};

// Function to submit feedback (you can extend this later to actually post data)
export const submitFeedback = async (feedbackData) => {
  try {
    const response = await axios.post(`${BASE_URL}/feedback`, feedbackData); // Placeholder URL
    return response.data;
  } catch (error) {
    console.error('Error submitting feedback:', error);
    throw error; // Rethrow the error for further handling
  }
};

// You can add more utility functions here as needed
