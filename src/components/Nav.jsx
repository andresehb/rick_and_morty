import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, logout }){
    return (
        <nav>
            <Link to='/home'>
                <button className="link-button">Home</button>
            </Link>
            <Link to='/about'>
                <button className="link-button">About</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
            <button className="link-button" onClick={logout}>Log out</button>
        </nav>
    )
}