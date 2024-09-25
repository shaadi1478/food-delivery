import { Navigate } from 'react-router-dom';
import { useAuth } from '../AuthContext/AuthContext'; 

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to login page if user is not authenticated
    return <Navigate to="/" />;
  }

  return children;
};

export default PrivateRoute;
