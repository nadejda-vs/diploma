import styled from 'styled-components';
import { Slider } from '../Slider';
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
	padding-left: 100px;
	height: 100vh;
	width: 100%;
	background: #000000cc;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Container = styled.div`
	width: 60%; 
	height: 100%; 
`;
