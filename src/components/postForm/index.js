import React from "react";

function PostForm(props) {
  const handleForm = (e) => {
    props.setNewPost({
      ...props.newPost,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="update-form">
      <label>
        User Id
        <input
          className="form-input"
          name="userId"
          value={props.newPost.userId}
          onChange={handleForm}
        />
      </label>
      <label>
        Title
        <input
          className="form-input"
          name="title"
          value={props.newPost.title}
          onChange={handleForm}
        />
      </label>
      <label>
        Description
        <textarea
          className="form-textarea"
          name="body"
          value={props.newPost.body}
          onChange={handleForm}
        />
      </label>
    </form>
  );
}

export default PostForm;
