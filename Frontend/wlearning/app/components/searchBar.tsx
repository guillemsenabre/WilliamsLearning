// Client Components, allows the use of handlers and hooks
'use client';

import { useState } from 'react'
import { useRouter } from 'next/navigation'

import styles from "@/styles/page.module.css"
//import cardData from "@/app/data/cardData.json"

// Tsx Blueprint for cardData
/*
interface CardData {
  field: string,
  description: string, 
  link?: string
}
*/

const SearchBar: React.FC = () => {
  /*
  function handleSearch(term: string) {
    console.log(term);
  }
  */

  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  
  //const [showHints, setShowHints] = useState(false);

  function handleSearchTerm(term: string) {
    setSearchTerm(term);
    //setShowHints(true);
  }

  /*NOTE - 
  Cheks if user input is not null, if it's not, filters and compares
  the input. If it is null, assigns null to filteredFields.
  
  const filteredFields = cardData.filter((card) =>
    searchTerm ? 
    card.field.toLowerCase()?.startsWith(searchTerm.toLowerCase()) :
    false
  );
  */
  /*NOTE - Alternative approach

  const filteredFields = cardData.filter((card) =>
    searchTermcard.field.toLowerCase()?.startsWith(searchTerm.toLowerCase())
  );

  */

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${searchTerm}`);
  }

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
      </div>
    </form>
  );
}



export default SearchBar;