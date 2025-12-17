import { useEffect, useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch(import.meta.env.VITE_API_URL || 'https://localhost:8081')
      .then(res => res.json())
      .then(data => setMsg(data.message));
  }, []);

  return <>
    <h1>Hello</h1>
    <h1>{msg}</h1>
  </>
}

export default App;
