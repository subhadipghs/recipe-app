import React from 'react';
import styled from 'styled-components';

const ErrorStyle = styled.div`
	color: var(--white-color);
	padding: 1rem;
	text-align: center;
	margin: 1rem;
	font-size: 1.2rem;
	background: linear-gradient(40deg, crimson 10%, red 70%);
	border-radius: 0.3rem;
`;

const Error = ({ message }) => {
	return (
		<ErrorStyle>
			{message}
		</ErrorStyle>
	)
}

export default Error;