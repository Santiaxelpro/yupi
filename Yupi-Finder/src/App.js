import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import { fetchPlayerData } from './api/index';

const App = () => {
    const [playerData, setPlayerData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSearch = async (playerName) => {
        setLoading(true);
        setError(null);
        const data = await fetchPlayerData(playerName);
        if (data) {
            setPlayerData(data);
        } else {
            setError('Player not found or an error occurred.');
        }
        setLoading(false);
    };

    return (
        <div>
            <h1>Yupi Finder</h1>
            <SearchBar onSearch={handleSearch} />
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {playerData && (
                <div>
                    <h2>Player Data:</h2>
                    <pre>{JSON.stringify(playerData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default App;