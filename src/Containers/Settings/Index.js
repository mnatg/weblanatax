// React
import React from 'react'
import {
  View,
  Text,
  Image,
  FlatList,
  ImageBackground,
  StyleSheet
} from 'react-native'
import { PixelRatio, Platform } from 'react-native'
// Redux
import { useDispatch } from 'react-redux'
// Auth
import { onLogout } from '@/Store/actions/Auth'
// Styles
import {
  Images,
  Colors,
  FontSize,
  MetricsSizes,
  MetricsSizesW,
  dimensions,
  sizeResponsive
} from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsContainer = ({ navigation }) => {
  const dispatch = useDispatch()
  return (
    <View>
      <ImageBackground source={Images.squareBg} style={styles.backgroundSettings}>
        <View >
          <Image source={Images.logoWhite}
            style={styles.logoWhite} />
          <Image source={Images.rocker}
            style={styles.rocker} />
        </View>
      </ImageBackground>
      <View style={styles.listOptions}>
        <FlatList
          data={[
            { key: "2", label: 'Salir', action: () => dispatch(onLogout()), logo: 'log-out-outline' }
          ]}
          renderItem={({ key, item }) =>
            <View key={key} >
              <Text style={styles.exit} onPress={() => item.action()}>
                <Icon
                  name={item.logo}
                  size={MetricsSizes.regularMoreLarge}
                  color={Colors.textGray} />
           &ensp;&ensp;{item.label}
              </Text>
            </View>
          }
        />
      </View>
    </View>
  )
}
const heighDimension = dimensions.height * PixelRatio.get();
const styles = StyleSheet.create({
  backgroundSettings: {
    width: dimensions.width,
    height: Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.9 :
    Platform.OS === 'android' && heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 1:
    Platform.OS === 'android' && heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 1.08 :
    Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :
      Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.01:
        Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1.06:
          Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.05:
            Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1.07:
              heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.95 :
                heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 0.95 :
                  heighDimension > 2200 && heighDimension < 2401 ? dimensions.height * sizeResponsive * 1.05 :
                    heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.93 :
                      heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.08 :
                        dimensions.height * sizeResponsive * 1.1,
  },
  rocker: {
    position: 'relative',
    left: dimensions.width * 0.6,
    height: dimensions.height * 0.3,
    width: dimensions.width * 0.3,
    bottom: dimensions.height * 0.35,
    resizeMode: 'contain',
  },
  logoWhite: {
    left: dimensions.width * 0.1,
    height: dimensions.height * 0.3,
    width: dimensions.width * 0.3,
    bottom: dimensions.height * 0.05,
    resizeMode: 'contain',
  },
  listOptions: {
    width: dimensions.width,
    position:'absolute',
    top: dimensions.height * 0.25,
    alignContent: 'flex-end',
    height: dimensions.height * 0.09,
  },
  exit: {
    fontSize: FontSize.regular,
    color: Colors.textGray,
    borderBottomWidth: MetricsSizesW.tinyW * 0.1,
    padding: MetricsSizes.regularLarge,
    borderBottomColor: Colors.textGray,
    fontWeight: 'bold',
    textAlign: 'left',
    bottom: '35%'
  }
});


export default SettingsContainer
