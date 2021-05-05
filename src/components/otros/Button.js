// React
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
// Styles
import {
  Common,
  Colors,
  Layout,
  FontSize
} from '@/Theme'
import Icon from 'react-native-vector-icons/Ionicons';

const Button = ({
  disabled,
  onPress,
  style,
  children,
  uppercase = true,
  icon,
  loading = false,
  mode = 'contained',
  ...rest
}) => {

  let backgroundColor, borderColor, textColor, borderWidth;

  if (mode === 'contained') {
    backgroundColor = Colors.primary
    borderWidth = 0
    borderColor = 'transparent'
    textColor = 'white'
  }
  const buttonStyle = {
    backgroundColor,
    borderWidth,
    borderColor
  }
  const textStyle = { color: textColor, ...Common.labelBtn };
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[Common.btn, Layout.rowCenter, buttonStyle, style]} >
      {icon && loading !== true ? (
        <View style={Common.btnIcon}>
          <Icon
            name={icon}
            size={FontSize.large}
            color={textColor}
          />
        </View>
      ) : null}
      <Text
        style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>

  )
}

export default Button;

