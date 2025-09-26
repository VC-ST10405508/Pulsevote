import { useEffect, useState } from "react";
import api from "../api";

export default function DashboardPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/protected")
      .then(res => setMessage(res.data.message))
      .catch(() => setMessage("Error loading protected data"));
  }, []);

  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">Dashboard</h2>
      <p className="text-gray-700">{message}</p>
    </div>
  );
}
