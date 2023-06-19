import React, { useState, useEffect, useCallback } from 'react';
import "./App.css";
import ActivityList from './components/ActivityList';
import SearchBar from './components/SearchBar/SearchBar';
import ActivityI from "./types/Activity";
import { fetchActivities, searchActivities } from './services/api';
import Header from './components/Header/Header';
import ErrorBoundary from './Error/ErrorBoundary';
import ErrorComponent from './Error/ErrorPage';



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
      throw new Error('Error fetching activities');
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
        throw new Error('Error searching activities');
      }
    }
  }, [activities]);

  return (
    <div>
     <ErrorBoundary fallbackComponent={ErrorComponent}>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <ActivityList activities={filteredActivities} />
      </ErrorBoundary>
    </div>
  );
}

export default App;

