import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { photos } from '../photos';
import styled from 'styled-components';
export const Slider = ({ findId }) => {
	return (
		<div>
			<Container>
				<Zoom defaultIndex={+findId}>
					{photos.map((item, index) => (
						<img
							key={index}
							id={item.id}
							style={{ height: '650px' }}
							src={item.src}
						/>
					))}
				</Zoom>
			</Container>
		</div>
	);
};
const Container = styled.div`
	display: block;
`;
