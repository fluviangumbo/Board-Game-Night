import { Ticket } from '../models/ticket.js';

export const seedTickets = async () => {
  await Ticket.bulkCreate([
    { name: 'Design landing page', status: 'In Progress', description: 'Create wireframes and mockups for the landing page.', assignedUserId: 1 },
    { name: 'Set up project repository', status: 'Done', description: 'Create a new repository on GitHub and initialize it with a README file.', assignedUserId: 2 },
    { name: 'Implement authentication', status: 'Todo', description: 'Set up user authentication using JWT tokens.', assignedUserId: 1 },
    { name: 'Test the API', status: 'Todo', description: 'Test the API using Insomnia.', assignedUserId: 1 },
    { name: 'Deploy to production', status: 'Todo', description: 'Deploy the application to Render.', assignedUserId: 2 },
  ]);
};
