import React from 'react';
import { useMemo } from 'react';

const DOTS = '...';

const range = (start, end) => {
	let length = end - start + 1;
	return Array.from({ length }, (_, idx) => idx + start);
};

const usePagination = ({
	totalCount,
	pageSize,
	siblingCount = 1,
	currentPage
}) => {
	const paginationRange = useMemo(() => {
		const totalPageCount = Math.ceil(totalCount / pageSize);

		// Количество страниц определяется как siblingCount + firstPage + lastPage + currentPage + 2*DOTS
		const totalPageNumbers = siblingCount + 5;

		// Если количество страниц меньше, чем количество предполагаемых номеров, возвращается диапазон
		if (totalPageNumbers >= totalPageCount) {
			return range(1, totalPageCount);
		}

		const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
		const rightSiblingIndex = Math.min(
			currentPage + siblingCount,
			totalPageCount
		);

		// Не нужно показывать точки, если осталась только одна позиция после/перед подсчетом левого/правого номера страницы
		const shouldShowLeftDots = leftSiblingIndex > 2;
		const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

		const firstPageIndex = 1;
		const lastPageIndex = totalPageCount;

		// Показывать точки только справа от текущего номера страницы
		if (!shouldShowLeftDots && shouldShowRightDots) {
			let leftItemCount = 3 + 2 * siblingCount;
			let leftRange = range(1, leftItemCount);

			return [...leftRange, DOTS, totalPageCount];
		}

		// Показывать точки только слева от текущего номера страницы
		if (shouldShowLeftDots && !shouldShowRightDots) {
			let rightItemCount = 3 + 2 * siblingCount;
			let rightRange = range(
				totalPageCount - rightItemCount + 1,
				totalPageCount
			);
			return [firstPageIndex, DOTS, ...rightRange];
		}

		// Показывать точки с обеих сторон от текущего номера страницы
		if (shouldShowLeftDots && shouldShowRightDots) {
			let middleRange = range(leftSiblingIndex, rightSiblingIndex);
			return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
		}
	}, [totalCount, pageSize, siblingCount, currentPage]);

	return paginationRange;
};

export { DOTS, usePagination };
