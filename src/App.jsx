import styles from './App.module.css';
import UserSearch from 'src/widgets/UserSearch/UserSearch.jsx';
import ListOfUsers from 'src/widgets/ListOfUsers/ListOfUsers.jsx';

const Heading = () => <h1 className={styles.heading}>Список пользователей</h1>;

function App() {
	return (
		<div className={styles.app}>
			<Heading />
			<UserSearch />
			<ListOfUsers />
		</div>
	);
}

export default App;
