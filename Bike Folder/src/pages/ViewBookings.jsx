import { useEffect, useState } from "react";
import axios from "axios";

function ViewBookings() {

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    loadBookings();
  }, []);

  const loadBookings = async () => {
    try {

      const result = await axios.get(
        "http://localhost:1227/bookings"
      );

      setBookings(result.data);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="dashboard">

      <h2>📋 Booking History</h2>

      <table>
        <thead>
          <tr>
            <th>Customer</th>
            <th>Bike</th>
            <th>Service</th>
            <th>Booking Status</th>
            <th>Service Status</th>
            <th>Service Fee</th>
          </tr>
        </thead>

        <tbody>

          {bookings.map((booking) => (
            <tr key={booking.id}>
              <td>{booking.customerName}</td>
              <td>{booking.bikeNumber}</td>
              <td>{booking.serviceType}</td>
              <td>{booking.bookingStatus}</td>
              <td>{booking.serviceStatus}</td>
              <td>{booking.serviceFee}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default ViewBookings;