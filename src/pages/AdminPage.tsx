import { useState } from "react";
import AdminPanel from "@/components/AdminPanel";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;

const AdminPage = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
    } else {
      setError("Incorrect password. Please try again.");
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <div className="relative w-full max-w-sm mx-auto">
          {/* Back button above and left of the card */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="absolute -top-10 left-0 flex items-center gap-2 px-3 py-1 rounded bg-white shadow hover:bg-gray-100 text-wedding-primary font-medium transition"
            style={{ zIndex: 10 }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-lg shadow-lg w-full"
          >
            <h2 className="text-2xl font-bold mb-4 text-center text-wedding-primary">
              Admin Panel Login
            </h2>
            <input
              type="password"
              placeholder="Enter admin password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-wedding-primary"
            />
            {error && (
              <div className="text-red-600 mb-2 text-sm text-center">{error}</div>
            )}
            <button
              type="submit"
              className="w-full bg-wedding-primary text-white py-2 rounded font-semibold hover:bg-wedding-primary-dark transition"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return <AdminPanel onLogout={() => setAuthenticated(false)} />;
};

export default AdminPage;