//NOTE - Client Components, allows the use of handlers and hooks
'use client';

//SECTION - Imports

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from "@/styles/page.module.css"
import cardData from "@/app/data/cardData.json"

//!SECTION

//NOTE - TypeScript Blueprint for cardData

interface CardData {
  field: string,
  description: string, 
  link?: string
}

const SearchBar: React.FC = () => {

  //SECTION - Declaration of variables and states

  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  //!SECTION

  //SECTION - Declaration of constant arrow functions

  /*NOTE - DROPDOWN FILTERING LOGIC

  Cheks if user input is not null, if it's not, filters and compares
  the input. If it is null/none, assigns null/false to filteredFields.
  */

  const filteredFields = cardData.filter((card) =>
    searchTerm ? 
    card.field.toLowerCase()?.startsWith(searchTerm.toLowerCase()) :
    false //could also be assigned to bool "false"
  );

  /*NOTE - Alternative approach

  const filteredFields = cardData.filter((card) =>
    searchTermcard.field.toLowerCase()?.startsWith(searchTerm.toLowerCase())
  );

  */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${searchTerm}`);
  }

  //!SECTION

  //SECTION - Declaration of methods and other functions

  function handleSearchTerm(term: string) {
    setSearchTerm(term);
    //setShowHints(true);
  }

  //!SECTION

  //SECTION - JSX

  return (
    <form 
      onSubmit={(e) => {
        handleSubmit(e)
      }}
    >
      <div>
        <input
          value={searchTerm}
          className={styles.searchBar}
          placeholder=""
          onChange={(e) => {
            handleSearchTerm(e.target.value);
          }}
        />
        <ul className={styles.suggestionsList}>
          {filteredFields.map((field) => (
            <li key={field.field}>
              <button type="button" onClick={() => setSearchTerm(field.field)}>
                {field.field}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}

//!SECTION



export default SearchBar;