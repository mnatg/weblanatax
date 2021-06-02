// React
import React from 'react'
import { View, Image } from 'react-native'
// Styles
import {
  Layout,
  Images,
  MetricsSizes,
  MetricsSizesW
} from '@/Theme'

const Brand = ({ height = MetricsSizes.maxLarge * 4, width = MetricsSizesW.maxLargeW * 4, mode = 'contain' }) => (
  <View style={{ height, width }}>
    <Image style={Layout.fullSize} source={Images.lana_icon} resizeMode={mode} />
  </View>
)

export default Brand
