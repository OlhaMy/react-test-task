import { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.target;
    const topic = form.elements.topic.value.trim();

    if (topic === "") {
      alert("Please, enter a search term!");
      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="topic" placeholder="Search articles..." />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
