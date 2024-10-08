import { useEffect, useState } from "react";
import { Table, Spinner, Container, Row, Col, Card } from "react-bootstrap";
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
        <Container className="py-5">
            <Row>
                <Col className="text-center mb-4">
                    <h2 className="display-6">Hot Board Games</h2>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md={8}>
                    {loading ? (
                        <div className="d-flex justify-content-center">
                            <Spinner animation="border" role="status" className="text-primary">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : (
                        <Card className="shadow-lg">
                            <Card.Body>
                                <Table striped bordered hover responsive="sm">
                                    <thead className="table-dark">
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
                            </Card.Body>
                        </Card>
                    )}
                </Col>
            </Row>
        </Container>
    );
};

export default HotGames;