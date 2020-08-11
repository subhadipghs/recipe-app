import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import Layout from "../../components/UI/Layout/Layout";
import Searchbar from "../../components/Searchbar/Searchbar";
import Category from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import Error from "../../components/Error/Error";
import Loader from "../../components/Loader/Loader";
import { fetchRecipeApi } from "../../redux/actions/recipe";
import { bindActionCreators } from "redux";

const Flex = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 1rem;
	margin-top: 1rem;
	justify-content: ${(props) => (props.justify ? props.justify : "center")};
	align-items: ${(props) => props.align || "center"};
`;

class Home extends React.PureComponent {
	render() {
		const { data, loading, error, count, fetchDataFromApi } = this.props;
		console.log("in parent", this.props);
		return (
			<Layout>
				<Searchbar
					name="searchbar"
					placeholder="Search your favourite recipe"
				/>
				<Flex justify="center" align="flex-start">
					{count > 0 && data.length > 0 && <Category text="Results" />}
					{loading === true ? (
						<Loader />
					) : (
						<React.Fragment>
							{data &&
								data.length > 0 &&
								data.map(({ recipe }, index) => (
									<Card
										key={index}
										title={recipe.label}
										imagesrc={recipe.image}
										toptext={recipe.healthLabels[0]}
										time={recipe.totalTime}
									/>
								))}
							{count === 0 ? (
								<Error message="Sorry Nothing found" />
							) : (
								<React.Fragment></React.Fragment>
							)}
							{error && <Error message={error} />}
						</React.Fragment>
					)}
				</Flex>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => {
	// const { data, loading, error } = state.recipe;
	return {
		all: state,
		data: state.recipe.data.hits,
		loading: state.recipe.loading,
		error: state.recipe.error,
		count: state.recipe.data.count,
	};
};

// const mapDispatchToProps = (dispatch) => bindActionCreators({
// 	fetchDataFromApi: (query) => fetchRecipeApi(query)
// }, dispatch)

export default connect(mapStateToProps, null)(Home);
