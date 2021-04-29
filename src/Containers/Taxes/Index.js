// React
import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Platform,
} from 'react-native'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Styles
import {
  Images,
  Colors,
  FontSize,
  MetricsSizes,
  dimensions
} from '@/Theme'
import { PixelRatio } from 'react-native'
import { sizeResponsive } from '../../Theme/Variables'

const TaxesController = ({ navigation }) => {
  const dispatch = useDispatch()
  const taxes = useSelector((state) => state.taxes.taxes)

  return (
    <ImageBackground source={Images.greenHeader}
      imageStyle={styles.bgHeaderGreen}
      style={styles.bgContainerLight}>
      <Text style={styles.title}>
        Mis impuestos
      </Text>
      <Text style={styles.textTaxes}>
        Consulta el detalle de tus impuestos aqui
      </Text>
      { taxes && taxes.length > 0 ?
        taxes.map((item, index) =>

          <TouchableOpacity
            key={item.id}
            onPress={() => navigation.navigate('Tax', { id: item.id, adviserId: item.adviserid })}
            style={styles.btn}>
            <Text style={styles.textBtn}>
              Impuesto #{item.id}
            </Text>
            <Text style={styles.adviser}>
              Consultor: {item.fullname}
            </Text>
          </TouchableOpacity>
        )
        : // OR @TODO Borrar boton
        <View style={{ padding: MetricsSizes.small }}>
          <Text >Actualmente no tiene impuestos registrados </Text>
        </View>
      }
    </ImageBackground>
  )
}
const heighDimension = dimensions.height * PixelRatio.get();
const styles = StyleSheet.create({
  textTaxes: {
    color: Colors.gray,
    fontWeight: 'bold',
    fontSize: FontSize.regular,
    marginTop: dimensions.height * 0.03
  },
  title: {
    fontSize: FontSize.regular * 1.625,
    letterSpacing: -0.6,
    color: 'white',
    fontWeight: 'bold',
    marginTop: dimensions.height * sizeResponsive * 0.08,
    marginBottom: dimensions.height * 0.15,
  },
  btn: {
    backgroundColor: Colors.aquamarine,
    marginTop: '3%',
    padding: '5%',
    borderRadius: 10
  },
  textBtn: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: FontSize.regular * 1.25
  },
  adviser: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontSize: FontSize.regular
  },
  bgContainerLight: {
    backgroundColor: Colors.whiteShadow,
    padding: MetricsSizes.regularLarge,
  },
  bgHeaderGreen: {
    height:
    Platform.OS === 'android' && heighDimension > 2800 ? dimensions.height * sizeResponsive * 0.85 :
    Platform.OS === 'android' && heighDimension > 2600 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.9:
    Platform.OS === 'android' && heighDimension > 2400 && heighDimension < 2600 ? dimensions.height * sizeResponsive * 0.8 :
    Platform.OS === 'android' && heighDimension > 2200 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.1 :
      Platform.OS === 'android' && heighDimension > 2000 && heighDimension < 2400 ? dimensions.height * sizeResponsive * 1.01:
        Platform.OS === 'android' && heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 1.06:
          Platform.OS === 'android' && heighDimension > 1200 && heighDimension < 1400 ? dimensions.height * sizeResponsive * 1.05:
            Platform.OS === 'android' && heighDimension > 800 && heighDimension < 1200 ? dimensions.height * sizeResponsive * 1:
                  heighDimension > 2400 && heighDimension < 2800 ? dimensions.height * sizeResponsive * 0.96 :
                    heighDimension > 1400 && heighDimension < 1800 ? dimensions.height * sizeResponsive * 0.8 :
                      dimensions.height * sizeResponsive * 0.97,
    width: dimensions.width
  }
});


export default TaxesController
