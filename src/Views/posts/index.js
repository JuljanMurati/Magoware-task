import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../index.css";
import { createPost, deletePost, getPosts, updatePost } from "../../api";
import Modal from "../../components/modal";
import PostForm from "../../components/postForm";
import UpdateForm from "../../components/updateForm";

function Posts() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState();
  const [newPost, setNewPost] = useState({});

  useEffect(() => {
    if (!JSON.parse(localStorage.getItem("isAuthenticated"))) {
      navigate("/signin");
    }
  }, [navigate]);

  useEffect(() => {
    getPosts()
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/signin");
  };

  const handleUpdateClick = (post) => {
    setSelectedPost(post);
    setIsUpdateModalOpen(true);
  };

  const handleCreateClick = () => {
    setIsPostModalOpen(true);
  };

  const handleUpdate = () => {
    updatePost(selectedPost).then((response) => {
      console.log("Updated");
      alert("Your post is up to date!");
      setIsUpdateModalOpen(false);
    });
  };

  const handleDelete = (id) => {
    deletePost(id);
    alert("Post deleted !");
  };

  const handleCreate = () => {
    if (newPost?.userId && newPost?.title && newPost?.body) {
      createPost(newPost);
      alert("You have create a new post successfully !");
      setIsPostModalOpen(false);
    }
  };

  return (
    <div className="page">
      <nav className="navbar">
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </nav>
      <div className="content">
        <button className="create-button" onClick={handleCreateClick}>
          Create Post
        </button>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Description</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {posts.slice(0, 10).map((post) => {
              return (
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <button
                      className="table-button"
                      onClick={() => handleUpdateClick(post)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="table-button"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <Modal
        isOpen={isUpdateModalOpen}
        setIsOpen={setIsUpdateModalOpen}
        title={"Update Post"}
        children={
          <UpdateForm
            selectedPost={selectedPost}
            setSelectedPost={setSelectedPost}
          />
        }
        onSubmit={handleUpdate}
      ></Modal>
      <Modal
        isOpen={isPostModalOpen}
        setIsOpen={setIsPostModalOpen}
        title={"New Post"}
        children={<PostForm newPost={newPost} setNewPost={setNewPost} />}
        onSubmit={handleCreate}
      ></Modal>
    </div>
  );
}

export default Posts;
