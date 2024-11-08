import React from 'react';

function TicketCard({ ticket }) {
  return (
    <div className="ticket-card">
      <p>{ticket.id}</p>
      <h4>{ticket.title}</h4>
      <p>{ticket.tag}</p>
    </div>
  );
}

export default TicketCard;
