//NOTE - Client Components, allows the use of handlers and hooks
'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from "@/styles/page.module.css"
import cardData from "@/app/data/cardData.json"


//NOTE - TypeScript Blueprint for cardData

interface CardData {
  index?: string,
  field: string,
  description: string, 
  link?: string
}

const SearchBar: React.FC = () => {

  // Hooks and states
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();


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


  //TODO - INPUT ERROR/MISSING VALUE HANDLING
  function handleFormSubmission() {
    console.log(filteredFields);

    // looks if inputData is a field in cardData
    const matchField = filteredFields.find((field) => field.field.toLowerCase() == inputValue);

    if (matchField) {
      router.push(`/${inputValue}`);
    }
  }

  function handleSuggestionSubmission(term: string) {
    router.push(`/${term}`);
  }

  function handleSearchTerm(term: string) {
    //NOTE - WHY 2 STATES --> Separation of concerns

    // used to display literal user_input (keeping uppercases)
    setSearchTerm(term) 

    // Used to submit the value and match the corresponding route
    setInputValue(term.toLowerCase());
  }


  return (
    <form 
      onSubmit={(e) => {
        e.preventDefault();
        handleFormSubmission()
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
              <button type="button" onClick={() => { 
                handleSuggestionSubmission(field.field.toLowerCase());
              }}>
                  {field.field}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </form>
  );
}


export default SearchBar;