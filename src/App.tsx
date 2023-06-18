import React, { useState, useEffect } from 'react';
import ActivityList from './components/ActivityList';
import SearchBar from './components/SearchBar';

interface Activity {
  id: number;
  title: string;
  price: number;
  currency: string;
  rating: number;
  specialOffer: boolean;
  supplierId: number;
  supplierName: string;
}

const API_URL = 'http://localhost:3100/activities';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetchActivities();
  }, []);

  const fetchActivities = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setActivities(data);
      setFilteredActivities(data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  const handleSearch = (searchTerm: string) => {
    const filtered = activities.filter((activity) =>
      activity.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredActivities(filtered);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ActivityList activities={filteredActivities} />
    </div>
  );
}

export default App;

