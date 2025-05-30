import React, { useState } from 'react';
import { fetchPlayerData } from './api';

function App() {
    const [playerName, setPlayerName] = useState('');
    const [playerData, setPlayerData] = useState(null);
    const [error, setError] = useState('');

    const handleSearch = async () => {
        setError('');
        setPlayerData(null);
        try {
            const data = await fetchPlayerData(playerName);
            setPlayerData(data);
        } catch (err) {
            setError('Error fetching player data');
        }
    };

    return (
        <div>
            <h1>Yupi finder</h1>
            <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Enter player name"
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p>{error}</p>}
            {playerData && (
                <div>
                    <h2>Player Data:</h2>
                    <pre>{JSON.stringify(playerData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;