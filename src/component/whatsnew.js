// // import React,{useEffect,useState} from 'react'
// // import axios from 'axios';
// // import { Carousel } from 'react-responsive-carousel';

// // export default function Whatsnew() {

// //     const [cardNew, setCardnew] = useState([]);
// //     // useEffect(() => {
// //     //     // Fetch data from the API when the component mounts
// //     //     axios.get('http://localhost:5000/mangal/getblog')
// //     //       .then(response => {
// //     //         setCardData(response.data);
// //     //       })
// //     //       .catch(error => {
// //     //         console.error('Error fetching data:', error);
// //     //       });
// //     //   }, []);
// //     useEffect(() => {
// //         console.log("Fetching data...");
// //         axios.get('http://localhost:5000/mangal/random-whatsnew')
// //           .then(response => {
// //             console.log("Data fetched:", response.data);
// //             setCardnew(response.data);
// //           })
// //           .catch(error => {
// //             console.error('Error fetching data:', error);
// //           });
// //       }, []);

// // console.log('new blogs:' ,cardNew);

// //     //   useEffect(() => {
// //     //     const fetchData = async () => {
// //     //         try {
// //     //           const response = await axios.get("http://localhost:5000/mangal/random-whatsnew", {
// //     //             headers: {
// //     //               'Content-Type': 'application/json',
// //     //             },
// //     //           });

// //     //           setData(response.data);
// //     //           console.log(response.data);
// //     //         } catch (error) {
// //     //           console.error('Error fetching data:', error);
// //     //         }
// //     //       };
// //     //     fetchData(); // Fetch data when the component mounts
// //     //   }, []);
// //     //   console.log("blogs: ",blogs);

// //   return (
// //     <div><div className="container text-center" style={{ marginTop: '10px' }}>
// //     <div className="row card-row">
// //       <Carousel
// //         showThumbs={false}
// //         autoPlay={true}
// //        // interval={1000}
// //         infiniteLoop={true}
// //         showArrows={true}
// //         showStatus={true}
// //         showIndicators={true}
// //         centerMode={true}
// //         centerSlidePercentage={25}
// //       >
// //         {cardNew.map((item) => (
// //           <div className="col card-column" key={item._id} style={{ marginTop: '40px' }}>
// //             <div className="card" style={{ width: "18rem" }}>
// //               <img
// //                 src={item.image}
// //                 className="card-img-top"
// //                 alt="..."
// //                 height={"200px"}
// //                 width={"400px"}
// //               />
// //               <div className="card-body">
// //                 <h5 className="card-title">{item.title}</h5>
// //                 {/* <p className="card-text">
// //                   {item.content}
// //                 </p> */}
// //                 <a href="/readblog" className="btn btn-primary">
// //                   Read More..
// //                 </a>
// //               </div>
// //             </div>
// //           </div>
// //         ))}
// //       </Carousel>
// //     </div>
// //   </div></div>
// //   )
// // }

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Carousel } from 'react-responsive-carousel';
// import 'react-responsive-carousel/lib/styles/carousel.min.css';
// import { Link } from 'react-router-dom';
// import Testing from './Testing';

// export default function Whatsnew() {
//   const [cardNew, setCardNew] = useState([]);
// //console.log("log")
//   useEffect(() => {
//     console.log("Fetching data...");
//     axios.get('http://localhost:5000/mangal/random-whatsnew')
//       .then(response => {
//         console.log("Data fetched:", response.data);
//         setCardNew(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div className="container text-center" style={{ marginTop: '10px' }}>
//       {/* <div className="row card-row"> */}
//         {/* <Carousel
//           showThumbs={false}
//           autoPlay={true}
//           infiniteLoop={true}
//           showArrows={true}
//           showStatus={true}
//           showIndicators={true}
//           centerMode={true}
//           centerSlidePercentage={25}
//         > */}
//           {/* {cardNew.map((item) => (
//             <div className="col card-column" key={item._id} style={{ marginTop: '40px' }}>
//               <div className="card" style={{ width: "18rem" }}>
//                 <img
//                   src={item.image}
//                   className="card-img-top"
//                   alt="..."
//                   height={"200px"}
//                   width={"400px"}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5> */}
//                   {/* <p className="card-text">
//                     {item.content}
//                   </p> */}
//                   {/* <a href="/readblog" className="btn btn-primary">
//                     Read More..
//                   </a> */}
//                   {/* <Link to={`/random-whatsnew/${item._id}`}>Read more</Link>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//           <div style={{display:'flex',flexDirection:'row',width: '100vw',marginTop:20,marginBottom:20}}>
//            <div className="container text-center" style={{ marginTop: '10px' }}>
//             <div className="row card-row" style={{marginLeft:'40px',marginBottom:'20px',display:'flex'}} >
//                 {/* {cardNew.map((blog) => (

// <div className="col card-column" key={blog._id} style={{ marginTop: '40px' }}>

//     <Testing key={blog._id} item={blog} style={{width:40}} />

// </div>
//                     ))} */}
//                 </div>
//                 {cardNew.map((blog) => (

// <div className="col card-column" key={blog._id} style={{ marginTop: '40px' }}>

//     <Testing key={blog._id} item={blog} style={{width:40}} />

// </div>

// ))}
//             </div>
//         {/* </Carousel> */}
//       </div>
//       </div>
//     // </div>
//   );
// }

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Testing from "./Testing";
import TestinsWhatsnew from "./TestingWhatsnew";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Whatsnew() {
  const [cardNew, setCardNew] = useState([]);

  useEffect(() => {
    console.log("Fetching data...");
    axios
      .get("http://localhost:5000/mangal/recently-posted-whatsnew")
      .then((response) => {
        console.log("Data fetched:", response.data);
        setCardNew(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container text-center" style={{ marginTop: "10px" }}>
      <div
        style={{
          marginBottom: "20px",
          gap: "0px",
          display: "flex",
          flexDirection: "row",
          width: "100vw",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        {cardNew.map((blog) => (
          <div
            className="col card-column"
            key={blog._id}
            style={{ marginTop: "40px" }}
          >
            {/* <TestingWhatsnew /> */}
            <TestinsWhatsnew key={blog._id} item={blog} style={{ width: 40 }} />
          </div>
        ))}
      </div>
    </div>
  );
}
