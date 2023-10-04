import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      <h1>Homepage</h1>
      <Link to='/users'>Users</Link>
    </>
  );
};

export default HomePage;
