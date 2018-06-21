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
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {};
export default class App extends Component<Props> {
  render() {
    let copy = <Icon name="copy" size={24} color="#FFFFFF" family={"FontAwesome"} />;

    return <View style={styles.container}>
        <TouchableOpacity onPress={() => {
            RNToasty.Normal({ title: "Message" });
          }}>
          <Text>{"Normal"}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            RNToasty.Info({ title: "Message" });
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
        <TouchableOpacity onPress={() => {
          RNToasty.Show({ title: "Message", titleSize: 50, titleColor: '#555555', withIcon: true, duration: 1, tintColor: '#000000', icon: copy });
        }}>
          <Text>{'Custom'}</Text>
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
