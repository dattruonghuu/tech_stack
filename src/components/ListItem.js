import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection} from './common';
// import all actions
import * as actions from '../actions';

class ListItem extends Component {

  // User Presses Library
  // Action Creator
  // Rerun Reducers
  // mapStateToProps
  // Components rerender
  // View Updates

  componentWillUpdate() {
    // Call at any point of time before components get update on screen
    // All components will be updated with animations
    LayoutAnimation.spring()
  }

  renderDescription(){
    const { library, expanded } = this.props;

    // component no longer to worry about the logic of selectedLibraryId
    // component just look at the expanded flag whether it should show description
    // or not
    if(expanded){
      return(
          <CardSection>
            <Text
                style={{flex: 1}}>
              {library.description}
            </Text>
          </CardSection>
      );
    }
  }


  render(){
    const { titleStyle} = styles;
    const { id, title} = this.props.library;
    return (
        <TouchableWithoutFeedback
            // when press, the action creator will be called
          onPress={() => this.props.selectLibrary(id)}
        >
          <View>
            <CardSection>
              <Text style={titleStyle}>
                {title}
              </Text>
            </CardSection>
            {this.renderDescription()}
          </View>
        </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

// mapStateToProps has ability to interface from app state to component level
// when state changes, mapStateToProps will rerun, pass in a new set of props
// or component which causes component to rerender
const mapStateToProps = (state, ownProps) => {
  // if state.selectedLibraryId === ownProps.library.id is true
  // expanded will be true
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded};
};


export default connect(mapStateToProps , actions)(ListItem);