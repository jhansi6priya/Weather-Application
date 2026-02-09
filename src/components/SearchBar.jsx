import { useState } from "react";

export default function SearchBar({ onSearch, onLocate }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!value.trim()) return;
    onSearch(value.trim());
    setValue("");
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search city..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button type="submit">Search</button>

      <button type="button" onClick={onLocate}>
        📍 Use My Location
      </button>
    </form>
  );
}
