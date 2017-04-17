/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
 nanoappsDemoRnApps

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class nanoappsDemoRnApps extends Component {
	 constructor(props) {
		super(props);
		this.state = {
			text: ""
		}
		this.handleClick = this.handleClick.bind(this);

	}
	handleClick(event) {
    var harrypotter = ["emmawatson", "ruper grint", "daniel radicliffe", "nanoapps"];
    var rand = harrypotter[Math.floor(Math.random() * harrypotter.length)];
    this.setState({text: rand});
  }
  render() {

    return (
      <View style={styles.container}>
         <button className="" onClick={this.handleClick}>
        	Click me to change text 
     	</button>
        <p className="App-intro">
        {this.state.text}
        </p>
        <Text style={styles.welcome}>
          This is going to be a demo app
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('nanoappsDemoRnApps', () => nanoappsDemoRnApps);
