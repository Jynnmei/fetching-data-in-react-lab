import React, { useEffect, useState } from "react";
import StarshipSearch from "./components/StarshipSearch";
import StarshipList from "./components/StarshipList";
import "./App.css";

function App() {
  const [starshipsData, setStarshipsData] = useState([]);
  const [displayedStarships, setDisplayedStarships] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const url = "https://swapi.info/api/starships";

  // 1. 开始加载 -> isLoading = true
  // 2. 清除 error
  // 3. fetch 数据
  // 4. 如果失败 -> catch error
  // 5. 如果成功 -> 解析 json -> 存入 state
  // 6. finally -> 设 isLoading = false

  const getData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Failed to fetch starships.");
      }

      const data = await res.json();
      console.log(data);

      setStarshipsData(data);
      setDisplayedStarships(data);
    } catch (error) {
      if (error.name !== "AbortError") {
        setError(error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    setQuery(searchTerm); // 更新 search bar
    if (!searchTerm) {
      setDisplayedStarships(starshipsData);
      return;
    }

    const lowercaseQuery = searchTerm.toLowerCase();

    const filtered = starshipsData.filter(
      (starship) =>
        starship.name.toLowerCase().includes(lowercaseQuery) ||
        starship.model.toLowerCase().includes(lowercaseQuery) ||
        starship.manufacturer.toLowerCase().includes(lowercaseQuery) ||
        starship.starship_class.toLowerCase().includes(lowercaseQuery)
    );

    setDisplayedStarships(filtered);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h2>Star Wars API</h2>
      <StarshipSearch
        value={query}
        onSearch={handleSearch}
        onChange={setQuery}
        placeholder="Search starships"
      />
      {isLoading && <div>Loading starships...</div>}

      <StarshipList starships={displayedStarships} />
    </div>
  );
}

export default App;
