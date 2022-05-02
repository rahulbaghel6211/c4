import '../App.css';

import {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

export const Orders = () => {
  const [orderData, setOrderData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/orders").then(({ data }) => {
      setOrderData(data);
      console.log(data);
    });
  }, []);

  return (
    <div>
      <div>
        <div>
          <select className="controls" name="progress" id="progress">
            <option value="id">ID</option>
            <option value="status">Status</option>
            <option value="cost">Cost</option>
          </select>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th>ID</th>
              <th>Problem</th>
              <th>Client Name</th>
              <th>Status</th>
              <th>Cost</th>
              <th>Change Status</th>
              <th>Accept</th>
            </tr>
          </thead>
          <tbody>
            {orderData.map((el) => {
              return (
                <tr className="orders-row" key={el.id}>
                  <td className="id">{el.id}</td>
                  <td className="problem">{el.problem}</td>
                  <td className="owner">{el.owner_name}</td>
                  <td className="status">{el.status}</td>
                  <td className="cost">{el.cost}</td>
                  <td className="change-status">
                    {/* Show select dropdown only if status is Not Accepted */}
                    <select className="changeStatus" name="changeStatus">
                      <option value="Pending">Pending</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Done">Done</option>
                      <option value="Not Accepted">Not Accepted</option>
                    </select>
                  </td>
                  <td className="accept">
                    {/* Show this button only if status is Not Accepted */}
                    {/* on change make request to update it in db, and show changed status in table */}
                    <button>Accept</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};