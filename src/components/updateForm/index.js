import React from "react";

function UpdateForm(props) {
  
  const handleForm = (e) => {
    props.setSelectedPost({
      ...props.selectedPost,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="update-form">
      <h3>ID: {props.selectedPost.id}</h3>
      <label>
        Title
        <input
          value={props.selectedPost.title}
          onChange={handleForm}
          name="title"
          className="form-input"
        />
      </label>
      <label>
        Description
        <textarea
          value={props.selectedPost.body}
          name="body"
          onChange={handleForm}
          className="form-textarea"
        />
      </label>
    </form>
  );
}

export default UpdateForm;
