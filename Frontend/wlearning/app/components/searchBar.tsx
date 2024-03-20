// Client Components, allows the use of handlers and hooks
'use client';

import styles from "@/styles/page.module.css"

const SearchBar: React.FC = () => {
  function handleSearch(term: string) {
    console.log(term);
  }

  return (
    <div>
      <input
        className={styles.searchBar}
        placeholder="Search..."
        onChange={(e) => {
          handleSearch(e.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;