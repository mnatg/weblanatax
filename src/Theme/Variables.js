/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

/**
 * Colors
 */

 import { PixelRatio, Platform } from 'react'
 
export const Colors = {
  gray:         '#4a4a4a',
  grayLight:    '#f7f7f7',
  lightGray:    '#C7C7C7',
  grayDark:     '#5E5E5E',
  shadowGray:   '#E6E6E6',
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
// Dimensions

//import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


/*export const dimensions = {
  width: wp('100%'),
  height: hp('100%'),
};*/

export const dimensions = {
  width: 2000,
  height: 2000
};

/**
 * SizeResponsive
 */
let sizeResponsiveDis = 1;
//const heighttrue = dimensions.height * PixelRatio.get();
const heighttrue = 2800;


//if (Platform.OS === 'android') {
  if (true) {
  sizeResponsiveDis =
  heighttrue >= 2800 ? 1:
  heighttrue > 2600 && heighttrue < 2800 ? 1: //okey
    heighttrue > 2400 && heighttrue < 2600 ? 1:
      heighttrue > 2200 && heighttrue < 2400 ? 1.1://okey
        heighttrue > 2000 && heighttrue < 2200 ? 1:// okey
          heighttrue > 1800 && heighttrue < 2000 ? 1.01:
            heighttrue > 1400 && heighttrue < 1800 ? 1.02://okey
              heighttrue > 1200 && heighttrue < 1401 ? 1.03:
                  heighttrue > 800 && heighttrue < 1200 ? 1.01 : //okey
                    heighttrue > 640 && heighttrue < 800 ? 1.01 :
                      heighttrue <= 640 ? 1.01:
                        1;
} else {
  sizeResponsiveDis =
    heighttrue >= 2800 ? 1:
    heighttrue > 2600 && heighttrue < 2800 ? 1://okey iphone 11 pro max, 12 pro max
      heighttrue > 2400 && heighttrue < 2600 ? 0.99:// okey iphone 11pro, 12mini, 12 pro, 12
        heighttrue > 2200 && heighttrue < 2400 ? 1.01://okey iphone 8 plus
          heighttrue > 2000 && heighttrue < 2200 ? 1.08: //okey
            heighttrue > 1800 && heighttrue < 2000 ? 1.01:
              heighttrue > 1400 && heighttrue < 1800 ? 1://okey iphone 11
                heighttrue > 1200 && heighttrue < 1400 ? 0.99://okey iphone 8, SE-2ndG
                    heighttrue > 800 && heighttrue < 1200 ? 1.01 :
                      heighttrue > 640 && heighttrue < 800 ? 1.01 :
                        heighttrue <= 640 ? 1 :
                          1;
}
export const sizeResponsive = sizeResponsiveDis;

/**
 * FontSize
 */

export const FontSize = {
  tiny: dimensions.height * 0.017, // 12
  small: dimensions.height * 0.02, // 14
  regular: dimensions.height * 0.0235, // 16
  regularLarge: dimensions.height * 0.0265, // 18
  large: dimensions.height * 0.035, // 24
  extraLarge: dimensions.height * 0.058, // 36
  maxLarge: dimensions.height * 0.071, // 48
}

/**
 * Metrics Sizes
 */
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
