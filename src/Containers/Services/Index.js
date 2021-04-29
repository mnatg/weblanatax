// React
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native'
import { PixelRatio } from 'react-native'
// Components
import { IconList } from '@/Components'
// Styles
import {
  Images,
  dimensions,
  sizeResponsive,
  Common,
  FontSize
} from '@/Theme'

const ServicesContainer = ({ navigation }) => {
  return (
    <ImageBackground source={Images.greenHeader}
      style={styles.bgHeaderGreen} >
      <View style={styles.flexContent}>
        <View style={styles.flex_header}>
          <Text style={styles.header}>
            Llevándote
        {"\n"}
          a otro nivel
        </Text>
          <Text style={styles.body}>
            siempre contigo de la mano.
        </Text>
          <Image style={styles.image} source={Images.rockerSmall} />
        </View>
        <View style={styles.list}>
          <IconList />
          <TouchableOpacity style={styles.btnServices} onPress={() => navigation.navigate('Plans')}>
            <Image source={Images.knowOurPlansBtn} style={[styles.btn]} />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
const heighDimension = dimensions.height * PixelRatio.get();
const styles = StyleSheet.create({
  header: {
    fontSize: FontSize.large * 1.25,
    fontWeight: 'bold',
    color: 'white',
    marginTop: dimensions.height * 0.06,
    marginLeft: dimensions.width * 0.05
  },
  body: {
    color: "white",
    fontSize: FontSize.small,
    marginLeft: dimensions.width * 0.05
  },
  image: {
    position: "absolute",
    marginLeft: dimensions.width * 0.55 * sizeResponsive,
    width:dimensions.width * 0.5,
    height:dimensions.height * 0.33,
    resizeMode: 'contain'
  },
  btn: {
    marginTop: dimensions.height * 0.02,  
    width: dimensions.width * 0.75,
    height: dimensions.height * 0.05,
    resizeMode: 'contain'
  },

  list: {
    alignContent: 'center',
    alignItems: 'center',
    height:dimensions.height  * 0.55,
    width: dimensions.width
  },
  bgHeaderGreen: {
    height:
    Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.91 :
      Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.94 :
        Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2200 ? dimensions.height * sizeResponsive * 0.95 :
        Platform.OS === 'android' && heighDimension > 1800 && heighDimension < 2000 ? dimensions.height * sizeResponsive * 0.9 :
          Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1 :
            Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 0.9 :
              Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1.02 :
              Platform.OS === 'android' ? dimensions.height * sizeResponsive * 1.02 :
                heighDimension > 2400 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.9 :
                  heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive :
                    heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.9 :
                      heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive :
                        dimensions.height * sizeResponsive * 1.12,
    width: dimensions.width
  },
  flex_content: {
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
    
  },
  flex_header:{
    width:dimensions.width,
    height:dimensions.height  * 0.35,
  }, 
})

export default ServicesContainer

