import { useNavigate } from "react-router-dom";

function AdminDashboard() {

  const navigate = useNavigate();
  const logout = () => {
  localStorage.clear();
  navigate("/");
};
  

  return (
    <div className="dashboard">

      <h1>👨‍💼 Admin Dashboard</h1>

      <p
        style={{
          fontSize: "18px",
          marginBottom: "30px",
          color: "#555"
        }}
      >
        Manage Customers, Bikes, Bookings and Service Status
      </p>

      <div className="cards">

        <button onClick={() => navigate("/customers")}>
          👥 View Customers
        </button>

        <button onClick={() => navigate("/bikes")}>
          🏍 View Bikes
        </button>

        <button onClick={() => navigate("/bookings")}>
          📋 View Bookings
        </button>

        <button onClick={() => navigate("/status")}>
          ✅ Update Status
        </button>
        <button onClick={() => navigate("/home")}>
          🏠 Home
        </button>

        <button onClick={logout}>
          🚪 Logout
        </button>

      </div>

      <div
        style={{
          marginTop: "40px",
          background: "white",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)"
        }}
      >
        <h2>📊 Admin Controls</h2>

        <p>
          Monitor all customer registrations, bikes,
          service bookings and update service status.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "20px",
            flexWrap: "wrap",
            gap: "15px"
          }}
        >
          <div>
            <h3>👥 Customers</h3>
            <p>View Registered Users</p>
          </div>

          <div>
            <h3>🏍 Bikes</h3>
            <p>Manage Customer Bikes</p>
          </div>

          <div>
            <h3>📋 Bookings</h3>
            <p>Track Service Requests</p>
          </div>

          <div>
            <h3>🔧 Services</h3>
            <p>Update Service Status</p>
          </div>
        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;