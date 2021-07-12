import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { AboutMe, Porfolio, Contacts } from '../index';

export const CustomRouter = () => {
	return (
		<Router>
			<Background>
				<CustomUl>
					<li>
						<CustomLink activeStyle={{ color: `red` }} to="/">
							<span>AboutMe</span>
						</CustomLink>
					</li>
					<li>
						<CustomLink activeStyle={{ color: `red` }} to="/porfolio">
							Porfolio
						</CustomLink>
					</li>
					<li>
						<CustomLink activeStyle={{ color: `red` }} to="/contacts">
							Contacts
						</CustomLink>
					</li>
				</CustomUl>
			</Background>
			<hr />
			<Route exact path="/">
				<AboutMe />
			</Route>
			<Route exact path="/porfolio">
				<Porfolio />
			</Route>
			<Route exact path="/contacts">
				<Contacts />
			</Route>
		</Router>
	);
};

const Background = styled.div`
	background-color: black;
	list-style: none;
	border: 1px inset black;
`;
const CustomUl = styled.ul`
	display: flex;
	list-style: none;
	justify-content: space-evenly;
	width: 827px;
	margin: 0 auto;
`;
const CustomLink = styled(NavLink)`
	text-decoration: none;
	color: white;
`;
