import { Link } from 'react-router-dom';

const Users = () => {
  const users = [
    { id: '1', name: 'Pierre' },
    { id: '2', name: 'Paul' },
    { id: '3', name: 'Rachid' },
  ];

  return (
    <ul>
      {users.map(({ name, id }) => (
        <li>
          <Link to={`/users/${id}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Users;
