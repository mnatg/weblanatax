//React
import React, { useEffect } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  Linking
} from 'react-native'
//Custom Components
import { BgContainer, Carrousel } from '@/Components'
// Styles
import {
  Images,
  Common,
  dimensions,
} from '@/Theme'
//Check app version
import VersionCheck from 'react-native-version-check';
import reduxSaga from 'redux-saga';

const WelcomeContainer = ({ navigation }) => {
  const carrousel_text = [
    {
      title: "Máximo reembolso - Garantizado",
      body: "Tu seguridad es nuestra prioridad."
    },
    {
      title: "La app de los taxes para los latinos",
      body: "Simple, rápido y seguro."
    },
    {
      title: "Estar al día con tus taxes nunca había sido tan simple",
      body: "Habla con un experto en tu idioma."
    }
  ];

  useEffect(() => {
    checkUpdate();
  }, []);

  const checkUpdate = async () => {
    VersionCheck.needUpdate()
      .then(async res => {
        if (res.isNeeded) {
          Alert.alert(
            "Actualizacion app",
            "Su aplicacion necesita ser actualizada",
            [
              {
                text: "OK",
                onPress: () => Linking.openURL(res.storeUrl),
              }
            ],
            { cancelable: false }
          );
        }
      });
  }

  return (
    
      <BgContainer url={Images.greenBg} style={styles.bgGreen}>
        <View style={styles.flex_content}>
        <View style={styles.flex_header}>
          <Image style={styles.rockerWelcome} source={Images.rocker} />
        </View>
        <View style={styles.carrousel}>
          <Carrousel style={Common.carrouselText} data={carrousel_text}></Carrousel>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={() => navigation.navigate('Services')}>
            <Image source={Images.iAmNewBtn} style={styles.registerBtn} />
          </TouchableOpacity>
          <TouchableOpacity style={Common.btns} onPress={() => navigation.navigate('SignIn')}>
            <Text style={Common.btnsText}>
              Ya tengo una cuenta
          </Text>
          </TouchableOpacity>
        </View>
        </View>
      </BgContainer >
    
  )
}
export default WelcomeContainer

const styles = StyleSheet.create({
  rockerWelcome: {
    height: dimensions.height * 0.3 ,
    resizeMode: 'contain',
    marginLeft: dimensions.width * 0.2,
    marginTop:dimensions.height * 0.05
  },
  registerBtn: {
    height: dimensions.height * 0.1 ,
    width: dimensions.width * 0.6 ,
    resizeMode: 'contain'
  },
  bgGreen: {
    height: dimensions.height ,
    width: dimensions.width,
  },
  
  flex_content: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
    
  },
  flex_header:{
    width:dimensions.width,
    height:dimensions.height  * 0.4,
    alignItems:'center'
  }, 
  carrousel: {
    height:dimensions.height  * 0.4,
    alignItems:'center'
  },
  buttons: {
    height:dimensions.height  * 0.2,
    alignItems:'center'
  },
});