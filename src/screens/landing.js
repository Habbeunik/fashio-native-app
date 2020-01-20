import React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';
import {Header1, Body1} from '../components/typography';
import Button from '../components/button';

const LandingScreen = props => {
  console.log('props',props)
  const proceedToNextScreen = () => props.navigation.navigate('AuthStack') ;

  return (
    <>
      <View style={styles.banner}></View>
      <View style={styles.container}>
        <SafeAreaView>
          <View style={styles.contentWrapper}>
            <View style={styles.contentText} >
              <Header1 align="center">brands</Header1>
              <Body1 align="center">
                Personalize your shoping experience by following your top brands
              </Body1>
            </View>
            <View>
              <Button content='get started' onPress={proceedToNextScreen} />
            </View>
          </View>
        </SafeAreaView>
      </View>
    </>
  );
}

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
    bottom: 280,
    left: -300,
    borderRadius: 500,
    zIndex: 2,
  },
  contentWrapper: {
    width: '100%',
    height: '100%',
    // display: 'flex',
    justifyContent: 'flex-end',
    padding: 30,
  },
  contentText: {
    marginBottom: 30,
    paddingHorizontal: 20
  }
});

export default LandingScreen;
