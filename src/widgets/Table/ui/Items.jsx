import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchUsers, deleteUser } from 'pages/Users';
import Modal from 'src/shared/ui/Modal';
import Pagination from 'src/shared/ui/Pagination';

import { ReactComponent as CrossIcon } from 'src/shared/assets/cross.svg';
import s from 'widgets/Table/ui/ui.module.css';

export const Items = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchUsers());
	}, []);

	const { list, searchBy, sortBy } = useSelector((state) => state.users);
	let listClone = structuredClone(list);

	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 5;
	const firstPageIndex = (currentPage - 1) * pageSize;
	const lastPageIndex = firstPageIndex + pageSize;

	if (searchBy) {
		listClone = listClone.filter((user) => {
			if (
				user.email.toLowerCase().includes(searchBy) ||
				user.username.toLowerCase().includes(searchBy)
			) {
				return true;
			}
		});
	}
	if (sortBy.date) {
		listClone = listClone.sort((a, b) => {
			const aDate = new Date(a.registration_date);
			const bDate = new Date(b.registration_date);
			return bDate - aDate;
		});
	}
	if (sortBy.rating) {
		listClone = listClone.sort((a, b) => b.rating - a.rating);
	}

	const currentData = listClone.slice(firstPageIndex, lastPageIndex);
	if (!currentData.length && currentPage > 1) {
		setCurrentPage((prev) => prev - 1);
	}

	return (
		<>
			{currentData.map((item) => (
				<Item
					key={item.id}
					id={item.id}
					username={item.username}
					email={item.email}
					registration_date={item.registration_date}
					rating={item.rating}
				/>
			))}
			<Pagination
				currentPage={currentPage}
				totalCount={listClone.length}
				pageSize={pageSize}
				onPageChange={(page) => setCurrentPage(page)}
			/>
		</>
	);
};

const Item = ({ id, username, email, registration_date, rating }) => {
	const dispatch = useDispatch();
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const formatDate = new Date(registration_date).toLocaleDateString();

	const deleteHandler = (id) => {
		dispatch(deleteUser(id));
		setModalIsOpen(false);
	};

	return (
		<>
			<div className={s.item}>
				<span>{username}</span>
				<span>{email}</span>
				<span>{formatDate}</span>
				<span>{rating}</span>
				<span>
					<button
						className={s.delete}
						onClick={() => setModalIsOpen(true)}
					>
						<CrossIcon />
					</button>
				</span>
			</div>
			{modalIsOpen && (
				<Modal
					acceptHandler={() => deleteHandler(id)}
					cancelHandler={() => setModalIsOpen(false)}
				/>
			)}
		</>
	);
};
