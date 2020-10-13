//import react into the bundle
import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function SimpleCounter(props) {
	return (
		<div className="container">
			<div className="bigCounter">
				<div className="Calendar">
					<i className="far fa-clock" />
				</div>
				<div className="Four">{props.digitFour % 10}</div>
				<div className="Three">{props.digitThree % 10}</div>
				<div className="Two">{props.digitTwo % 10}</div>
				<div className="One">{props.digitOne % 10}</div>
			</div>
		</div>
	);
}
SimpleCounter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counter = 0;
setInterval(function(_prop) {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
