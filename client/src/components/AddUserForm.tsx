import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface AddUserFormProps {
    onAddUser: (username: string) => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onAddUser }) => {
    const [username, setUsername] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (username.trim() === '') {
            setError('Username cannot be empty.');
            return;
        }

        onAddUser(username);
        setUsername('');  // Clear the input field after submission
        setError(null);   // Reset the error message
    };

    return (
        <form onSubmit={handleSubmit} className="mt-3">
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Add User:</label>
                <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter username"
                />
                {error && <div className="text-danger mt-1">{error}</div>}
            </div>
            <button type="submit" className="btn btn-primary">Add User</button>
        </form>
    );
};

export default AddUserForm;