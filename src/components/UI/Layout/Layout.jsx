import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
	padding: 3rem;
	background-color: var(--main-background);
	background: ${props => `url(${props.theme.illustrations.two}) top -5rem right -10rem no-repeat, 
		url(${props.theme.illustrations.three}) 6% 50% no-repeat,
		url(${props.theme.illustrations.one}) -4% 110% no-repeat,
		url(${props.theme.illustrations.four}) 101% 105% no-repeat,
		url(${props.theme.illustrations.five}) 94% 85% no-repeat`
	};
	background-size: 30rem, 12rem, 22rem, 10rem, 3rem;
	background-clip: border-box;
	background-attachment: fixed;
`


const Layout = ({ children }) => {
	return (
		<LayoutWrapper>
			<Router>
				{children}
			</Router>
		</LayoutWrapper>
	)
}

export default Layout;