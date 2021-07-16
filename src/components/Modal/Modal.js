import styled from 'styled-components';

import ImageSlider from '../Slider/ImageSlider';
import { photos } from '../photos';
export const Modal = ({ closeModal, findId }) => {
	return (
		<Background onClick={closeModal}>
			<Container onClick={(event) => event.stopPropagation()}>
				<ImageSlider slides={photos} findId={findId} />
			</Container>
		</Background>
	);
};
const Background = styled.div`
	position: relative;
	top: 40px;
	left: 40px;
	z-index: 6;
	width: 100%;
	background: #000000cc;
	top: 0;
	/* display: flex; */
	/* justify-content: center; */
`;

const Container = styled.div`
	width: 100%;
	height: 100%;
`;
