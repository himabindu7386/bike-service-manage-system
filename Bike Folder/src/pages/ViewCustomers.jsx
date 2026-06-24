import { useEffect, useState } from "react";
import axios from "axios";

function ViewCustomers() {

  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = async () => {
    try {
      const result = await axios.get(
        "http://localhost:1227/users"
      );

      setCustomers(result.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">

      <h1>👥 Customers List</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.role}</td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  );
}

export default ViewCustomers;