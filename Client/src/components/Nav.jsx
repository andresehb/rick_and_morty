import React from "react";
import SearchBar from "./SearchBar";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({ onSearch, logout }){
    return (
        <nav>
            <Link to='/home'>
                <button className="link-btn">Home</button>
            </Link>
            <Link to='/about'>
                <button className="link-btn">About</button>
            </Link>
            <Link to='/favorites'>
                <button className="link-btn">Favorites</button>
            </Link>
            <SearchBar onSearch={onSearch}/>
            <button className="logout-btn" onClick={logout}>Log out</button>
        </nav>
    )
}