import React, {useContext, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {AuthContext} from '../components/AuthContext';

const {width, height} = Dimensions.get('screen');

const SignUpScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {signUp, signInWithGoogle} = useContext(AuthContext);

  const handleSignUp = () => {
    signUp(email, password);
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.main}>
          <Text style={styles.title}>SIGN UP</Text>
          <Image
            source={require('../assets/images/img6.png')}
            style={styles.image}
          />
        </View>
        <View>
          <View>
            <Text style={styles.inputTitle}>Email</Text>
            <TouchableOpacity style={styles.inputContainer}>
              <Image
                source={require('../assets/icon/user_red.png')}
                style={styles.icons}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="black"
                style={styles.input}
                onChangeText={text => setEmail(text)}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.inputTitle}>Password</Text>
            <TouchableOpacity style={styles.inputContainer}>
              <Image
                source={require('../assets/icon/password_red.png')}
                style={styles.icons}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="black"
                style={styles.input}
                secureTextEntry
                onChangeText={text => setPassword(text)}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.btn}
            activeOpacity={0.8}
            onPress={handleSignUp}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={styles.social}
            activeOpacity={0.8}
            onPress={() => signInWithGoogle()}>
            <Image
              source={require('../assets/icon/google.png')}
              style={styles.socialIcon}
            />
            <Text>Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.social} activeOpacity={0.8}>
            <Image
              source={require('../assets/icon/fb.png')}
              style={styles.socialIcon}
            />
            <Text>Facebook</Text>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.signUp}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Login')}>
              <Text> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    width,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdd0e0',
  },
  main: {
    width,
    alignItems: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: width * 0.8,
    height: 250,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 0,
    color: '#F50057',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: width * 0.8,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10,
    elevation: 3,
    marginVertical: 13,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: '700',
  },
  icons: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 18,
  },
  btn: {
    width: '100%',
    backgroundColor: '#F50057',
    paddingHorizontal: 10,
    borderRadius: 50,
    elevation: 3,
    alignSelf: 'center',
    marginVertical: 20,
    marginBottom: 25,
  },
  btnText: {
    fontSize: 25,
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 10,
  },
  socialContainer: {
    width,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  social: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 50,
    marginBottom: 15,
    elevation: 1,
  },
  socialIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  signUp: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
});
