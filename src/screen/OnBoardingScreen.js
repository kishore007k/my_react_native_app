import React from 'react';
import {Dimensions, Image, StyleSheet} from 'react-native';
import OnBoarding from 'react-native-onboarding-swiper';

const {width, height} = Dimensions.get('screen');

const OnBoardingScreen = ({navigation}) => (
  <OnBoarding
    onSkip={() => navigation.replace('Auth')}
    onDone={() => navigation.replace('Auth')}
    pages={[
      {
        backgroundColor: '#00BFA6',
        image: (
          <Image
            source={require('../assets/images/img1.png')}
            style={styles.imageStyle}
          />
        ),
        title: 'Connect To the World',
        subtitle: 'A New Way To connect with the World',
      },
      {
        backgroundColor: '#6C63FF',
        image: (
          <Image
            source={require('../assets/images/img2.png')}
            style={styles.imageStyle}
          />
        ),
        title: 'Share Your Favorites',
        subtitle: 'Share your thoughts with similar kinds of people',
      },
      {
        backgroundColor: '#F50057',
        image: (
          <Image
            source={require('../assets/images/img3.png')}
            style={styles.imageStyle}
          />
        ),
        title: 'Best Prize',
        subtitle: 'Objective AI-based pricing',
      },
      {
        backgroundColor: '#F9A826',
        image: (
          <Image
            source={require('../assets/images/img4.png')}
            style={styles.imageStyle}
          />
        ),
        title: 'Developers Friendly',
        subtitle: 'Develope any kinds of stuffs',
      },
      {
        backgroundColor: '#F50057',
        image: (
          <Image
            source={require('../assets/images/img5.png')}
            style={styles.imageStyle}
          />
        ),
        title: 'Coders & Developers league',
        subtitle: 'A New way to develope a product',
      },
    ]}
  />
);
export default OnBoardingScreen;

const styles = StyleSheet.create({
  imageStyle: {
    width: width * 0.8,
    height: height * 0.4,
    resizeMode: 'contain',
  },
});
