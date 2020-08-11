import React, { useState } from 'react';
import styled from 'styled-components';
import iconFeatureSearch from '../../assets/Icons/feather-search.png';
import InputBox from '../UI/Input/Input';
import { connect } from 'react-redux';
import { fetchRecipeApi } from "../../redux/actions/recipe";
import { bindActionCreators } from "redux";

const FormWrapper = styled.form`
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


const Searchbar = (props) => {

	const [query, setQuery] = useState("");

	const search = (event) => {
		event.preventDefault();
		console.log(query);
		props.fetchDataFromApi(query);
	}
	return (
		<FormWrapper onSubmit={(e) => search(e)}>
			<IconWrapper circle>
				<Icon
					src={iconFeatureSearch}
				/>
			</IconWrapper>
			<InputBox
				name={props.name}
				id={props.id}
				placeholder={props.placeholder}
				contain
				onChange={(e) => setQuery(e.target.value)}
			/>
		</FormWrapper>
	)
}


const mapDispatchToProps = (dispatch) => bindActionCreators({
	fetchDataFromApi: (query) => fetchRecipeApi(query)
}, dispatch)


export default connect(null, mapDispatchToProps)(Searchbar);