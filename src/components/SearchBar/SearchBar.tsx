import React, { useState } from 'react';
import "./SearchBar.css";

interface Props {
  onSearch: (searchTerm: string) => void;
}

function SearchBar({ onSearch }: Props) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={handleInputChange}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
