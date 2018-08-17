import React from "react";
import { Link } from 'react-router-dom';

const NoteForm = ({ handleChange, handleSubmit, title, content }) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      onChange={handleChange}
      value={title}
      placeholder="Note Title"
      required
    />
    <textarea
      name="textBody"
      onChange={handleChange}
      value={content}
      placeholder="Note Content"
      required
    />
    <input type="submit" value="Submit"/>
  </form>
);

export default NoteForm;