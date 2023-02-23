import { Sort, Head, Items } from 'src/widgets/Table/ui';

import s from 'widgets/Table/ui/ui.module.css';

const Table = () => {
	return (
		<div className={s.container}>
			<Sort />
			<div className={s.table}>
				<Head />
				<Items />
			</div>
		</div>
	);
};

export default Table;
