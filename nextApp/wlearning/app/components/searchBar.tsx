//NOTE - Client Components, allows the use of handlers and hooks
// Can't use backend services such as databases and more
'use client';

import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'

import { CardData } from '@/types/interfaces';

import styles from "@/styles/page.module.css"


interface searchBarProps {
  data: CardData[];
}

const SearchBar: React.FC<searchBarProps> = ({ data }) => {

  const cardData = data;

  // Hooks and states
  const [searchTerm, setSearchTerm] = useState("");
  const [inputValue, setInputValue] = useState("");
  const router = useRouter();

  /* NOTE - Furhter functionality 
  -> Display dropdown list only when input box is selected **NOT WORKING YET

  const [inputSelected, setInputSelected] = useState(false);

  // Reference to input box, to add onFocus effects
  const ref = useRef(null);

  useEffect(() => {
    if (document.activeElement === ref.current) {
      setInputSelected(true);
    } else {
      setInputSelected(false);
    }
  }, []);
  */


  /*NOTE - DROPDOWN FILTERING LOGIC

  Cheks if user input is not null, if it's not, filters and compares
  the input. If it is null/none, assigns null/false to filteredFields.
  */

  console.log('CARD DATA', cardData);
  console.log('DATA LENGTH', cardData.length);
  console.log('DATA LENGTH', typeof cardData);


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
      <div className={styles.searchContainer}>
        <div>
          <input
            value={searchTerm}
            className={styles.searchBar}
            placeholder=""
            onChange={(e) => {
              handleSearchTerm(e.target.value);
            }}
          />
        </div>
        {filteredFields.length > 0 && (
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
        )}
      </div>
    </form>
  );
}


export default SearchBar;