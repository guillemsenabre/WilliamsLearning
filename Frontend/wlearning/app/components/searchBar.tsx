// Client Components, allows the use of handlers and hooks
'use client';

import { useState } from 'react'

import styles from "@/styles/page.module.css"
import cardData from "@/app/data/cardData.json"

// Tsx Blueprint for cardData
interface CardData {
  field: string,
  description: string, 
  link?: string
}

const SearchBar: React.FC = () => {
  /*
  function handleSearch(term: string) {
    console.log(term);
  }
  */

  const [searchTerm, setSearchTerm] = useState("");
  const [showHints, setShowHints] = useState(false);

  function handleSearchTerm(term: string) {
    setSearchTerm(term);
    setShowHints(true);
  }

  /*NOTE - 
  Cheks if user input is not null, if it's not, filters and compares
  the input. If it is null, assigns null to filteredFields.
  */
  const filteredFields = cardData.filter((card) =>
    searchTerm ? 
    card.field.toLowerCase()?.startsWith(searchTerm.toLowerCase()) :
    false
  );

  /*NOTE - Alternative approach

  const filteredFields = cardData.filter((card) =>
    searchTermcard.field.toLowerCase()?.startsWith(searchTerm.toLowerCase())
  );

  */

  return (
    <div>
      <input
        className={styles.searchBar}
        placeholder=""
        onChange={(e) => {
          handleSearchTerm(e.target.value);
        }}
      />
      {showHints && filteredFields.length > 0 && (
        <select onChange={() => console.log(setSearchTerm)}>
          {filteredFields.map((card) => (
            <option key={card.field} value={card.field}>
              {card.field}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}



export default SearchBar;