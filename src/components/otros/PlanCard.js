// React
import React, { useState, useRef }  from 'react'
import {
  View,
  Text,
  Animated,
  TouchableOpacity
} from 'react-native'
// Styles
import { Common, Fonts } from '@/Theme'

const PlanCard = ({styles, title, subTitle, children}) =>{ 
  const [isExpanded, setExpanded] = useState('false')
  const [contentHeight, setContentHight] = useState(0)
   
  const height = useRef(new Animated.Value(0)).current;
  
  const _getMaxValue = () => { return contentHeight };
  const _getMinValue = () => { return 0 };
  
  const _initContentHeight = (evt) => {
    if (contentHeight>0) return;
    setContentHight(evt.nativeEvent.layout.height)
    height.setValue(isExpanded ? _getMaxValue() : _getMinValue() );
  }

  const toggle = () => {
    Animated.timing(height, {
      toValue: isExpanded ? _getMinValue() : _getMaxValue(),
      duration: 300,
      useNativeDriver: true
    }).start();
    setExpanded(!isExpanded)
  }
  return(
    <View style={[Common.card]}>
      <View>
        <TouchableOpacity 
          onPress={toggle}
          underlayColor="transparent" >
          <>
            <Text
              style={[Fonts.titleSmall, Fonts.textLight]}
            >
              {title}
            </Text>
            <Text
              style={[Fonts.textLight]}
            >
              { subTitle }
            </Text>
          </>
        </TouchableOpacity
>
      </View>

    </View>
  )}

export default PlanCard

