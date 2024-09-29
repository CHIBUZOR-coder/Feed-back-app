import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1 className="house">Home</h1>
      <Link to="/Feed-back-app/Contact">Contact</Link>
    </div>
  );
};

export default Home;
