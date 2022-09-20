import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Book.css';

const Book = (props) => {
  const { _id, name, author, description, price, image, available } =
    props.book;
  const history = useNavigate();
  useEffect(() => {}, []);
  const deleteHandler = async () => {
    return await axios
      .delete(`http://localhost:5000/books/${_id}`)
      .then((res) => res.data)
      .then(() => {
        window.location.reload(false);
      })
      .then(() => history('/books'));
  };

  return (
    <div className="card">
      <img className="book-image" src={image} alt="..." />
      <article>By {author}</article>
      <h3>{name}</h3>
      <p>{description}</p>
      <h2>Rs {price}</h2>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{ mt: 'auto' }}>
        Update
      </Button>
      <Button onClick={deleteHandler} sx={{ mt: 'auto' }}>
        Delete
      </Button>
    </div>
  );
};

export default Book;
