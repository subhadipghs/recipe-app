import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: block;
	width: 100%;
	display: flex;
	flex-direction: column;
	& .text {
		text-align: right;
		text-transform: uppercase;
		font-size: 0.8rem;
		color: #999;
		padding: 0.5rem;
	}
	& .category__name {
		text-align: right;
		letter-spacing: 0.1rem;
		font-size: 2rem;
		font-family: "Metropolis Bold";
	}
`;


const Category = ({ text }) => {
	return (
		<Wrapper>
			<div className="text">
				search results
			</div>
			<h1 className="category__name">
				{text}
			</h1>
		</Wrapper>
	);
}

export default Category; 