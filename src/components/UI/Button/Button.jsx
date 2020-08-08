import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
	width: 6rem;
	height: 2rem;
	border-radius: ${props => props.type === "pill" ? "2rem" : (
		props.type === "block" ? (
			"0.1rem"
		) : (
			"var(--border-radius)"
		)
	)};
	color: ${props => props.outline ? "var(--white-color)" : "var(--black-color)"};
	background-color: ${props => props.outline ? "var(--black-color)" : "#00000000"};
	border: ${props => props.outline ? "0.2rem solid var(--black-color)" : "none"};
`;


const Button = ({ text, type, outline, clicked, ...rest }) => {
	return (
		<ButtonWrapper type={type}  outline={outline} onClick={() => clicked()} {...rest}>
			{text}
		</ButtonWrapper>
	)
}

export default Button;