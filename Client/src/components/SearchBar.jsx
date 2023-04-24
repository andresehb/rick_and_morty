import { useState } from "react";
import "./SearchBar.css"

export default function SearchBar({onSearch}) {
   const [id, setId] = useState('');

   const handleChange = (event) => {
      setId(event.target.value)
   }
   return (
      <div>
         <input placeholder="Type something..." className="search-input" onChange={handleChange} type='search' name="search" value={id}/>
         <button className="search-btn" onClick={() => onSearch(id)}>Search</button>
      </div>
   );
}
