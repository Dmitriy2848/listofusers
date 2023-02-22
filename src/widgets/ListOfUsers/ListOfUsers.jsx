import styles from './ListOfUsers.module.css';
import { ReactComponent as CrossIcon } from 'src/shared/assets/cross.svg';
import Pagination from 'src/widgets/ListOfUsers/Pagination/Pagination.jsx';
import { useMemo, useState } from 'react';
import data from './data.json';
import Modal from 'src/widgets/ListOfUsers/Modal/Modal.jsx';

const ListOfUsers = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	return (
		<div className={styles.container}>
			<Sorting />
			<Table />
			{/*<Modal />*/}
		</div>
	);
};

const Sorting = () => {
	// мб просто два состояния
	const [isActive, setIsActive] = useState({
		date: false,
		rating: false
	});
	const clickHandler = (field) => {
		if (field === 'rating') {
			setIsActive((prev) => ({ date: false, rating: !prev.rating }));
		} else if (field === 'date') {
			setIsActive((prev) => ({ rating: false, date: !prev.date }));
		}
	};
	return (
		<div className={styles.sorting}>
			<div>Сортировка:</div>
			<div className={styles.sort_buttons}>
				<button
					className={`${styles.sort_button} ${
						isActive.date ? styles.active : ''
					}`}
					onClick={() => clickHandler('date')}
				>
					Дата регистрации
				</button>
				<button
					className={`${styles.sort_button} ${
						isActive.rating ? styles.active : ''
					}`}
					onClick={() => clickHandler('rating')}
				>
					Рейтинг
				</button>
			</div>
		</div>
	);
};

const Table = () => {
	let PageSize = 5;
	const [currentPage, setCurrentPage] = useState(1);
	const currentTableData = useMemo(() => {
		const firstPageIndex = (currentPage - 1) * PageSize;
		const lastPageIndex = firstPageIndex + PageSize;
		return data.slice(firstPageIndex, lastPageIndex);
	}, [currentPage]);

	return (
		<div className={styles.table}>
			<Header />
			{currentTableData.map((el) => (
				<Item
					key={el.id}
					username={el.username}
					email={el.email}
					registration_date={el.registration_date}
					rating={el.rating}
				/>
			))}
			<Pagination
				className='pagination-bar'
				currentPage={currentPage}
				totalCount={data.length}
				pageSize={PageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
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
const Item = ({ username, email, registration_date, rating }) => {
	return (
		<div className={styles.item}>
			<span>{username}</span>
			<span>{email}</span>
			<span>{registration_date}</span>
			<span>{rating}</span>
			<span>
				<button className={styles.delete}>
					<CrossIcon />
				</button>
			</span>
		</div>
	);
};

export default ListOfUsers;
