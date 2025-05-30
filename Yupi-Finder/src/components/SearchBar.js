import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [playerName, setPlayerName] = useState('');

    const handleInputChange = (event) => {
        setPlayerName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (playerName.trim()) {
            onSearch(playerName);
            setPlayerName('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={playerName}
                onChange={handleInputChange}
                placeholder="Enter player name"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchBar;