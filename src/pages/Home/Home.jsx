import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/UI/Layout/Layout';
import Searchbar from '../../components/Searchbar/Searchbar';
import Category from '../../components/Category/Category';
import Card from '../../components/Card/Card';

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
	margin-top: 1rem;
	justify-content: ${props => props.justify ? props.justify : "center" };
	align-items: ${props => props.align || "center" };
`;

const cards = [1, 2, 3, 4, 5, 6, 7, 8];


const Home = (props) => {
	return (
		<Layout>
			<Searchbar placeholder="Search your favourite recipe" />
			<Category text="Pizza &amp; Noodles"/>
			<Flex justify="center" align="flex-start">
				{cards.map((card, index) => {
					return (
						<Card index={index}/>
					)
				})}
			</Flex>
		</Layout>
	)
}

export default Home;