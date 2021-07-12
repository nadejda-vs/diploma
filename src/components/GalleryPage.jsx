import React from 'react';
import { Modal } from './Modal';
import Gallery from 'react-photo-gallery';
import { photos } from './photos';
import { useState } from 'react';

export const GalleryPage = () => {
	const [isOpenModal, setIsOpenModal] = useState(false);
	const [findId, setFindId] = useState('');
	const onClick = (event) => {
		setIsOpenModal(true);
		setFindId(event.target.id );
		console.log(event.target);
	};
	const closeModal = () => {
		setIsOpenModal(false);
	};
	return (
		<div>
			<Gallery photos={photos} onClick={onClick} />
			{isOpenModal ? <Modal findId={findId} closeModal={closeModal} /> : null}
		</div>
	);
};
