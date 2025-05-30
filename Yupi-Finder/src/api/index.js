import archivos from '../data/archivos';

export const fetchPlayerData = async (playerName) => {
  for (const archivo of archivos) {
    try {
      const response = await fetch(`/data/${archivo}`);
      if (!response.ok) continue;
      const data = await response.json();
      if (data.name === playerName) {
        return data;
      }
    } catch (e) {
      continue;
    }
  }
  return null;
};