import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Search.css";
import Filter from "./Filter"; // Import the Filter component
import SearchResult from "./SearchResult"; // Import the SearchResult component

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [results, setResults] = useState([]);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    const fetchFilteredBlogs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/mangal/filtered-blogs",
          {
            params: {
              search: searchTerm,
              checkboxes: selectedFilters,
            },
          }
        );
        setResults(response.data.blogs);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };

    fetchFilteredBlogs();
  }, [searchTerm, selectedFilters]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="search-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={toggleFilters}>Toggle Filters</button>
      </div>
      <div className={`filter-container ${showFilters ? "open" : ""}`}>
        <Filter
          selectedFilters={selectedFilters}
          onFilterToggle={(filter) =>
            setSelectedFilters((prevFilters) =>
              prevFilters.includes(filter)
                ? prevFilters.filter((item) => item !== filter)
                : [...prevFilters, filter]
            )
          }
        />
      </div>
      <SearchResult results={results} />
    </div>
  );
}

export default Search;
