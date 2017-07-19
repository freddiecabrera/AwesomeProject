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
  View,
  ListView
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import branch from 'react-native-branch';
import Card from './Card';

const data = [
  {
    _id: '1',
  },
    {
    _id: '2',
  },
    {
    _id: '3',
  },
    {
    _id: '4',
  },
    {
    _id: '5',
  },
    {
    _id: '6',
  },
    {
    _id: '7',
  },
    {
    _id: '8',
  }
]

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={(rowData) => <Card id={rowData._id} />}
        onChangeVisibleRows={(visibleRows, changedRows) => {
            const visibleRowNumbers = Object.keys(visibleRows.s1).map((row) => parseInt(row));
            console.log('DATA SOURCE', this.state.dataSource);
            console.log('VISIBLE ROWS', visibleRows);
            console.log('VISIBLE ROW NUMBERS', visibleRowNumbers);
            console.log('CHANGED ROWS', changedRows);
        }}
      >
      </ListView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
