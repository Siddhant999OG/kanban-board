// groupTickets.js
const groupTickets = (tickets, groupBy) => {
  return tickets.reduce((acc, ticket) => {
    const key = groupBy === 'assignee' ? (ticket[groupBy]?.name || 'Unassigned') : ticket[groupBy];
    if (!acc[key]) acc[key] = [];
    acc[key].push(ticket);
    return acc;
  }, {});
};

export default groupTickets;
