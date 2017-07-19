/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import branch from 'react-native-branch';

export default class AwesomeProject extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Video source={{uri: "https://searchads.apple.com/video/intro/1553_app_searchads_vid1_intro-cc-us-20170420_1280x720h.mp4", mainVer: 1, patchVer: 0}} // Looks for .mp4 file (background.mp4) in the given expansion version.
            rate={1.0}                   // 0 is paused, 1 is normal.
            volume={1.0}                 // 0 is muted, 1 is normal.
            muted={false}                // Mutes the audio entirely.
            paused={false}               // Pauses playback entirely.
            resizeMode="cover"           // Fill the whole screen at aspect ratio.
            repeat={true}                // Repeat forever.
            style={styles.backgroundVideo} />

        <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>
          <Text style={{ color: 'white', backgroundColor: 'transparent', fontSize: 10}}>Gradient</Text>
        </LinearGradient>
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
    linearGradient: {
    position: 'absolute',
    bottom: 20,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    height: 30,
    width: 200,
    alignItems: 'center',justifyContent: 'center'
  },
    backgroundVideo: {
    position: 'absolute',
    top: 50,
    left: 50,
    bottom: 50,
    right: 50,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
