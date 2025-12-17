import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");
  const [time, setTime] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || 'https://democicd-acln.onrender.com')
      .then(res => res.json())
      .then(data => {
        setMessage(data.message);
        setTime(data.time);
      })
      .catch(() => {
        setMessage("❌ Cannot connect to backend");
      });
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>CI/CD DEMO 🚀</h1>

      <p><b>Message from backend:</b></p>
      <h2>{message}</h2>

      <p><b>Server time:</b></p>
      <h3>{time}</h3>

      <hr />
    </div>
  );
}

export default App;
