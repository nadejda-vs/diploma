import React from 'react';
import styled from 'styled-components';
import {
    BrowserRouter as Router,
    Route,
  } from 'react-router-dom';
  import { NavLink } from "react-router-dom"
import { AboutMe, Porfolio,Contacts } from '../index';

export const CustomRouter = () => {
	return (

    <Router><Background>
        <CustomUl >
					
					<li>
						<CustomLink  activeStyle={{color:`blue`}} to="/AboutMe"><span>AboutMe</span></CustomLink>
					</li>
                    <li>
						<CustomLink to="/Porfolio">Porfolio</CustomLink>
					</li>
                    <li>
						<CustomLink  to="/Contacts">Contacts</CustomLink>
					</li>
                   
				</CustomUl></Background>
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
  )
}
// const CustomRouter = styled.div`
// 	justify-content: center;
// 	background-color: #bababa;
// 	// font-size: 45px;
// 	// text-align: center;
// 	// justify-content: center;
// 	// display: grid;
// 	// grid-template-rows: 1fr 1fr 1fr;
// 	// grid-template-columns: 1fr 1fr 1fr;
// 	// grid-gap: 2vw;
// 	// padding: 0.5em;
// 	// color: rgb(26, 23, 26);
// `;


const Background = styled.div`
background-color: #dedede;
list-style: none;
border: 1px inset black;
`;
const CustomUl=styled.ul`
display: flex;
list-style: none;
justify-content: space-evenly;
width: 827px;
/* align-items: center; */
margin: 0 auto;
`
const CustomLink=styled(NavLink)`
text-decoration:none;
color:black;
`