import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

class VideoItem extends Component {
  render() {
    const { title } = this.props.video;
    const { username } = this.props.video.user;
  return (
    <View>
    <Text style={{ fontSize: 24 }}>{title}</Text>
    <Text>{username}</Text>
    </View>
  );
}
}

export default VideoItem;
