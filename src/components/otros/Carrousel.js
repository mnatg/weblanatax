// React
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Dimensions
} from "react-native"
// Components
import Carousel, { Pagination } from 'react-native-snap-carousel'
// Styles
import { MetricsSizes, MetricsSizesW, dimensions, FontSize } from '@/Theme';

export const SLIDER_WIDTH = Dimensions.get('window').width + 80
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8)

const CarrouselRenderItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    width: ITEM_WIDTH,
  },
  header: {
    color: "white",
    fontSize: FontSize.extraLarge,
    fontWeight: "bold",
    paddingLeft: MetricsSizesW.regularLargeW,
    lineHeight:FontSize.extraLarge,
  },
  body: {
    color: "white",
    fontSize: FontSize.regular,
    paddingLeft: MetricsSizesW.regularLargeW,
    paddingRight: MetricsSizesW.regularLargeW
  }
})

const CarouselCards = (data) => {
  const isCarousel = React.useRef(null);
  const [index, setIndex] = React.useState(0);
  return (
    <View>
      <Carousel
        layout="default"
        layoutCardOffset={9}
        ref={isCarousel}
        data={data.data}
        renderItem={CarrouselRenderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        onSnapToItem={(index) => setIndex(index)}
        useScrollView={true}
      />
      <Pagination
        dotsLength={data.data.length}
        activeDotIndex={index}
        carouselRef={isCarousel}
        dotStyle={{
          width: MetricsSizesW.smallW,
          height: MetricsSizesW.smallW,
          borderRadius: 100,
          marginHorizontal: 0,
          backgroundColor: "white"
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        tappableDots={true}
      />
    </View>
  )
}

export default CarouselCards;