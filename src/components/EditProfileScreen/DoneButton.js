import React, { Component } from 'react';
import { Text, } from 'react-native';
import { connect } from 'react-redux';
import { fetchPostInfo, performPost } from '../../actions';


class DoneButton extends Component {

  onPostPress() {
    this.props.performPost(this.props.post);
  }

  render() {
    if (!this.props.post.postText && this.props.post.upload.length === 0) {
      return (
      <Text 
      style={{ flex: 1, 
      paddingRight: 16,
      paddingTop: 8, 
      alignContent: 'center',
      color: 'grey',
      fontSize: 20 }} 
      >{this.props.name}</Text>
    );
    }
    return (
      <Text 
      style={{ flex: 1, 
      paddingRight: 16,
      paddingTop: 8, 
      alignContent: 'center',
      color: 'blue',
      fontSize: 20 }} 
      onPress={this.onPostPress.bind(this)}
      >{this.props.name}</Text>
    );
  }
}

const mapStateToProps = ({ post }) => ({ post });

export default connect(mapStateToProps, { fetchPostInfo, performPost })(DoneButton);
