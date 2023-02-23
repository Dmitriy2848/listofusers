import usersSlice, {
	fetchUsers,
	deleteUser,
	sortingUser,
	searchUser
} from 'src/pages/Users/model/usersSlice.js';
import Users from 'src/pages/Users/ui.jsx';

export { usersSlice, deleteUser, fetchUsers, sortingUser, searchUser };
export default Users;
