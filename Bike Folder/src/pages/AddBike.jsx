import { useState, useEffect } from "react";
import axios from "axios";

function AddBike() {
  const [bike, setBike] = useState({
    brand: "",
    model: "",
    registrationNumber: ""
  });

  const [bikes, setBikes] = useState([]);

  useEffect(() => {
    loadBikes();
  }, []);

  const loadBikes = async () => {
    const result = await axios.get("http://localhost:1227/bikes");
    setBikes(result.data);
  };

  const addBike = async () => {
    try {
      await axios.post("http://localhost:1227/bikes", bike);

      alert("Bike Added Successfully");

      setBike({
        brand: "",
        model: "",
        registrationNumber: ""
      });

      loadBikes(); // refresh table

    } catch (error) {
      console.error(error);
      alert("Failed to add bike");
    }
  };

  return (
    <div className="container">
      <div className="form-box">
        <h2>Add Bike</h2>

        <input
          type="text"
          placeholder="Brand"
          value={bike.brand}
          onChange={(e) =>
            setBike({ ...bike, brand: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Model"
          value={bike.model}
          onChange={(e) =>
            setBike({ ...bike, model: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Registration Number"
          value={bike.registrationNumber}
          onChange={(e) =>
            setBike({
              ...bike,
              registrationNumber: e.target.value
            })
          }
        />

        <button onClick={addBike}>Add Bike</button>

        <h3>My Bikes</h3>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Brand</th>
              <th>Model</th>
              <th>Registration No</th>
            </tr>
          </thead>

          <tbody>
            {bikes.map((b) => (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.brand}</td>
                <td>{b.model}</td>
                <td>{b.registrationNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
}

export default AddBike;