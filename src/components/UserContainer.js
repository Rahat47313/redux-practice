import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux";

function UserContainer() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);
  return user.loading? (
    <h2>Loading</h2>
  ) : user.error? (
    <h2>{user.error}</h2>
  ) : (
    <div>
        <h2>User List</h2>
        <div>
            {user && user.users && user.users.map(user => <p>{user.name}</p>)}
        </div>
    </div>
  )
}

export default UserContainer;
