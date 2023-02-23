import { useRef } from 'react';

import useOnClickOutside from 'src/shared/ui/Modal/lib.js';

import s from 'shared/ui/Modal/ui.module.css';

const Modal = ({ acceptHandler, cancelHandler }) => {
	const ref = useRef();
	useOnClickOutside(ref, cancelHandler);

	return (
		<div
			className={s.modal}
			ref={ref}
		>
			<div className={s.question}>
				Вы уверены, что хотите удалить пользователя?
			</div>
			<div className={s.buttons}>
				<button
					className={s.button}
					onClick={acceptHandler}
				>
					Да
				</button>
				<button
					className={`${s.button} ${s.primary}`}
					onClick={cancelHandler}
				>
					Нет
				</button>
			</div>
		</div>
	);
};

export default Modal;
