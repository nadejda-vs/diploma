import styled from 'styled-components';
export const PopUp = ({ closeModal }) => {
	return (
		<Background onClick={closeModal}>
			<Container onClick={(event) => event.stopPropagation()}>
				<div>Ваша заявка принята, в ближайшее время мы Вам перезвоним</div>
			</Container>
		</Background>
	);
};
const Background = styled.div`
	/* position: fixed; */
	/* width: 100%; */
	background: #302a2acc;
	/* top: 0;
	display: flex;
	justify-content: center; */
`;

const Container = styled.div`
	/* width: 60%; */
	height: 100%;
`;
