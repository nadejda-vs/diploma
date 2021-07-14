import styled from 'styled-components';
import { Slider } from '../slider';
export const Modal = ({ closeModal, findId }) => {
	return (
		<Background onClick={closeModal}>
			<Container onClick={(event) => event.stopPropagation()}>
				<button onClick={closeModal}>Закрыть</button>
				<Slider findId={findId} />
			</Container>
		</Background>
	);
};
const Background = styled.div`
	position: fixed;
	padding-left: 500px;

	height: 100vh;
	background: #000000cc;
	top: 0;
	display: flex;
	align-items: center;
`;

const Container = styled.div`
	background: black;
	border-radius: 12px;
	width: 1200px;
	height: 70vh;
	flex-flow: wrap;
`;
