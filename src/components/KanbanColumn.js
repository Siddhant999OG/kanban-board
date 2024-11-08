import React from 'react';
import TicketCard from './TicketCard';

function KanbanColumn({ title, tickets }) {
  return (
    <div className="kanban-column">
      <h3>{title}</h3>
      {tickets.map(ticket => <TicketCard key={ticket.id} ticket={ticket} />)}
    </div>
  );
}

export default KanbanColumn;
