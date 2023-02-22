import React from 'react';
import { usePagination, DOTS } from './usePagination';
import styles from './Pagination.module.css';
const Pagination = (props) => {
	const {
		onPageChange,
		totalCount,
		siblingCount = 1,
		currentPage,
		pageSize,
		className
	} = props;

	const paginationRange = usePagination({
		currentPage,
		totalCount,
		siblingCount,
		pageSize
	});

	if (currentPage === 0 || paginationRange.length < 2) {
		return null;
	}

	const onNext = () => {
		onPageChange(currentPage + 1);
	};

	const onPrevious = () => {
		onPageChange(currentPage - 1);
	};

	let lastPage = paginationRange[paginationRange.length - 1];
	return (
		<nav className={`${styles.container} ${className || ''}`}>
			<li
				className={`${styles.item} ${currentPage === 1 ? styles.disabled : ''}`}
				onClick={onPrevious}
			>
				Пред.
			</li>
			{paginationRange.map((num, i) => {
				if (num === DOTS) {
					return (
						<li
							key={i}
							className={`${styles.item}`}
						>
							...
						</li>
					);
				}

				return (
					<li
						key={i}
						className={`${styles.item} ${
							currentPage === num ? styles.selected : ''
						}`}
						onClick={() => onPageChange(num)}
					>
						{num}
					</li>
				);
			})}
			<li
				className={`${styles.item} ${
					currentPage === lastPage ? styles.disabled : ''
				}`}
				onClick={onNext}
			>
				След.
			</li>
		</nav>
	);
};

export default Pagination;
