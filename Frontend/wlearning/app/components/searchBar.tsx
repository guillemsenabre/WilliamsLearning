import styles from "@/styles/page.module.css"

'use client';
const SearchBar: React.FC = () => {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div>
      <input
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;