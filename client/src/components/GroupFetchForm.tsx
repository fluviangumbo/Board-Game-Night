import React, { useState } from 'react';

const GroupFetchForm: React.FC = () => {
    const [groupName, setGroupName] = useState<string>('');
    const [groupData, setGroupData] = useState<any>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (groupName.trim() === '') {
            setError('Group name cannot be empty.');
            return;
        }

        setLoading(true);
        setError(null); // Reset the error message

        try {
            const response = await fetch(`/api/groups/${groupName}`);
            if (!response.ok) {
                throw new Error('Failed to fetch group.');
            }
            const data = await response.json();
            setGroupData(data);
        } catch (error) {
            setError((error as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Fetch Group Details</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="groupName" className="form-label">Group Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="groupName"
                        value={groupName}
                        onChange={(e) => setGroupName(e.target.value)}
                        placeholder="Enter group name"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Fetch Group</button>
            </form>
            {loading && <div>Loading...</div>}
            {error && <div className="text-danger mt-2">{error}</div>}
            {groupData && (
                <div className="mt-3">
                    <h3>Group Details:</h3>
                    <pre>{JSON.stringify(groupData, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default GroupFetchForm;