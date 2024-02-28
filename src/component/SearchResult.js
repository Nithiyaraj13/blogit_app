// import React from 'react';

// function SearchResult({ results }) {
//   return (
//     <div className="results-container">
//       <h2>Search Results</h2>
//       <ul>
//         {results.map((result) => (
//           <li key={result.id}>{result.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResult;

// working code
// import './SearchResult.css'; // Import your SearchResult.css or any other CSS file you're using
// import React,{useEffect,useState} from 'react';
// import {Link } from 'react-router-dom';
// import NavBar from './Navbar'
// import Footer from './footer'
// import 'bootstrap/dist/css/bootstrap.css';
// import Button from 'react-bootstrap/Button';
// import {MdDelete} from 'react-icons/md';
// import {AiTwotoneEdit} from 'react-icons/ai';
// import { useParams } from "react-router-dom";
// import Modal from 'react-bootstrap/Modal';
// import axios from 'axios';

// function SearchResult() {
//   const [cardData, setCardData] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     // Fetch data from the API when the component mounts
//     axios.get('http://localhost:5000/mangal/fetchblogs')
//       .then(response => {
//         setCardData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   const filteredCards = cardData.filter(card => {
//     return card.title.toLowerCase().includes(search.toLowerCase()) && card.post.toLowerCase().includes(search.toLowerCase());
//   });

//   return (

//       <div className="results-container">
//       <input type="text" placeholder="Search" onChange={e => setSearch(e.target.value)} /> <br></br><br></br>
//       <div>
//         {/* <h1 style={{ fontWeight: '600' }}>Results</h1> */}
//       </div>
//       <br></br>
//       <div className='myblog'>
//         {filteredCards.length > 0 ? (
//           filteredCards.map(card => (
//           <div key={card.id} className="card mb-3 mx-auto" style={{ maxWidth: '1000px' }}>
//             <div className="row g-2">
//               <div className="col-md-4">

//                 <img
//                   src={card.image}
//                   className="img-fluid rounded-start"
//                   alt="..."
//                 />

//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">

//                   <h5 className="card-title">{card.title}</h5>
//                   <small>{card.category}</small><br></br>
//                   <Link to={`/readblog/${card._id}`}>Read more</Link>

//                   <p className="card-text">
//                     <small className="text-muted">{new Date(card.updatedAt).toDateString}</small>
//                     <span className='card-date'>{new Date(card.createdAt).toDateString}</span>
//                   </p>
//                   <div className='d-flex justify-content-between align-items-center'>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//         ) : (
//           <p>No results found.</p>
//         )}

//       </div>

//     </div>

//   );
// }

// export default SearchResult;

// import React from 'react';
// import './SearchResult.css';

// function SearchResult({ results }) {
//   return (
//     <div className="results-container">
//       <h2>Search Results</h2>
//       <ul>
//         {results.map((result) => (
//           <li className="result-item" key={result.id}>
//             {result.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SearchResult;

import React from "react";
import "./SearchResult.css";
import { Button } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import { Link } from "react-router-dom";
import emptyNotebookImage from "../logos/no-task.png";
import X from "../logos/x.png";

function SearchResult({ results }) {
  return (
    <div className="results-container">
      <h2>Search Results</h2>
      <ul>
        {results.length === 0 ? (
          <>
            {/* <img src={emptyNotebookImage} alt="Empty Notebook" />
      <p >Writer's Blank</p> */}
            {/* <img src='https://cdn.punchng.com/wp-content/uploads/2023/07/24084806/Twitter-new-logo.jpeg'/> */}
          </>
        ) : (
          results.map((result) => (
            <li className="result-item" key={result._id}>
              <h3>{result.title}</h3>
              <h4>Category: {result.category}</h4>
              <h4>Author: {result.author}</h4>
              <img src={result.image} alt={result.title} />
              <br></br>
              <Link to={`/random-blogs/${result._id}`}>
                <Button
                  flex="1"
                  variant="outline"
                  colorScheme="blue"
                  leftIcon={<FiExternalLink />}
                >
                  Read
                </Button>
              </Link>
              {/* <h4>{result.post}</h4> */}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SearchResult;
