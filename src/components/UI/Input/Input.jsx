import React from "react";
import styled from "styled-components";

const Input = styled.input`
	padding-left: 1rem;
	padding-right: 1rem;
	width: ${props => props.contain ? "80%" : "40%"};
	height: ${props => props.height ? props.height : "auto" };
	font-size: 1.08rem;
`;

const Label = styled.label`
	color: ${props => props.color ? props.color : "var(--black-color)"};
	padding: 0.2rem;
`;


const InputBox = ({
	hasLabel,
	label,
	border,
	name,
	placeholder,
	id,
	contain,
	...rest
}) => {
	return (
		<>
			{hasLabel && !!label && <Label>{label}</Label>}
			<Input
				name={name}
				id={id}
				placeholder={placeholder}
				border={border}
				contain={contain}
				{...rest}
			/>
		</>
	);
};

export default InputBox;
