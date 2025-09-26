import { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function LogoutPage() {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    logout(); // clear token
    navigate("/"); // redirect to home
  }, [logout, navigate]);

  return (
    <div className="text-center mt-20">
      <h2 className="text-2xl font-bold">Logging out...</h2>
      <p className="text-gray-600">You will be redirected shortly.</p>
    </div>
  );
}
