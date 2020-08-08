import React from 'react';
import styled from 'styled-components';
import Button from '../../components/UI/Button/Button';
import image from '../../assets/Images/Img2.jpg';

const CardWrapper = styled.div`
	width: 17rem;
	height: 25rem;
	display: flex;
	flex-direction: column;
	margin: 0.8rem 10px 0.8rem 10px;
	cursor: pointer;
	background-image: linear-gradient(to top, #ffffffff 0%, #ffffff55 40%);
	color: var(--main-black);
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);
	position: relative;
	border: none;
	&:hover {
		background-color: var(--ultimate-green), #000f0f;
	}
	& span {
		top: 0;
		right: 0;
	}
`;

const TopText = styled.span`
	position: absolute;
	text-align: center;
	background-color: #000000aa;
	color: var(--white-color);
	width: 5rem;
	padding: 0.4rem;
	border-top-right-radius: var(--border-radius);
	border-bottom-left-radius: var(--border-radius);
`;

const Container = styled.div`
	width: ${props => props.width || "100%"};
	height: 65%;
	display: flex;
	align-items: center;
	background-image: ${props => `linear-gradient(to top, #ffffffff 0%, #00000000 35%), url(${props.imgsrc})`};
	background-size: 100% auto;
	background-repeat: no-repeat;
	border-top-left-radius: var(--border-radius);
	border-top-right-radius: var(--border-radius);
`;

const Image = styled.img`
	width: ${props => props.width || "100%"};
	height: 100%;
	object-fit: cover;
`;

const Grid = styled.div`
	display: grid;

`

const Card = ({ imagesrc, title }) => {
	return (
		<CardWrapper>
			<Container width="100%" imgsrc={image}/>
			<TopText>
				In Pizza
			</TopText>	
			<Grid>
				<div className="">

				</div>
			</Grid>
		</CardWrapper>
	);
}
export default Card;