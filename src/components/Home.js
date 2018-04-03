import React, { Component } from 'react';
import { View, Text, ListView } from 'react-native';
import _ from 'lodash';
import { connect } from 'react-redux';
import { videosFetch } from '../actions/VideoActions';
import VideoItem from './VideoItem';
import { Spinner, Button } from './common';

class Home extends Component {
  state = { loading: true }

  //let url = "https://www.visumic.com/api/videos/?page=2";
  componentWillMount() {
    console.log(this.props.arrayOfVideos)
    this.props.videosFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
    this.setState({ loading: false });
    console.log(nextProps)
  //  console.log(this.props.nextUrl);
  }

  onFetchNextVideos() {
    console.log('Hello Worlddd')
    this.props.videosFetch(this.props.nextUrl);
  }

  createDataSource({ arrayOfVideos }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(arrayOfVideos);
    console.log(this.props.videos);
    //console.log(this.props.nextUrl);

  }

  renderRow(video) {
  //  console.log(video.title);
    return <VideoItem video={video} />;
  }

  renderLoad() {
    return (
      <Spinner size='large' />
    );
  }



  render() {
    //console.log(this.props);
    console.log(this.state.loading);
    if (this.state.loading) {
      return this.renderLoad();
    }
    return (
      <View>
      <Button onPress={() => this.onFetchNextVideos()}>Click</Button>
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />

      </View>


    );
  }
}


const mapStateToProps = state => {
  const nextUrl = state.videos.list.next;
  const some = state.videos.arrayOfVideos
  console.log(state.videos)
  const videos = _.map(state.videos.list.results, (val, id) => {
    state.videos.arrayOfVideos.push({ ...val, id })
    return { ...val, id };
  });
  const arrayOfVideos = state.videos.arrayOfVideos
  console.log(videos)
  //console.log(state.videos.next)
  return { videos, nextUrl, arrayOfVideos };
};

export default connect(mapStateToProps, { videosFetch })(Home);
