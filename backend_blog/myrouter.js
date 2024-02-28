const mongoose = require("mongoose");
const express = require("express");
const router = express.Router();

// User Model
const User = require("./users");
const Blog = require("./blogs");
const NewBlog = require("./blog");
const BlogUser = require("./blog_users");
const UserModel = require("./user_model");
const Whatsnew = require("./whatsnew");
const users = require("./users");
// READ Users
router.route("/").get((req, res) => {
  User.find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.status(500).json({ error: error.message });
    });
});

// router.post('/register', async (req, res) => {
//   try {
//     const { name, id, phone } = req.body;

//     // Create a new user document
//     const newUser = new User({
//       name,
//       id,
//       phone,
//       isActive: true, // Set the isActive status (you can adjust this as needed)
//       role: 'Customer', // Set the role (you can adjust this as needed)
//     });

//     // Save the new user document to the database
//     const result = await newUser.save();
//     res.status(201).json(result); // Return the inserted user as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.get("/my", async (req, res) => {
  const userId = req.query.id; // Extract the id from the query parameter
  console.log("hey user id is " + userId);

  try {
    // Use the User model to find the user by the 'id' field
    const user = await User.findOne({ id: userId });
    if (!user) {
      // If the user with the provided 'id' is not found, return a 404 response
      return res.status(404).json({ error: "User not found" });
    }
    // If the user is found, return the user data
    console.log(user);
    res.json(user);
  } catch (error) {
    // If there's an error while finding the user, return a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});

///---------------------
router.get("/myprofile", async (req, res) => {
  try {
    const id = req.query.id; // Use req.query to retrieve query parameters
    const userDetails = await UserModel.findById(id); // Await the Mongoose query

    if (!userDetails) {
      return res.status(404).json({ message: "User not found" });
    }

    res.json(userDetails);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Internal Error");
  }
});
////--------------------

//------------------------------------------------------------------
router.post("/create-blogs", (req, res) => {
  const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    // Check if image is provided

    return res
      .status(400)
      .json({
        error: "Title, content, category, and image are required fields",
      });
  }

  Whatsnew.create({ title, content, category, image }) // Include image

    .then((createdDocument) => {
      console.log("Document created:", createdDocument);

      res.status(201).json(createdDocument);
    })

    .catch((error) => {
      console.error("Error creating document:", error);

      res
        .status(500)
        .json({ error: "An error occurred while creating the document" });
    });
});

router.post("/all-blog", (req, res) => {
  const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    // Check if image is provided

    return res
      .status(400)
      .json({
        error: "Title, content, category, and image are required fields",
      });
  }

  Blog.create({ title, content, category, image }) // Include image

    .then((createdDocument) => {
      console.log("Document created:", createdDocument);

      res.status(201).json(createdDocument);
    })

    .catch((error) => {
      console.error("Error creating document:", error);

      res
        .status(500)
        .json({ error: "An error occurred while creating the document" });
    });
});

//-----------------------------------------------
router.get("/fetchblogs", async (req, res) => {
  try {
    // Use the "blogs" model to find all blogs
    const allBlogs = await Blog.find();

    if (allBlogs.length === 0) {
      // If no blogs are found, return a 404 response
      return res.status(404).json({ error: "No blogs found" });
    }

    // If blogs are found, return the list of blogs
    res.json(allBlogs);
  } catch (error) {
    // If there's an error while finding the blogs, return a 500 response with the error message
    res.status(500).json({ error: error.message });
  }
});
router.get("/random-blogs", async (req, res) => {
  console.log("api-hits");
  try {
    const randomBlogs = await Blog.aggregate([{ $sample: { size: 3 } }]);

    res.send(randomBlogs);
  } catch (error) {
    res.status(500).send(error);
  }
});
// 
router.get("/recently-posted-whatsnew", async (req, res) => {
  console.log("api-hits");
  try {
    const recentlyPostedWhatsnew = await Whatsnew.aggregate([
      { $sort: { createdAt: -1 } }, // Sort by createdAt field in descending order
      { $limit: 3 } // Limit the results to 3 documents
    ]);

    res.send(recentlyPostedWhatsnew);
  } catch (error) {
    res.status(500).send(error);
  }
});

//--
router.get("/most-liked", async (req, res) => {
  console.log("api-hits");
  try {
    const mostLiked = await Blog.aggregate([
      { $sort: { likes: -1 } }, // Sort by likes field in descending order
      { $limit: 3 } // Limit the results to 3 documents
    ]);

    res.send(mostLiked);
  } catch (error) {
    res.status(500).send(error);
  }
});



