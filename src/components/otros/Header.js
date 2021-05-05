// React
import React from 'react'
import {
  View,
  Text,
  ImageBackground
} from 'react-native'
// Styles
import {
  Layout,
  Images,
  Common,
  Fonts
} from '@/Theme'

const Header = ({ styles, title, subTitle }) => (
  <ImageBackground
    style={[Layout.fullWidth]}
    source={Images.plansBg}>
    <View style={[styles, Common.header]}>
      <Text style={[{ width: '70%' }, Fonts.titleLarge, Fonts.textLight]}>
        {title}
      </Text>
      <Text style={[{ width: '90%' }, Fonts.textLight, Fonts.textRegular]}>
        {subTitle}
      </Text>
    </View>
  </ImageBackground >
)

export default Header