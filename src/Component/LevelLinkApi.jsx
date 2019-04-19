import React, { Component } from "react";
import Axios from "axios";
import GetRandomPosition from "./AlgoRandomPosition";

class LevelLinkApi extends Component {
	constructor(props) {
		super(props);
		this.state = {
			imgEgg: [],
			isLoading: false,
			isError: false,
		};
	}

	componentDidMount() {
		this.setState({ isLoading: true });
		Axios.get("http://easteregg.wildcodeschool.fr/api/eggs/random")
			.then(res => {
				this.setState({ imgEgg: res.data, isLoading: false });
			})
			.catch(() => this.setState({ isError: true, isLoading: false }));
	}
	render() {
		const { imgEgg, isError, isLoading } = this.state;
		if (isError) {
			return "TOO BAD ! TRY AGAIN...";
		}
		if (isLoading) {
			return "Loading...";
		}
		return (
			<div>
				<GetRandomPosition {...imgEgg} width='100px' height='100px' />
			</div>
		);
	}
}

export default LevelLinkApi;