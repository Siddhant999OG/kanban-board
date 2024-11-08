import React from 'react';
import KanbanColumn from './KanbanColumn';
import groupTickets from '../utils/groupTickets';
import sortTickets from '../utils/sortTickets';

function KanbanBoard({ tickets, groupBy, sortBy }) {
  const groupedTickets = groupTickets(tickets, groupBy);
  const sortedGroupedTickets = Object.keys(groupedTickets).reduce((acc, groupKey) => {
    acc[groupKey] = sortTickets(groupedTickets[groupKey], sortBy);
    return acc;
  }, {});

  return (
    <div className="kanban-board">
      {Object.keys(sortedGroupedTickets).map((groupKey) => (
        <KanbanColumn key={groupKey} title={groupKey} tickets={sortedGroupedTickets[groupKey]} />
      ))}
    </div>
  );
}

export default KanbanBoard;