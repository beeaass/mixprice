import { HiSearch } from "react-icons/hi";
import "./SearchBar.scss";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Поиск по названию или ID"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />
      <HiSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
