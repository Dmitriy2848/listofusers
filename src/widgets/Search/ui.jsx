import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { searchUser, sortingUser } from 'src/pages/Users';

import { ReactComponent as SearchIcon } from 'src/shared/assets/search.svg';
import { ReactComponent as BroomIcon } from 'src/shared/assets/broom.svg';
import s from 'widgets/Search/ui.module.css';

const Search = () => {
	const dispatch = useDispatch();
	const { sortBy, searchBy } = useSelector((state) => state.users);
	const [searchValue, setSearchValue] = useState('');

	const clearFilter = sortBy.date || sortBy.rating || searchBy;

	const changeHandler = (e) => {
		setSearchValue(e.target.value);
	};
	const deleteSearch = () => {
		setSearchValue('');
		dispatch(searchUser(''));
		dispatch(sortingUser());
	};

	useEffect(() => {
		dispatch(searchUser(searchValue.toLowerCase()));
	}, [searchValue]);

	return (
		<div className={s.wrapper}>
			<div className={s.input}>
				<span className={s.icon}>
					<SearchIcon />
				</span>
				<input
					type='text'
					className={s.field}
					value={searchValue}
					onChange={changeHandler}
					placeholder='Поиск по имени или e-mail'
				/>
			</div>
			<div className={`${s.clear} ${clearFilter ? '' : s.disabled}`}>
				<button
					className={s.button}
					onClick={deleteSearch}
				>
					<span className={s.icon}>
						<BroomIcon />
					</span>
					<span className={s.text}>Очистить фильтр</span>
				</button>
			</div>
		</div>
	);
};

export default Search;
