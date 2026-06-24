import { useNavigate } from "react-router-dom";

function Home() {

const navigate = useNavigate();

return ( <div className="dashboard">

```
  <h1 style={{fontSize:"50px"}}>
    🏍 Bike Service Management System
  </h1>

  <p
    style={{
      fontSize:"22px",
      color:"#444",
      marginBottom:"30px"
    }}
  >
    Your Trusted Partner for Bike Maintenance & Repairs
  </p>

  <div className="cards">

    <button onClick={() => navigate("/")}>
      🔐 Login
    </button>

    <button onClick={() => navigate("/register")}>
      📝 Register
    </button>

    <button onClick={() => navigate("/customer")}>
      👤 Customer
    </button>

    <button onClick={() => navigate("/admin")}>
      👨‍💼 Admin
    </button>

  </div>

  <div className="welcome-box">

    <h2>🚀 Welcome to Our Service Center</h2>

    <p>
      Book bike services online, track maintenance,
      manage bookings and enjoy hassle-free servicing.
    </p>

    <div
      style={{
        display:"flex",
        justifyContent:"space-around",
        flexWrap:"wrap",
        marginTop:"25px"
      }}
    >
      <div>
        <h3>🛠</h3>
        <p>General Service</p>
      </div>

      <div>
        <h3>🚲</h3>
        <p>Wheel Alignment</p>
      </div>

      <div>
        <h3>⛽</h3>
        <p>Oil Change</p>
      </div>

      <div>
        <h3>🔋</h3>
        <p>Battery Check</p>
      </div>

      <div>
        <h3>🧽</h3>
        <p>Bike Wash</p>
      </div>
    </div>

  </div>

  <div
    style={{
      marginTop:"30px",
      padding:"20px",
      background:"white",
      borderRadius:"20px",
      width:"80%",
      margin:"30px auto",
      boxShadow:"0 5px 15px rgba(0,0,0,0.1)"
    }}
  >
    <h2>⭐ Why Choose Us?</h2>

    <p style={{marginTop:"15px"}}>
      ✔ Easy Online Booking <br/>
      ✔ Professional Mechanics <br/>
      ✔ Real-Time Status Tracking <br/>
      ✔ Quick Service Delivery <br/>
      ✔ Customer-Friendly Experience
    </p>
  </div>

</div>

);
}

export default Home;
