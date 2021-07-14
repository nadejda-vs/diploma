import './button.css';
import { useHistory } from 'react-router-dom';

export const Button = ({ onClick, text, priority }) => {
	const className = priority === 'primary' ? 'button' : 'button second';
	const hist = useHistory();
	function click() {
		hist.push('/contacts');
	}
	return (
		<button className={className} onClick={click}>
			{text}
		</button>
	);
};
