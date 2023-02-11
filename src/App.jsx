import React from 'react';
import { useState } from 'react';
import Table from './Table';
import axios from 'axios';
import { useEffect } from 'react';

const App = () => {
  const [query, setQuery] = useState('');

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://jsonplaceholder.typicode.com/users');
      setData(res.data);
    };
    fetchUsers();
  }, []);

  const search = (data) => {
    return data.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.username.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query) ||
        item.phone.toLowerCase().includes(query)
    );
  };

  return (
    <>
      <div className="app">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table data={search(data)} />
      </div>
    </>
  );
};
export default App;
