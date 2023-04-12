import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   function handleChange(event){
      setId(event.target.value)
   }
   return (
      <div>
         <input placeholder="Type something..." className="searchBar-input" onChange={handleChange} type='search' name="search" value={id}/>
         <button className="searchBar-button" onClick={() => onSearch(id)}>Search</button>
      </div>
   );
}
