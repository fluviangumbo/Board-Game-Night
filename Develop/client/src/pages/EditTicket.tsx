import { useState, useEffect, FormEvent, ChangeEvent } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { retrieveTicket, updateTicket } from '../api/ticketAPI';
import { TicketData } from '../interfaces/TicketData';

const EditTicket = () => {
  const [ticket, setTicket] = useState<TicketData | undefined>();

  const navigate = useNavigate();
  const { state } = useLocation();

  const fetchTicket = async (ticketId: TicketData) => {
    try {
      const data = await retrieveTicket(ticketId.id);
      setTicket(data);
    } catch (err) {
      console.error('Failed to retrieve ticket:', err);
    }
  }

  useEffect(() => {
    fetchTicket(state);
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (ticket && ticket.id !== null){
      updateTicket(ticket.id, ticket);
      navigate('/');
    }
    else{
      console.error('Ticket data is undefined.');
    }
  }

  const handleTextAreaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setTicket((prev) => (prev ? { ...prev, [name]: value } : undefined));
  };

  return (
    <>
      <div className='container'>
        {
          ticket ? (
            <form className='form' onSubmit={handleSubmit}>
              <h1>Edit Ticket</h1>
              <label htmlFor='tName'>Ticket Name</label>
              <textarea
                id='tName'
                name='name'
                value={ticket.name || ''}
                onChange={handleTextAreaChange}
                />
              <label htmlFor='tStatus'>Ticket Status</label>
              <select
                name='status'
                id='tStatus'
                value={ticket.status || ''}
                onChange={handleChange}
              >
                <option  value='Todo'>Todo</option>
                <option  value='In Progress'>In Progress</option>
                <option  value='Done'>Done</option>
            </select>
            <label htmlFor='tDescription'>Ticket Description</label>
              <textarea
                id='tDescription'
                name='description'
                value={ticket.description || ''}
                onChange={handleTextAreaChange}
              />
              <button type='submit'>Submit Form</button>
            </form>
          ) : (
            <div>Issues fetching ticket</div>
          )
        }
      </div>  
    </>
  );
};

export default EditTicket;
