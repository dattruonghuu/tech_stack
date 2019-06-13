import React, { Component} from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class LibraryList extends Component {

  renderItem({item}){
    return <ListItem library={item}/>;
  }


  render() {
    return(
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        keyExtractor={(library)=> library.id.toString()}
      />
    );
  }
}

// take global state object and map to provide as a prop to component LibraryList
const mapStateToProps = state => {
  return { libraries: state.libraries };
};

//call connect()
//return a function with a library list
export default connect(mapStateToProps)(LibraryList);