import styles from './Modal.module.css';
import useOnClickOutside from 'src/widgets/ListOfUsers/Modal/useOnClickOutside.js';

const Modal = (/*{ acceptHandler, cancelHandler }*/) => {
	const { ref } = useOnClickOutside();
	// todo добавить ховеры
	return (
		<div
			className={styles.modal}
			ref={ref}
		>
			<div className={styles.question}>
				Вы уверены, что хотите удалить пользователя?
			</div>
			<div className={styles.buttons}>
				<button className={styles.button}>Да</button>
				<button className={`${styles.button} ${styles.primary}`}>Нет</button>
			</div>
		</div>
	);
};

export default Modal;
