import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AboutMe, Porfolio, Contacts } from '../index';

export const CustomRouter = () => {
	return (
		<Router>
			<BackgroundImage>
				<Background>
					<CustomUl>
						<li>
							<CustomLink exact activeStyle={{ color: `red` }} to="/">
								Обо мне
							</CustomLink>
						</li>
						<li>
							<CustomLink exact activeStyle={{ color: `red` }} to="/porfolio">
								Портфолио
							</CustomLink>
						</li>
						<li>
							<CustomLink exact activeStyle={{ color: `red` }} to="/contacts">
								Контакты
							</CustomLink>
						</li>
					</CustomUl>
				</Background>
			</BackgroundImage>
			<Route exact path="/">
				<AboutMe />
			</Route>
			<Route path="/porfolio">
				<Porfolio />
			</Route>
			<Route path="/contacts">
				<Contacts />
			</Route>
		</Router>
	);
};

const Background = styled.div`
	list-style: none;
	background: rgba(77, 81, 100, 0.5);
	font-size: 20px;
`;
const BackgroundImage = styled.div`
	background-image: url(/images/38.jpg);
	background-repeat: repeat-x;
	height: 550px;
`;
const CustomUl = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	width: 827px;
	height: 70px;
	margin: 0 auto;
	align-items: center;
`;

const CustomLink = styled(NavLink)`
	text-decoration: none;
	color: white;
`;
