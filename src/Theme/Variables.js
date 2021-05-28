/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */
 
export const Colors = {
  gray:         '#4a4a4a',
  grayLight:    '#f7f7f7',
  lightGray:    '#C7C7C7',
  grayDark:     '#5E5E5E',
  shadowGray:   '#E9E9E9',
  primary:      '#F4C022',
  secundary:    '#4800fb',
  textGray:     '#9b9b9b',
  green:        '#0da935',
  yellow:       '#f5bf21',
  aquamarine:   '#009245',
  blue:         '#1b18ef',
  textBlue:     '#3c00f9',
  blueDark:     '#131f84',
  blueGray:     '#4a5568',
  white:        '#f5f5f5',
  whiteShadow:  '#f3f3f3',
  red:          '#ea0300',
  skin:         '#DD6B55',
}

/**
 * Metrics Sizes
 */

 const dimensions = {
  width: 2000,
  height: 2000
};

const tiny = dimensions.height * 0.007 // 5
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const regularLarge = small * 2 // 20
const regularMoreLarge = tiny * 5 // 25
const large = regular * 2 // 30
const maxLarge = regularLarge * 2.5 // 50
export const MetricsSizes = {
  tiny,
  small,
  regular,
  regularLarge,
  regularMoreLarge,
  large,
  maxLarge
}
const tinyW = dimensions.width * 0.01 // 5
const smallW = tinyW * 2 // 10
const regularW = tinyW * 3 // 15
const regularLargeW = smallW * 2 // 20
const regularMoreLargeW = tinyW * 5 // 25
const largeW = regularW * 2 // 30
const maxLargeW = regularLargeW * 2.5 // 50
export const MetricsSizesW = {
  tinyW,
  smallW,
  regularW,
  regularLargeW,
  regularMoreLargeW,
  largeW,
  maxLargeW
}
