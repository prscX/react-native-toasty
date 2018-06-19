/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { RNToasty } from 'react-native-toasty'

type Props = {};
export default class App extends Component<Props> {
  render() {
    return <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            RNToasty.Normal({ title: "Message" });
          }}>
          <Text>{"Normal"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            RNToasty.Info({ title: "Message", withIcon: false, duration: 1, tintColor: '#000000' });
          }}>
          <Text>{"Info"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          RNToasty.Success({ title: 'Message' })
        }}>
          <Text>{'Success'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          RNToasty.Warn({ title: 'Message' })
        }}>
          <Text>{'Warning'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          RNToasty.Error({ title: 'Message' })
        }}>
          <Text>{'Error'}</Text>
        </TouchableOpacity>
      </View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
