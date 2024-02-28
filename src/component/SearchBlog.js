// import React, { useState, useEffect } from 'react';
// import './SearchBlog.css'; // Import your CSS file
// import Filter from './Filter'; // Create this component
// import SearchResult from './SearchResult'; // Create this component

// function SearchBlog() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [selectedFilters, setSelectedFilters] = useState([]);
//   const [results, setResults] = useState([]);

//   // Fetch results when search term changes
//   useEffect(() => {
//     if (searchTerm.trim() === '') {
//       setResults([]);
//       return;
//     }

//     // Perform shallow search here and set results
//     // API call to your backend to fetch the results
//     // Ex: fetchResultsFromDatabase(searchTerm, selectedFilters)
//     // setResults(apiResponse);
//    // Shallow search API call
//     fetchResultsFromDatabase(searchTerm, selectedFilters)
//     .then(apiResponse => {
//       setResults(apiResponse);
//     })
//    .catch(error => {
//      console.error('Error fetching shallow results:', error);
//    });

//   }, [searchTerm, selectedFilters]);

//   // Fetch results when search button is clicked

//     // Perform thorough search here and set results
//     // Similar to the shallow search, make an API call to fetch results
//     // Ex: fetchResultsFromDatabase(searchTerm, selectedFilters, thorough=true)
//     // setResults(apiResponse);
//   const handleSearchClick = () => {
//     if (searchTerm.trim() === '') {
//       setResults([]);
//       return;
//     }

//       // Thorough search API call
//       fetchResultsFromDatabase(searchTerm, selectedFilters, true)
//       .then(apiResponse => {
//         setResults(apiResponse);
//       })
//       .catch(error => {
//         console.error('Error fetching thorough results:', error);
//       });
//   };

//   const fetchResultsFromDatabase = (term, filters, thorough = false) => {
//     // Construct API request based on the search term, filters, and thorough flag
//     const requestOptions = {
//       method: 'POST', // or 'GET' based on your API
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ term, filters, thorough })
//     };

//     const apiUrl = 'http://localhost:5000/mangal/';

//     return fetch(apiUrl, requestOptions)
//       .then(response => response.json())
//       .catch(error => {
//         console.error('API call error:', error);
//         throw error;
//       });
//   };

//   const handleFilterToggle = (filter) => {
//     setSelectedFilters((prevFilters) =>
//       prevFilters.includes(filter)
//         ? prevFilters.filter((item) => item !== filter)
//         : [...prevFilters, filter]
//     );
//   };

//   return (
//     <div className="SearchBlog">
//       {/* <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <button onClick={handleSearchClick}>Search</button>
//       </div>
//       <Filter selectedFilters={selectedFilters} onFilterToggle={handleFilterToggle} /> */}
//       <SearchResult results={results} />
//     </div>
//   );
// }

// export default SearchBlog;

import React, { useState, useEffect } from "react";
import "./SearchBlog.css"; // Import your CSS file
import axios from "axios"; // Import axios for making API requests
import Filter from "./Filter"; // Create this component
import SearchResult from "./SearchResult"; // Create this component
import NewBar from "./NewBar";
import Footer from "./footer";

function SearchBlog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setResults([]);
      return;
    }

    // Fetch results when search term changes
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

  const handleSearchClick = async () => {
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
    // Perform thorough search here and set results
    // Similar to the shallow search, make an API call to fetch results
    // Example: fetchResultsFromDatabase(searchTerm, selectedFilters, thorough=true)
    // setResults(apiResponse);
  };

  const handleFilterToggle = (filter) => {
    setSelectedFilters((prevFilters) =>
      prevFilters.includes(filter)
        ? prevFilters.filter((item) => item !== filter)
        : [...prevFilters, filter]
    );
  };

  return (
    <div>
      <NewBar />

      <div className="SearchBlog">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {/* <button onClick={handleSearchClick}>Search</button> */}
        </div>
        <Filter
          selectedFilters={selectedFilters}
          onFilterToggle={handleFilterToggle}
        />
        <SearchResult results={results} />
      </div>

      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Footer />
    </div>
  );
}

export default SearchBlog;
