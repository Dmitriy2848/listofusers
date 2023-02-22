import { useEffect, useRef } from 'react';

function useOnClickOutside(handler) {
	const ref = useRef();

	useEffect(() => {
		const listener = (event) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			handler(event);
		};
		document.addEventListener('mousedown', listener);
		document.addEventListener('touchstart', listener);
		return () => {
			document.removeEventListener('mousedown', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, handler]);

	return { ref };
}

export default useOnClickOutside;