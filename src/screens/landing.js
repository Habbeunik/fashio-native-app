import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

const LandingScreen = props => (
  <>
    <View style={styles.banner}>
    </View>
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.contentWrapper} >
        <Text>i am</Text>
        </View>
      </SafeAreaView>
    </View>
  </>
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
  banner: {
    width: 1000,
    height: 1000,
    backgroundColor: '#f2f2f2',
    padding: 20,
    position: 'absolute',
    bottom: 240,
    left: -300,
    borderRadius: 500,
    zIndex: 2,
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    // display: 'flex',
    justifyContent: 'flex-end',
    padding: 20
  }
});

export default LandingScreen;
