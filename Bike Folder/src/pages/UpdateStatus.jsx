import { useState } from "react";
import axios from "axios";

function UpdateStatus() {

  const [bookingId, setBookingId] = useState("");
  const [bookingStatus, setBookingStatus] = useState("Pending");
  const [serviceStatus, setServiceStatus] = useState("Waiting");
  const [serviceFee, setServiceFee] = useState("");

  const updateAll = async () => {

    try {

      await axios.put(
        `http://localhost:1227/bookings/${bookingId}/${bookingStatus}`
      );

      await axios.put(
        `http://localhost:1227/bookings/service/${bookingId}/${serviceStatus}`
      );

      await axios.put(
        `http://localhost:1227/bookings/fee/${bookingId}/${serviceFee}`
      );

      alert("Booking Updated Successfully");

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="container">

      <div className="form-box">

        <h2>🔧 Update Booking Details</h2>

        <input
          type="number"
          placeholder="Booking ID"
          value={bookingId}
          onChange={(e) => setBookingId(e.target.value)}
        />

        <label>Booking Status</label>

        <select
          value={bookingStatus}
          onChange={(e) => setBookingStatus(e.target.value)}
        >
          <option>Pending</option>
          <option>Approved</option>
          <option>Cancelled</option>
        </select>

        <label>Service Status</label>

        <select
          value={serviceStatus}
          onChange={(e) => setServiceStatus(e.target.value)}
        >
          <option>Waiting</option>
          <option>Processing</option>
          <option>Completed</option>
        </select>

        <label>Service Fee</label>

        <input
          type="number"
          placeholder="Enter Fee"
          value={serviceFee}
          onChange={(e) => setServiceFee(e.target.value)}
        />

        <button onClick={updateAll}>
          Update
        </button>

      </div>

    </div>
  );
}

export default UpdateStatus;