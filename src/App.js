import React, { useState, useEffect } from 'react';
import KanbanBoard from './components/KanbanBoard';
import Header from './components/Header';
import { fetchTickets } from './services/api';
import './App.css';

function App() {
  const [tickets, setTickets] = useState([]);
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    fetchTickets().then(data => setTickets(data.tickets));
  }, []);

  const handleGroupChange = (group) => {
    setGroupBy(group);
    localStorage.setItem('groupBy', group);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    localStorage.setItem('sortBy', sort);
  };

  return (
    <div className="App">
      <Header onGroupChange={handleGroupChange} onSortChange={handleSortChange} />
      <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
    </div>
  );
}

export default App;