// Fetch 8 random blogs for a specific category
router.get("/random-blog-category/:category", async (req, res) => {
  try {
    const { category } = req.params;
    console.log("Requested category:", category); // Add this line for debugging

    const randomBlogs = await Blog.aggregate([
      { $match: { category: category } },
      { $sample: { size: 8 } },
    ]);

    console.log("Random blogs:", randomBlogs); // Add this line for debugging

    res.send(randomBlogs);
  } catch (error) {
    console.error("Error:", error); // Add this line for debugging
    res.status(500).send(error);
  }
});
router.get("/blogs/:blogId", async (req, res) => {
  console.log("hit that api");
  const blogId = req.params.blogId;

  try {
    // Use your Blog model to find the blog by its ID
    const blog = await Blog.findOne({ blogId: blogId });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
router.get("/blogsbyuser/:id", async (req, res) => {
  //nishanth
  const userId = req.params.id;
  console.log("hey you hit this", userId);
  try {
    // Use the BlogUser model to find blogs by the 'blog_user' field
    const blogs = await BlogUser.find({ userid: userId });
    if (blogs.length === 0) {
      return res.status(404).json({ message: "No blogs found for the user" });
    }
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
// router.post('/create-blog', async (req, res) => {
//   try {
//     console.log(req.body)
//     const { blogId, date, title, category, author, image, post,userid } = req.body;

//     // Create a new blog document
//     const newBlog = new BlogUser({
//       blogId,
//       date,
//       title,
//       category,
//       author,
//       image,
//       post,
//       userid
//     });
//     console.log(newBlog)
//     // Save the new blog document to the database
//     const result = await newBlog.save();
//     res.status(201).json(result); // Return the inserted blog as a JSON response
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });
router.post("/register", (req, res) => {
  const { Email } = req.body;

  UserModel.findOne({ Email: Email })

    .then((existingUser) => {
      if (existingUser) {
        res.json({ error: "User already exists" });
      } else {
        UserModel.create(req.body)

          .then((Users) => res.json(Users))

          .catch((err) => res.json(err));
      }
    })

    .catch((err) => res.json(err));
});

router.post("/login", (req, res) => {
  const { Email, Password } = req.body;

  UserModel.findOne({ Email: Email })
    .then((user) => {
      if (user) {
        if (user.Password === Password) {
          if (user.isActive) {
            if (user.isAdmin) {
              res.json({ message: "Admin", id: user._id });
            } else {
              res.json({ message: "Success", id: user._id });
            }
          } else {
            res.json("User is deactivated. Please contact an administrator.");
          }
        } else {
          if (Password) {
            // Check if the password is not empty
            res.json("Incorrect Password");
          } else {
            res.json(""); // Return an empty response if password is empty
          }
        }
      } else {
        if (Email) {
          // Check if the email is not empty
          res.json("No Record Existed");
        } else {
          res.json(""); // Return an empty response if email is empty
        }
      }
    })
    .catch((error) => {
      res.status(500).json({ message: "Error logging in" });
    });
});

router.get("/get-users", (req, res) => {
  UserModel.find()
    .then((users) => res.json(users))
    .catch((error) => res.json(err));
});

router.delete("/delete-users/:email", (req, res) => {
  console.log(req.params.email);

  const userEmail = req.params.email; // Use req.params.email to get the email from the URL parameter

  UserModel.findOneAndDelete({ Email: userEmail }) // Find and delete by the email field

    .then(() => {
      res.json({ message: "User deleted successfully" });
    })

    .catch((error) => {
      res.status(500).json({ message: "Error deleting user" });
    });
});

router.put("/toggle-status/:email", (req, res) => {
  const userEmail = req.params.email;

  const { isActive } = req.body;

  UserModel.findOneAndUpdate({ Email: userEmail }, { isActive: isActive })

    .then(() => {
      res.json({
        message: `User ${isActive ? "activated" : "deactivated"} successfully`,
      });
    })

    .catch((error) => {
      res.status(500).json({ message: "Error toggling status" });
    });
});

router.post("/create-blog", (req, res) => {
  const { title, content, category, image } = req.body;

  if (!title || !content || !category || !image) {
    // Check if image is provided

    return res
      .status(400)
      .json({
        error: "Title, content, category, and image are required fields",
      });
  }

  NewBlog.create({ title, content, category, image }) // Include image

    .then((createdDocument) => {
      console.log("Document created:", createdDocument);

      res.status(201).json(createdDocument);
    })

    .catch((error) => {
      console.error("Error creating document:", error);

      res
        .status(500)
        .json({ error: "An error occurred while creating the document" });
    });
});

router.get("/getblog", (req, res) => {
  NewBlog.find()
    .then((data) => {
      console.log("data:", data);
      res.send(data);
    })
    .catch((error) => {
      console.log("error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving data" });
    });
});

router.get("/getblog/:id", (req, res) => {
  const blogid = req.params.id;
  NewBlog.findById(blogid)
    .then((data) => {
      console.log("data:", data);
      res.send(data);
    })
    .catch((error) => {
      console.log("error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving data" });
    });
});

router.get("/random-blogs/:id", (req, res) => {
  const blogid = req.params.id;
  Blog.findById(blogid)
    .then((data) => {
      console.log("data:", data);
      res.send(data);
    })
    .catch((error) => {
      console.log("error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving data" });
    });
});

router.get("/random-whatsnew/:id", (req, res) => {
  const blogid = req.params.id;
  Whatsnew.findById(blogid)
    .then((data) => {
      console.log("data:", data);
      res.send(data);
    })
    .catch((error) => {
      console.log("error:", error);
      res
        .status(500)
        .json({ error: "An error occurred while retrieving data" });
    });
});

// router.delete('/deleteblog/:id', (req, res) => {
//   NewBlog.findByIdAndRemove(req.params.id, (error, data) => {
//     if (error) {
//       return res.status(500).json({ error: 'An error occurred while deleting the document' });
//     } else {
//       res.status(200).json({
//         msg: 'Document deleted successfully',
//       });
//     }
//   });
// });
////--------------------------
router.delete("/delete-blog/:id", (req, res) => {
  NewBlog.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});
///---------------------------------
// router.delete('/delete-homeblog/:title', (req, res) => {
//   Blog.findByIdAndRemove(req.params.title)
//     .then((data) => {
//       if (!data) {
//         return res.status(404).json({ error: 'Document not found' });
//       }
//       res.status(200).json({ message: 'Document deleted successfully' });
//     })
//     .catch((error) => {
//       console.error('Error deleting document:', error);
//       res.status(500).json({ error: 'An error occurred while deleting the document' });
//     });
// });
router.delete("/delete-homeblog/:title", (req, res) => {
  const titleToDelete = req.params.title;

  Blog.findOneAndRemove({ title: titleToDelete })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});
///----------------------------
router.delete("/delete-homeblog/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});
///----------------------------
router.delete("/delete-bloglist/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});
////------------------------
router.delete("/delete-whatsnewblog/:title", (req, res) => {
  const titleToDelete = req.params.title;

  Whatsnew.findOneAndRemove({ title: titleToDelete })
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});

/////--------------------
router.delete("/delete-newblogs/:id", (req, res) => {
  Whatsnew.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});

//-------------------------------------
router.delete("/delete-allblog/:id", (req, res) => {
  Blog.findByIdAndRemove(req.params.id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ error: "Document not found" });
      }
      res.status(200).json({ message: "Document deleted successfully" });
    })
    .catch((error) => {
      console.error("Error deleting document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while deleting the document" });
    });
});
//----------------------------------------------

