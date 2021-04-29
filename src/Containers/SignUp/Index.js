// React
import React, { useEffect, useState } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import { PixelRatio, Platform } from 'react-native'
// Redux
import { useDispatch } from 'react-redux'
// Components
import { Loading } from '@/Components'
import Toast from 'react-native-simple-toast';
// Auth
import { onSignUp } from '@/Store/actions/Auth'
import { GoogleSignin } from '@react-native-community/google-signin';
import { onFacebookSignUp, onGoogleSignUp } from '../../Store/actions/Auth';
// Styles
import {
  Layout,
  Images,
  Common,
  Colors,
  FontSize,
  MetricsSizes,
  dimensions,
  sizeResponsive
} from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons';

const SignUpContainer = ({ navigation }) => {

  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secure, setSecure] = useState(true);
  const [fullName, setfullName] = useState('');
  const [keyboard, setKeyboard] = useState(false);
  const [loading, setLoading] = useState(false);

  GoogleSignin.configure({
    webClientId: '1099491225094-mltd5mcaeeg0l3f0e0t4an291svb2fo3.apps.googleusercontent.com',
  });

  const handleForm = async () => {
    setLoading(true);
    if (email == '' || password == '' || fullName == '') {
      Toast.show("Todos los campos son requridos");
      setLoading(false);
      return
    } else if ( password.length < 6 ) {
      Toast.show("La contraseña debe tener 6 caracteres minimo");
      setLoading(false);
      return
    }
    try {
      await dispatch(onSignUp({
        email: email,
        password: password,
        fullName: fullName
      }));
      setTimeout(() => {
        setLoading(false)
      }, 5000);
    } catch (error) {
      setLoading(false);
    }
  }

  const signWithGoogle = async () => {
    setLoading(true);
    try {
      await dispatch(onGoogleSignUp({
        strategy: "email"
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const signWithFacebook = async () => {
    setLoading(true);
    try {
      await dispatch(onFacebookSignUp({
        strategy: "email"
      }));
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );
  }, []);


  const keyboardDidShow = () => {
    setKeyboard(true)
  };

  const keyboardDidHide = () => {
    setKeyboard(false)
  };

  Keyboard.addListener(
    "keyboardDidShow",
    keyboardDidShow
  );
  Keyboard.addListener(
    "keyboardDidHide",
    keyboardDidHide
  );

  return (

    <KeyboardAvoidingView>
      <ImageBackground source={!keyboard && Images.greenHeaderLines} style={styles.backgroundImage}>
        <Loading show={loading} />
        <View style={styles.flex_content}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <>
              {
                !keyboard ?
                  <View style={styles.flex_header}>
                    <Text style={styles.header}>
                      Hacer tus taxes nunca
                      {"\n"}
                      había sido tan rápido
                    </Text>
                    <Text style={styles.body}>
                      Crea tu cuenta hoy
                    </Text>
                    <Image style={styles.image} source={Images.rockerSmall2} />
                  </View>
                  : null
              }
              <View style={styles.flex_form}>
              <View style={[styles.form, keyboard && { marginTop: dimensions.height * 0.02 }]}>
                <Text style={styles.title}>Registra tus datos para iniciar</Text>
                  <View style={[Layout.rowCenter, { marginLeft: '-2%' }]}>
                    <Icon style={styles.inputIcon} name="person" size={MetricsSizes.regularLarge} color={Colors.gray} />
                    <TextInput
                      style={[Common.textInput]}
                      placeholder="Nombres"
                      value={fullName}
                      onChangeText={fullName => setfullName(fullName)}
                    />
                  </View>
                  <View style={[Layout.rowCenter, { marginLeft: '-2%' }]}>
                    <Icon style={styles.inputIcon} name="mail" size={MetricsSizes.regularLarge} color={Colors.gray} />
                    <TextInput
                      style={[Common.textInput]}
                      placeholder="Correo electronico"
                      value={email}
                      onChangeText={userEmail => setEmail(userEmail)}
                    />
                  </View>
                  <View style={[Layout.rowCenter]}>
                    <Icon style={styles.inputIcon} name="key" size={MetricsSizes.regularLarge} color={Colors.gray} />
                    <TextInput
                      style={[Common.textInput]}
                      secureTextEntry={secure}
                      placeholder="Contraseña"
                      value={password}
                      onChangeText={userPassword => setPassword(userPassword)}
                    />
                    <Icon style={styles.eyeIcon} name={secure ? "eye" : 'eye-off'} size={MetricsSizes.regularLarge} color={Colors.gray} onPress={() => setSecure(!secure)} />
                  </View>
              </View>
              </View>
              <View style={styles.flex_container}>
                <TouchableOpacity onPress={() => handleForm()}>
                  <Image source={Images.registryBtn} style={styles.btn} />
                </TouchableOpacity>
            
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text
                  style={{
                    textDecorationLine: 'underline',
                    fontSize: FontSize.small,

                  }}
                >
                  Ya tengo una cuenta
              </Text>
              </TouchableOpacity>
              </View>
            </>
            
          </TouchableWithoutFeedback>
          
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  )
}

export default SignUpContainer
const heighDimension = dimensions.height * PixelRatio.get();

const styles = StyleSheet.create({
  header: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    color: 'white',
    marginTop: dimensions.height * 0.05,
    marginLeft: dimensions.width * 0.05
  },
  body: {
    color: "white",
    fontSize: FontSize.regular,
    marginLeft: dimensions.width * 0.05
  },
  image: {
    position: "absolute",
    marginLeft: dimensions.width * 0.6 * sizeResponsive,
    width: dimensions.width * 0.45,
    height: dimensions.height * 0.3,
    resizeMode: 'contain',
  },
  title: {
    fontSize: FontSize.regular,
    fontWeight: 'bold',
    color: Colors.gray
  },
  btn: {
    width: dimensions.width * 0.7,
    resizeMode: 'contain',
  },
  backgroundImage: {
    width: dimensions.width,
    height:
    Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.95 :
      Platform.OS === 'android' && heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 1:
      Platform.OS === 'android' && heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 1.08 :
      Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :
        Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.01:
          Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1.06:
            Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1401 ? dimensions.height * sizeResponsive :
              Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1.07:
                heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.95 :
                  heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 0.95 :
                    heighDimension > 2200 && heighDimension < 2401 ? dimensions.height * sizeResponsive * 1.05 :
                      heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.93 :
                        heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.08 :
                          dimensions.height * sizeResponsive * 1.1,
    alignItems: 'center',
    alignContent: 'center',
  },
  form: {
    width: dimensions.width * 0.9,
    marginLeft:dimensions.width * 0.02
  },
  inputIcon: {
    position: 'relative',
    left: dimensions.width * 0.12
  },
  eyeIcon: {
    position: 'relative',
    right: dimensions.width * 0.12
  },
  flex_content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  flex_header: {
    width: dimensions.width,
    height: dimensions.height * 0.25,
  },
  flex_form: {
    width: dimensions.width ,
    height: dimensions.height * 0.55,
  },
  flex_container: {
    alignItems: 'center',
    height:dimensions.height * 0.2
  },
})