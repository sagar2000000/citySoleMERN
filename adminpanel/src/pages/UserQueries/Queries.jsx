import React, { useEffect, useState } from 'react';
import './Queries.css';
import axios from 'axios';

const Queries = () => {
  const [userData, setUserData] = useState([]);

  const getAllUserQuery = async () => {
    try {
      const response = await axios.get("http://localhost:4000/test/user/get_queries");
      if (response.data.success) {
        setUserData(response.data.users);
      }
    } catch (error) {
      console.error('Error fetching user queries:', error);
    }
  };

  useEffect(() => {
    getAllUserQuery();
  }, []);

  return (
    <div className='queries-container'>
      <table className='queries-table'>
        <thead>
          <tr>
            <th>Email</th>
            <th>Queries</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td>{user.email}</td>
              <td>{user.queries}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Queries;
