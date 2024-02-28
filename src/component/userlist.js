// import React, { useState, useEffect } from "react";

// import axios from "axios";

// import { Button } from "react-bootstrap";

// import { Link } from "react-router-dom";

// import "./userlist.css";

// import Footer from "./footer";

// import NavBar from "./Navbar";

// import AdminNav from "./adminnav";
// import { Modal } from "react-bootstrap";

// function UserList() {

//   const [users, setUsers] = useState([]);

//   useEffect(() => {

//     axios.get("http://localhost:5000/mangal/get-users")

//       .then(response => {

//         console.log(response.data)

//         setUsers(response.data);

//       })

//       .catch(error => {

//         console.error("Error fetching data:", error);

//       });

//   }, []);

//   const handleDelete = (Email) => {

//     axios.delete(`http://localhost:5000/mangal/delete-users/${Email}`)

//       .then(response => {

//         console.log(response.data);

//         setUsers(users.filter(user => user.Email !== Email));

//       })

//       .catch(error => {

//         console.error("Error deleting user:", error);

//       });

//   };

//   const handleToggleStatus = (email, isActive) => {

//     const newStatus = !isActive;

//     axios.put(`http://localhost:5000/mangal/toggle-status/${email}`, { isActive: newStatus })

//         .then(response => {

//             console.log(response.data);

//             setUsers(users.map(user => user.Email === email ? { ...user, isActive: newStatus } : user));

//         })

//         .catch(error => {

//             console.error("Error toggling status:", error);

//         });

// };

//     return (

//         <div>

//           <AdminNav/>

//         <div className="user-list-container" style={{marginTop:'30px',marginBottom:'30px'}}>

//           <h2 className="user-list-header">User List</h2>

//           <table className="user-list-table">

//             <thead>

//               <tr>

//                 <th>Name</th>

//                 <th>Email</th>

//                 <th>Phone Number</th>

//                 <th>Actions</th>

//               </tr>

//             </thead>

//             <tbody>

//               {users.map(user => (

//                 <tr key={user.id}>

//                   <td>

//                     {user.Name}

//                   </td>

//                   <td>

//                     {user.Email}

//                   </td>

//                   <td>

//                     {user.Phnumber}

//                   </td>

//                   <td>

//                   <button onClick={() => handleToggleStatus(user.Email, user.isActive)}>

//                         {user.isActive ? "Deactivate" : "Activate"}

//                     </button>

//                     <hr/>

//                     <button onClick={() => handleDelete(user.Email)}>Delete</button>

//                   </td>

//                 </tr>

//               ))}

//             </tbody>

//           </table>

//         </div>
//         <Modal show={showModal} onHide={() => setShowModal(false)}>
//   <Modal.Header closeButton>
//     <Modal.Title>Confirm Deletion</Modal.Title>
//   </Modal.Header>
//   <Modal.Body>
//     Are you sure you want to delete the blog with title: <strong></strong>?
//   </Modal.Body>
//   <Modal.Footer>
//     <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
//     <Button variant="danger" onClick={() => handleDeleteConfirmed(user.id)}>Delete</Button>
//   </Modal.Footer>
// </Modal>

//         {/* <Link to = "/login" ><Button variant='outline-info' >Logout</Button></Link> */}

//     <Footer/>

//         </div>

//       );

//     }

// export default UserList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./userlist.css";
import Footer from "./footer";
import NavBar from "./Navbar";
import AdminNav from "./adminnav";
import { Modal } from "react-bootstrap";

function UserList() {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/mangal/get-users")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleDelete = (Email) => {
    axios
      .delete(`http://localhost:5000/mangal/delete-users/${Email}`)
      .then((response) => {
        console.log(response.data);
        setUsers(users.filter((user) => user.Email !== Email));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  const handleToggleStatus = (email, isActive) => {
    const newStatus = !isActive;
    axios
      .put(`http://localhost:5000/mangal/toggle-status/${email}`, {
        isActive: newStatus,
      })
      .then((response) => {
        console.log(response.data);
        setUsers(
          users.map((user) =>
            user.Email === email ? { ...user, isActive: newStatus } : user
          )
        );
      })
      .catch((error) => {
        console.error("Error toggling status:", error);
      });
  };

  const handleDeleteConfirmed = (id) => {
    axios
      .delete(`http://localhost:5000/mangal/delete-blog/${id}`)
      .then((response) => {
        console.log("Document deleted successfully:", response.data);
        setUsers(users.filter((user) => user.id !== id));
        setShowModal(false);
      })
      .catch((error) => {
        console.error("Error deleting document:", error);
      });
  };

  return (
    <div>
      <AdminNav />
      <div
        className="user-list-container"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <h2 className="user-list-header">User List</h2>
        <table className="user-list-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.Name}</td>
                <td>{user.Email}</td>
                <td>{user.Phnumber}</td>
                <td>
                  <button
                    onClick={() =>
                      handleToggleStatus(user.Email, user.isActive)
                    }
                    colorScheme={user.isActive ? "green" : "blue"}
                  >
                    {user.isActive ? "Deactivate" : "Activate"}
                  </button>

                  <hr />
                  <button
                    onClick={() => {
                      setShowModal(true);
                      setUserToDelete(user);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete the user with email:{" "}
          <strong>{userToDelete.Email}</strong>?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button
            variant="danger"
            onClick={() => handleDeleteConfirmed(userToDelete.id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </div>
  );
}

export default UserList;
