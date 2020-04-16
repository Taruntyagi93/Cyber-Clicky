import React from 'react';
import "./Jumbotron.css";

function conferenceSelect  () {
 window.location.reload(false);
  }

const Jumbotron = () => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">React Clicky Game!</h1>
    <p className="lead">Click on any image to earn points, but don't click on any more than once!</p>
    <div className="col-md-12">
			<button className="btn NewGame" onClick={conferenceSelect}>New Game</button>
		</div>
  </div>
</div>
);

export default Jumbotron;