router.put("/update-blog/:id", (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  NewBlog.findByIdAndUpdate(id, { $set: updatedData }, { new: true })
    .then((updatedDocument) => {
      if (!updatedDocument) {
        return res.status(404).json({ error: "Document not found" });
      }
      console.log("Document updated successfully:", updatedDocument);
      res.json(updatedDocument);
    })
    .catch((error) => {
      console.error("Error updating document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the document" });
    });
});

////---------------------
router.put("/update-homeblog/:title", (req, res) => {
  const { title } = req.params;
  const updatedData = req.body;

  Blog.findOneAndUpdate({ title: title }, { $set: updatedData }, { new: true })
    .then((updatedDocument) => {
      if (!updatedDocument) {
        return res.status(404).json({ error: "Document not found" });
      }
      console.log("Document updated successfully:", updatedDocument);
      res.json(updatedDocument);
    })
    .catch((error) => {
      console.error("Error updating document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the document" });
    });
});

/////----------------------------------
router.put("/update-whatsnewblog/:title", (req, res) => {
  const { title } = req.params;
  const updatedData = req.body;

  Whatsnew.findOneAndUpdate(
    { title: title }, // Find by title
    { $set: updatedData },
    { new: true }
  )
    .then((updatedDocument) => {
      if (!updatedDocument) {
        return res.status(404).json({ error: "Document not found" });
      }
      console.log("Document updated successfully:", updatedDocument);
      res.json(updatedDocument);
    })
    .catch((error) => {
      console.error("Error updating document:", error);
      res
        .status(500)
        .json({ error: "An error occurred while updating the document" });
    });
});

