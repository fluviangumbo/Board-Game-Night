import { useEffect, useState } from "react";
import { Table, Spinner } from "react-bootstrap";
import axios from "axios"; // or you can use fetch

const HotGames = () => {
    interface Game {
        gameId: number;
        name: string;
        yearPublished: number;
        rank: number;
    }

    const [games, setGames] = useState<Game[]>([]);
    const [loading, setLoading] = useState(true);

    // Fetch games from the API when the component mounts
    useEffect(() => {
        const fetchGames = async () => {
            try {
                const response = await axios.get("https://bgg-json.azurewebsites.net/hot");
                setGames(response.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchGames();
    }, []);

    return (
        <div className="p-3">
            <h2>Hot Board Games</h2>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            ) : (
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Title</th>
                            <th>Year Published</th>
                            <th>Rank</th>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map((game, index) => (
                            <tr key={game.gameId}>
                                <td>{index + 1}</td>
                                <td>{game.name}</td>
                                <td>{game.yearPublished}</td>
                                <td>{game.rank}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </div>
    );
};

// const App = () => {
//     return (
//       <div className="App">
//         <h1>Board Games List</h1>
//         <GamesTable />
//       </div>
//     );
//   };    ------------possible use for displaying the games

//export default App;

export default HotGames;