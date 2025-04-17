import React from "react";

const StarshipSearch = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(props.value); 
  };

  const handleClear = () => {
    props.onChange(""); 
    props.onSearch(""); 
  };

  return (
    <div className="container">
      <input
        type="text"
        value={props.value}
        onChange={handleChange}
        placeholder={props.placeholder}
      ></input>
      <button type="submit" onClick={handleSubmit}>
        Search
      </button>
      <button type="submit" onClick={handleClear}>
        Clear
      </button>
    </div>
  );
};

export default StarshipSearch;
