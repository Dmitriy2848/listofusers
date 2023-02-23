import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { sortingUser } from 'src/pages/Users';

import s from './ui.module.css';

export const Sort = () => {
	const dispatch = useDispatch();
	const sortBy = useSelector((state) => state.users.sortBy);

	const [sortByDate, setSortByDate] = useState(sortBy.date);
	const [sortByRating, setSortByRating] = useState(sortBy.rating);

	const dateHandler = () => {
		setSortByRating(false);
		setSortByDate((prevState) => !prevState);
	};
	const ratingHandler = () => {
		setSortByRating((prevState) => !prevState);
		setSortByDate(false);
	};

	useEffect(() => {
		setSortByDate(sortBy.date);
		setSortByRating(sortBy.rating);
	}, [sortBy]);

	useEffect(() => {
		if (sortByDate) {
			dispatch(sortingUser('date'));
		} else if (sortByRating) {
			dispatch(sortingUser('rating'));
		} else {
			dispatch(sortingUser());
		}
	}, [sortByDate, sortByRating]);

	return (
		<div className={s.sorting}>
			<div>Сортировка:</div>
			<div className={s.buttons}>
				<SortButton
					text='Дата регистрации'
					onClick={dateHandler}
					isActive={sortByDate}
				/>
				<SortButton
					text='Рейтинг'
					onClick={ratingHandler}
					isActive={sortByRating}
				/>
			</div>
		</div>
	);
};

const SortButton = ({ text, onClick, isActive }) => {
	return (
		<button
			className={`${s.button} ${isActive ? s.active : ''}`}
			onClick={onClick}
		>
			{text}
		</button>
	);
};
