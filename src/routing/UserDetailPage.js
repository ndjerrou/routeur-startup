import { useLocation, useParams, useSearchParams } from 'react-router-dom';

const UserDetailPage = () => {
  // getting paramters of route
  const { id } = useParams();

  // fetch the user with the given id ...

  // getting the query string parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name');
  console.log(name);
  // display details according to the name...

  // getting infos about the url
  const loc = useLocation();
  console.log(loc);

  return <p>user Detail Page</p>;
};

export default UserDetailPage;
