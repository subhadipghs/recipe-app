import React from 'react';
import styled from 'styled-components';
import iconFeatureSearch from '../../assets/Icons/feather-search.png';

const Wrapper = styled.div`
	border: none;
	padding: 0.3rem;
	display: flex;
	& input {
		border: none;
		background-color: inherit;
	}
	& input:focus {
		outline: none;
		border: none;
	}
`;

const IconWrapper = styled.span`
	background-color: var(--white-color);	
	width: 2.5rem;
	height: 2.5rem;
	border-radius: ${props => props.circle ? "50%" : "var(--border-radius)"};
	box-shadow: var(--box-shadow);
	text-align: center;
	display: inline-block;
`;

const Icon = styled.img`
	width: 1rem;
	height: 1rem;
	display: block;
	margin: 0.7rem 0 0 0.7rem;
`;

const Input = styled.input`
	padding-left: 1rem;
	padding-right: 1rem;
	width: 80%;
	font-size: 1.08rem;
`;


const Searchbar = ({ placeholder }) => {
	return (
		<Wrapper>
			<IconWrapper circle>
				<Icon
					src={iconFeatureSearch}
				/>
			</IconWrapper>
			<Input
				placeholder={placeholder}
			/>
		</Wrapper>
	)
}

export default Searchbar;