// React
import * as React from 'react';
import { ImageBackground } from 'react-native'
// Styles
import { Layout, Common } from '@/Theme'


const BgContainer = ({
  url,
  style = null,
  children
}) => {

  const bgStyle = { backgroundColor: Common.backgroundPrimary }

  return(
    <ImageBackground
      source={url}
      style={[Layout.fill, Layout.colCenter, bgStyle]}
      imageStyle={ style ? style : Layout.backgroundSize}>
      { children }
    </ImageBackground>
  )
}

export default BgContainer
