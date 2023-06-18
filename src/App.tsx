import React, { useState, useEffect, useCallback } from 'react';
import  "./App.css";
import ActivityList from './components/ActivityList';
import SearchBar from './components/SearchBar/SearchBar';
import ActivityI from "./types/Activity";
import { fetchActivities , searchActivities } from './services/api';
import Header from './components/Header/Header';



function App() {
  const [activities, setActivities] = useState<ActivityI[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityI[]>([]);

  useEffect(() => {
    fetchActivityData();
  }, []);

  const fetchActivityData = useCallback(async () => {
    try {
      const data = await fetchActivities();
      setActivities(data);
      setFilteredActivities(data);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  }, []);

  const handleSearch = useCallback(async (searchTerm: string) => {
    if (searchTerm.trim() === '') {
      setFilteredActivities(activities);
    } else {
      try {
        const data = await searchActivities(searchTerm);
        setFilteredActivities(data);
      } catch (error) {
        console.error('Error searching activities:', error);
      }
    }
  }, [activities]);

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <ActivityList activities={filteredActivities} />
    </div>
  );
}

export default App;

