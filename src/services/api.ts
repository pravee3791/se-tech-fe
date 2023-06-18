// services/api.ts

const API_URL = 'http://localhost:3100/activities';

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

export const searchActivities = async (query: string) => {
    try {
      const url = `${API_URL}/search?query=${query}`;
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error searching activities:', error);
      throw error;
    }
  };