///------------------------
router.delete("/delete-allblog/:title", async (req, res) => {
  const titleToDelete = req.params.title;

  try {
    // Find and delete the blog entry by title
    const deletedBlog = await Blog.findOneAndRemove({ title: titleToDelete });

    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.json({ message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the blog" });
  }
});
// Get all blogs

///--------------------------

router.post("/comments", async (req, res) => {
  console.log(req.body);

  const { _id, username, comment } = req.body; // Assuming the request body has these fields

  try {
    // Find the blog post by ID

    const blogPost = await Blog.findOne({ _id: _id });

    if (!blogPost) {
      return res.status(404).json({ message: "Blog post not found" });
    }

    // Add the new comment to the comments_users array

    blogPost.comments_users.push({ username, comment });

    // Save the updated blog post with the new comment

    const updatedBlogPost = await blogPost.save();

    res
      .status(201)
      .json({ message: "Comment added successfully", updatedBlogPost });
  } catch (error) {
    console.error("Error adding comment:", error);

    res.status(500).json({ message: "Internal server error" });
  }
});
//--------------------
router.post("/like/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post by its ID
    const post = await Blog.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Increment the likes count and save the updated post
    post.likes += 1;
    await post.save();

    res.json({ success: true, message: "Post liked successfully" });
  } catch (error) {
    console.error("Error liking the post:", error);
    res.status(500).json({ error: "An error occurred while liking the post" });
  }
});

/////----------------
router.post("/w_like/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post by its ID
    const post = await Whatsnew.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Increment the likes count and save the updated post
    post.likes += 1;
    await post.save();

    res.json({ success: true, message: "Post liked successfully" });
  } catch (error) {
    console.error("Error liking the post:", error);
    res.status(500).json({ error: "An error occurred while liking the post" });
  }
});
//---------------------------
router.delete("/unlike/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post by its ID
    const post = await Blog.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Decrement the likes count and save the updated post
    post.likes -= 1;
    await post.save();

    res.json({ success: true, message: "Post unliked successfully" });
  } catch (error) {
    console.error("Error unliking the post:", error);
    res
      .status(500)
      .json({ error: "An error occurred while unliking the post" });
  }
});

////-----------------------
router.post("/w_unlike/:id", async (req, res) => {
  const postId = req.params.id;

  try {
    // Find the post by its ID
    const post = await Whatsnew.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    // Increment the likes count and save the updated post
    post.likes -= 1;
    await post.save();

    res.json({ success: true, message: "Post liked successfully" });
  } catch (error) {
    console.error("Error liking the post:", error);
    res.status(500).json({ error: "An error occurred while liking the post" });
  }
});

////-----------------------
//code for filtering and searching keywords

// Endpoint to get blogs by checkboxes and search string

router.get("/filtered-blogs", async (req, res) => {
  console.log("this is filter blogs");

  const checkboxes = req.query.checkboxes || [];

  const searchString = req.query.search || "";

  try {
    const query = {};

    if (checkboxes.length > 0) {
      query.category = { $in: checkboxes };
    }

    if (searchString) {
      query.$or = [
        { title: { $regex: searchString, $options: "i" } },

        { post: { $regex: searchString, $options: "i" } },
      ];
    }

    const blogs = await Blog.find(query);

    res.json({ blogs });
  } catch (error) {
    res.status(500).json({ error: "An error occurred" });
  }
});

router.get("/fetchdata", function (req, res) {
  console.log("hey it s veera");

  res.status(500).json({ title: "ramesh" });
});

router.get("/ramesh", function (req, res) {
  console.log("hey it's veera");

  res
    .status(500)
    .json({
      title: "director",
      reportee_1: "harsh",
      reportee_2: "nisaanth",
      reportee_3: "nithiyaraj",
      reportee_4: "veera",
      reportee_5: "virinchi",
    });
});

//localhost:5000/mangal/blogsbyuser/123
module.exports = router;
