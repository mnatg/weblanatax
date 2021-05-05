// React
import React from 'react'
import {
  View,
  Image,
  ScrollView,
  Text,
  StyleSheet
} from 'react-native'
// Styles
import {
  Layout,
  Images,
  Fonts,
  FontSize,
  dimensions
} from '@/Theme'

const Slider = () => {
  return (
    <ScrollView
      horizontal={true}
      scrollEventThrottle={FontSize.regular}>
      <View style={Layout.fullWidth}>
        <View style={styles.sliderHeader}>
          <View style={styles.height}>
            <Image
              source={Images.rocker}
              resizeMode={'contain'} />
          </View>
          <Text style={[Fonts.titleLarge, Fonts.textLight]}>
            Lleva tus impuestos al siguiente nivel.
          </Text>
          <Text style={[Fonts.textLight, Fonts.textRegular]}>
            Simple, Fácil y Seguro
          </Text>
        </View>
        <View style={styles.sliderBody}>
          <View style={styles.height}>
            <Image
              source={Images.rocker}
              resizeMode={'contain'} />
          </View>
          <Text style={[Fonts.titleLarge, Fonts.textLight]}>
            La app de los taxes para latinos
        </Text>
          <Text style={[Fonts.textLight, Fonts.textRegular]}>
            Con más de 20 años en experiencia sirviendo a nuestras comunidades.
        </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  sliderHeader: {
    width: '50%',
    height: '100%',
    position: 'relative'
  },
  height: { height: '40%' },
  sliderBody: {
    width: '45%',
    height: '100%',
    position: 'absolute',
    left: dimensions.height * 0.58
  }
})

export default Slider
