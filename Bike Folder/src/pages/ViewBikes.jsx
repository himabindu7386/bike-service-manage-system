import { useEffect, useState } from "react";
import axios from "axios";

function ViewBikes() {
  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    loadBikes();
  }, []);

  const loadBikes = async () => {
    const result = await axios.get("http://localhost:1227/bikes");
    setBikes(result.data);
  };

  return (
    <div className="dashboard">
      <h2>All Bikes</h2>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Brand</th>
            <th>Model</th>
            <th>Registration Number</th>
          </tr>
        </thead>

        <tbody>
          {bikes.map((bike) => (
            <tr key={bike.id}>
              <td>{bike.id}</td>
              <td>{bike.brand}</td>
              <td>{bike.model}</td>
              <td>{bike.registrationNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewBikes;