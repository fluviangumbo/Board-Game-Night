import React from 'react';
import Group from '../components/Group';

const App: React.FC = () => {
    const initialUsers = ['Alice', 'Bob', 'Charlie'];

    return (
        <div className="App">
            <Group groupName="Project Team" users={initialUsers} />
        </div>
    );
};

export default App;