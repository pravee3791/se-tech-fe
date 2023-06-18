import React, { useState, useEffect } from 'react';
import ActivityList from './components/ActivityList';
import SearchBar from './components/SearchBar';
import ActivityI from "./types/Activity";
import { fetchActivities } from './services/api';


const API_URL = 'http://localhost:3100/activities';

function App() {
  const [activities, setActivities] = useState<ActivityI[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityI[]>([]);

  useEffect(() => {
    fetchActivityData();
  }, []);

  const fetchActivityData = async () => {
    try {
      const data = await fetchActivities();
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

