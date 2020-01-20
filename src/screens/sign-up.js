import React from 'react';
import {View, SafeAreaView, Text, StyleSheet, Dimensions} from 'react-native';
import {Header1, Body1} from '../components/typography';
import Button from '../components/button';
import SignupForm from '../components/forms/sign-up-form';

const device =  Dimensions.get(
  'window'
);

const SignUpScreen = props => (
  <>
    <View style={styles.banner}></View>
    <View style={styles.container}>
        <View style={styles.contentWrapper}>
          <SignupForm />
        </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'transparent',
    zIndex: 4,
  },
  banner: {
    width: 1000,
    height: 1000,
    backgroundColor: '#e7ba31',
    padding: 20,
    position: 'absolute',
    bottom: 280,
    left: -300,
    borderRadius: 500,
    zIndex: 1,
  },
  contentWrapper: {
    width: device.width - 60,
    height: 500,
    backgroundColor: 'white',
    elevation: 3,
    position: 'absolute',
    zIndex: 4,
    bottom: 120,
    left: 30,
    // display: 'flex',
    // margin: 30,
    padding: 20,
    borderRadius: 5
  },
  contentText: {
    marginBottom: 30,
    paddingHorizontal: 20
  }
});

export default SignUpScreen;
