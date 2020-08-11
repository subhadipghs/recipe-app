import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	width: ${props => props.full ? "100%" : "6rem"};
	height: 2.5rem;
	font-size: 1.05rem;
	border-radius: ${props => props.type === "pill" ? "2rem" : (
		props.type === "block" ? (
			"0.1rem"
		) : (
			"var(--border-radius)"
		)
	)};
	color: ${props => props.outline ? "var(--ultimate-green-theme)" : "var(--white-color)"};
	background-color: ${props => props.outline ? "var(--black-color)" : "#00000000"};
	border: 0.2rem solid var(--white-color);
	transition: background-color 0.3s;
	margin-bottom: 1rem;
	&:hover {
		background-color: var(--white-color);
		color: var(--black-color);
	}
`;


const Button = ({ text, type, full, outline, clicked, ...rest }) => {
	return (
		<ButtonWrapper full type={type} outline={outline} onClick={() => clicked()} {...rest}>
			{text}
		</ButtonWrapper>
	)
}

export default Button;