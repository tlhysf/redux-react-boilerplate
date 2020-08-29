import React, {Component} from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Posts from "./components/Posts";
import Postform from "./components/Postform";

import store from "./store";

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div className="App">
					<Postform />
					<hr />
					<br />
					<Posts />
				</div>
			</Provider>
		);
	}
}

export default App;
