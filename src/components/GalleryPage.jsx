import React from 'react';
import { Modal } from './Modal';
import { Gallery } from './Gallery';
import { photos } from './photos';
import { useState } from 'react';
import styled from 'styled-components';

export const GalleryPage = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [findId, setFindId] = useState('');
	const onClick = (event) => {
		setIsOpenModal(true);
		setFindId(event.target.id);
		console.log(event.target);
	};
	const closeModal = () => {
		setIsOpenModal(false);
	};
	return (
		<div>
			<Container>
				<Gallery photos={photos} onClick={onClick} />
				{isOpenModal ? <Modal findId={findId} closeModal={closeModal} /> : null}
			</Container>
		</div>
	);
};
const Container = styled.div`
	display: flex;
`;
