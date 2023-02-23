import Table from 'src/widgets/Table/index.js';
import Search from 'src/widgets/Search/index.js';

import s from './ui.module.css';

const Heading = () => <h1 className={s.heading}>Список пользователей</h1>;

export const Users = () => {
	return (
		<>
			<Heading />
			<Search />
			<Table />
		</>
	);
};

export default Users;
