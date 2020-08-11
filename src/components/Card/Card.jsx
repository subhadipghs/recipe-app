import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button/Button";
<<<<<<< HEAD
import image from "../../assets/Images/Img2.jpg";
=======
>>>>>>> dev
import heartIcon from "../../assets/Icons/feather-heart.png";
import timeIcon from "../../assets/Icons/feather-clock.png";

const CardWrapper = styled.div`
	width: 20rem;
	height: 30rem;
	display: flex;
	flex-direction: column;
	margin: 0.8rem 10px 0.8rem 10px;
	background-image: linear-gradient(to top, #000000ff 0%, #000000ed 100%);
	color: var(--white-color);
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

	&:hover p button {		
		display: block;
	}
`;

const TopText = styled.span`
	position: absolute;
	text-align: center;
	background-color: #000000aa;
	color: var(--white-color);
	width: auto;
	padding: 0.4rem;
	border-top-right-radius: var(--border-radius);
	border-bottom-left-radius: var(--border-radius);
`;

const Container = styled.div`
	width: ${(props) => props.width || "100%"};
	height: 55%;
	display: flex;
	align-items: center;
	background-image: ${(props) =>
		`linear-gradient(to top, #000000ed 0%, #00000000 35%), url(${props.imgsrc})`};
	background-size: 100% auto;//
	background-repeat: no-repeat;
	border-top-left-radius: var(--border-radius);
	border-top-right-radius: var(--border-radius);
`;

<<<<<<< HEAD
// const Image = styled.img`
// 	width: ${(props) => props.width || "100%"};
// 	height: 100%;
// 	object-fit: cover;
// `;
=======
>>>>>>> dev

const Grid = styled.div`
	display: grid;
	width: 100%;
	height: 30%;

	grid-template-areas:
		"title like"
		"time like";
	grid-template-columns: 4fr 1fr;

	& > div {
		padding: 0px 10px;
		& img {
			filter: invert(100%);
		}
	}
`;

const TitleGridArea = styled.div`
	grid-area: title;
	font-size: 1.2rem;
	font-weight: bolder;
	margin-left: 0.5rem;
`;

const FlexGridArea = styled.div`
	display: flex;
	justify-content: ${(props) => props.justify || "center"};
	align-items: ${(props) => props.align || "center"};
	grid-area: ${(props) => props.gridArea || ""};
	vertical-align: "baseline";
	padding: ${(props) => props.padding || 0};
	margin: ${(props) => props.margin || 0};
`;

const IconImage = styled.img`
	width: ${(props) => props.width || "auto"};
	height: ${(props) => props.height || "auto"};
	padding: 0.1rem;
	filter: ${(props) => (props.filter ? props.filter : "")};
	padding: ${props => (props.padding ? props.padding: 0)};
	margin: ${props => (props.margin ? props.margin : 0)};
`;

const Paragraph = styled.p`
	padding: 1rem;
	& button {
		display: none;	
	}
`;


const Card = ({ imagesrc, title, toptext, time }) => {
	return (
		<CardWrapper>
			<Container width="100%" imgsrc={imagesrc} />
			<TopText>{toptext}</TopText>
			<Grid>
				<TitleGridArea>{title}</TitleGridArea>
				<FlexGridArea gridArea="like">
					<IconImage src={heartIcon} />
				</FlexGridArea>
				<FlexGridArea gridArea="time" justify="space-between">
					<FlexGridArea padding="0.4rem" margin="0 0 0.4rem 0">
						<IconImage src={timeIcon} margin="4px 0.5rem" /> {time}
					</FlexGridArea>
				</FlexGridArea>
			</Grid>
			<Paragraph>
				<Button text="View Recipe" type="block" />
			</Paragraph>
		</CardWrapper>
	);
};
export default Card;
