import { useEffect } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

export default function LogoutPage() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logout();
    navigate("/");
  }, [logout, navigate]);

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Logging out...</h2>
      <p className="text-gray-600">You will be redirected shortly.</p>
    </div>
  );
}