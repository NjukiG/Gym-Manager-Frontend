import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ExerciseDetails from "./pages/ExerciseDetails";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import { useAuth } from "./utils/AuthContext";
import PrivateRoutes from "./utils/PrivateRoutes";
import Trainers from "./pages/Trainers";
import TrainerForm from "./components/TrainerForm";
import Classes from "./pages/Classes";
import ClassDetails from "./components/ClassDetails";
import ClassForm from "./components/ClassForm";

function App() {
  const { user, loginUser } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/trainers/create" element={<TrainerForm />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/:id" element={<ClassDetails />} />
          <Route path="/classes/create" element={<ClassForm />} />
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
