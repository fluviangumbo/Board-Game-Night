// import  { useState, useEffect } from 'react';
// import axios from 'axios';

// const GamesController = ({ onSelectGame }) => {
//   const [games, setGames] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchGames = async () => {
//       try {
//         const response = await axios.get('https://bgg-json.azurewebsites.net/hot');
//         setGames(response.data);
//         setLoading(false);
//       } catch (err) {
//         setError('Failed to fetch games');
//         setLoading(false);
//       }
//     };

//     fetchGames();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div>
//       <h2>Hot Board Games</h2>
//       <ul>
//         {games.map((game) => (
//           <li key={game.gameId}>
//             {game.name} <button onClick={() => onSelectGame(game.gameId)}>Select</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GamesController;