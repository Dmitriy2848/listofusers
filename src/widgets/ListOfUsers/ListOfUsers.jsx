import styles from './ListOfUsers.module.css';
import { ReactComponent as CrossIcon } from 'src/shared/assets/cross.svg';

const ListOfUsers = () => {
	return (
		<div className={styles.container}>
			<Sorting />
			<Table />
		</div>
	);
};

const Sorting = () => {
	const active = true;
	return (
		<div className={styles.sorting}>
			<div>Сортировка:</div>
			<div className={styles.sort_buttons}>
				<button
					className={`${styles.sort_button} ${active ? styles.active : ''}`}
				>
					Дата регистрации
				</button>
				<button
					className={`${styles.sort_button} ${active ? styles.active : ''}`}
				>
					Рейтинг
				</button>
			</div>
		</div>
	);
};

const Table = () => {
	return (
		<div className={styles.table}>
			<Header />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
			<Item />
		</div>
	);
};
const Header = () => {
	return (
		<div className={styles.header}>
			<span className={styles.header_item}>Имя пользователя</span>
			<span className={styles.header_item}>E-mail</span>
			<span className={styles.header_item}>Дата регистрации</span>
			<span className={styles.header_item}>Рейтинг</span>
		</div>
	);
};
const Item = () => {
	return (
		<div className={styles.item}>
			<span className={styles.item_username}>Username</span>
			<span className={styles.item_email}>test@test.ru</span>
			<span className={styles.item_registration}>23.09.19</span>
			<span className={styles.item_rating}>12</span>
			<span>
				<button className={styles.delete}>
					<CrossIcon />
				</button>
			</span>
		</div>
	);
};

export default ListOfUsers;
