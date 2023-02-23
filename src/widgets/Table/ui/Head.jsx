import s from 'src/widgets/Table/ui/ui.module.css';

export const Head = () => {
	return (
		<div className={s.header}>
			<span className={s.header_item}>Имя пользователя</span>
			<span className={s.header_item}>E-mail</span>
			<span className={s.header_item}>Дата регистрации</span>
			<span className={s.header_item}>Рейтинг</span>
		</div>
	);
};
