import styled from 'styled-components';

export const Div = ({ click, Texth2, textP }) => {
	// const className = priority === 'primary' ? 'button' : 'button second';

	return (
		<DivStyled>
			<div onClick={click}>
				<h2>{Texth2}</h2>
				<p>{textP}</p>
			</div>
		</DivStyled>
	);
};
const DivStyled = styled.div`
	display: flex;
`;
