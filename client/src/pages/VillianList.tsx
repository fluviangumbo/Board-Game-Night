import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Define the interface for a Villain
interface Villain {
    id: string;
    name: string;
    description: string;
    firstAppearance: string;
}

const VillainList: React.FC = () => {
    // useState with type for array of Villains
    const [villains, setVillains] = useState<Villain[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchVillains = async () => {
            try {
                const response = await axios.get<Villain[]>('https://stephen-king-api.onrender.com/api/villains');
                setVillains(response.data);
                setLoading(false);
            } catch (err) {
                setError('Failed to fetch villains.');
                setLoading(false);
            }
        };

        fetchVillains();
    }, []);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>;
    }

    if (error) {
        return <div className="text-center mt-5 text-danger">{error}</div>;
    }

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Villain Inspiration</h2>
            <div className="row">
                {villains.map((villain) => (
                    <div key={villain.id} className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">{villain.name}</h5>
                                <p className="card-text">{villain.description}</p>
                                <p className="card-text">
                                    <small className="text-muted">First Appearance: {villain.firstAppearance}</small>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VillainList;