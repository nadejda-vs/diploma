import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { photos } from '../photos';

export const Slider = ({ findId }) => {
	return (
		<div className="slide-container">
			<Zoom defaultIndex={+findId}>
				{photos.map((item, index) => (
					<img
						key={index}
						id={item.id}
						style={{ width: '100%' }}
						src={item.src}
					/>
				))}
			</Zoom>
		</div>
	);
};
