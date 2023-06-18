// services/api.ts

const API_URL = 'http://localhost:3000/activities';

export const fetchActivities = async () => {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching activities:', error);
    throw error;
  }
};
