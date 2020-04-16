import React, { Component } from 'react';
import MemoryCard from '../MemoryCard';
import images from "../../images.json";
import "./MainGameContainer.css";
var i = 0;
class MainGameContainer extends Component {
	state = {
		images,
		message: "Learn one Cyber Security Concept and Click on it!",
		score: 0,
		topScore: 0
	};


	handleClick = (id, clicked) => {
		const imageOrder = this.state.images;
		if (clicked) {
				imageOrder.forEach((image, index) => {
					imageOrder[index].clicked = false;
				});
				return this.setState({
					image: imageOrder.sort(() => Math.random() - 0.5),
					message: "Naah! You have work hard to be fully secured",
					score: 0
				})
			}

		else {
			if (this.state.score === 15) {
				return this.setState({
					image: imageOrder.sort(() => Math.random() - 0.5),
					message: "You Won! You are fully secure. To Play again, Click on New Game Button.",
					score: 16,
					topScore: 16,
				})
			}
			imageOrder.forEach((image, index) => {
				if (id === image.id) {
					imageOrder[index].clicked = true;
					i++;
					console.log(i);
				}
			});

			const { topScore, score } = this.state;
			const newScore = score + 1;
			const newTopScore = newScore > topScore ? newScore : topScore;

			return this.setState({
				image: imageOrder.sort(() => Math.random() - 0.5),
				message: "You got more secured!",
				score: newScore,
				topScore: newTopScore,
			})
		}
	};

	render() {
		return (
			<div className="container-fluid mainCardContainer">
				<div className="gameMessage text-center">
					<p>{this.state.message}</p>
				</div>
				<div className="gameScores text-center">
					<p>Score: {this.state.score} | Top Score: {this.state.topScore}</p>
				</div>
				<div className="container">

					<div className="row">
						{this.state.images.map(image => (
							<MemoryCard
								key={image.id}
								id={image.id}
								name={image.name}
								clicked={image.clicked}
								image={image.image}
								handleClick={this.handleClick}
							/>
						))}
					</div>

				</div>
			</div>
		);
	}
};

export default MainGameContainer;