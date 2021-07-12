import './button.css';
export const Button = ({ click, text, priority }) => {
	const className = priority === 'primary' ? 'button' : 'button second';

	return (
		<button className={className} onClick={click}>
			{text}
		</button>
	);
};
