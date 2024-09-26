import express from 'express';
import {
  getAllTickets,
  getTicketById,
  createTicket,
  updateTicket,
  deleteTicket,
} from '../../controllers/ticket-controller.js';

const router = express.Router();

// GET /tickets - Get all tickets
router.get('/', getAllTickets);

// GET /tickets/:id - Get a ticket by id
router.get('/:id', getTicketById);

// POST /tickets - Create a new ticket
router.post('/', createTicket);

// PUT /tickets/:id - Update a ticket by id
router.put('/:id', updateTicket);

// DELETE /tickets/:id - Delete a ticket by id
router.delete('/:id', deleteTicket);

export { router as ticketRouter };
