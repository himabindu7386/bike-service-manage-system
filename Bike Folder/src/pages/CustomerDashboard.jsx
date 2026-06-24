import { useNavigate } from "react-router-dom";

function CustomerDashboard() {

const navigate = useNavigate();

const logout = () => {
localStorage.clear();
navigate("/");
};

return ( <div className="dashboard">

```
  <h1>👤 Customer Dashboard</h1>

  <p
    style={{
      fontSize: "18px",
      marginBottom: "30px",
      color: "#555"
    }}
  >
    Manage your bikes and service bookings
  </p>

  <div className="cards">

    <button onClick={() => navigate("/home")}>
      🏠 Home
    </button>

    <button onClick={() => navigate("/add-bike")}>
      🏍 Add Bike
    </button>

    <button onClick={() => navigate("/book-service")}>
      🛠 Book Service
    </button>

    <button onClick={() => navigate("/bookings")}>
      📋 My Bookings
    </button>

    <button onClick={logout}>
      🚪 Logout
    </button>

  </div>

</div>

);
}

export default CustomerDashboard;
