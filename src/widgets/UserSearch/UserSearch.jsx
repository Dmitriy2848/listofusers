import styles from './UserSearch.module.css';
import { ReactComponent as SearchIcon } from 'src/shared/assets/search.svg';
import { ReactComponent as BroomIcon } from 'src/shared/assets/broom.svg';
import { useState } from 'react';

const UserSearch = () => {
	const [searchValue, setSearchValue] = useState('');
	// todo добавить disabled кнопке
	return (
		<div className={styles.wrapper}>
			<div className={styles.input}>
				<span className={styles.input_icon}>
					<SearchIcon />
				</span>
				<input
					type='text'
					className={styles.input_field}
					value={searchValue}
					onChange={(e) => setSearchValue((prev) => e.target.value)}
					placeholder='Поиск по имени или e-mail'
				/>
			</div>
			<div className={styles.clear}>
				<button
					className={styles.button}
					onClick={() => setSearchValue('')}
				>
					<span className={styles.button_icon}>
						<BroomIcon />
					</span>
					<span className={styles.button_text}>Очистить фильтр</span>
				</button>
			</div>
		</div>
	);
};

export default UserSearch;
