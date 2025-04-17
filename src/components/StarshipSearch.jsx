import React from "react";

const StarshipSearch = (props) => {
  const handleChange = (event) => {
    props.onChange(event.target.value); // 每次打字更新 query
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onSearch(props.value); // 点 Search 执行搜索
  };

  const handleClear = () => {
    props.onChange(""); // 清空输入框
    props.onSearch(""); // 清空搜索结果
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
