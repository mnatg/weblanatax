// React
import React from 'react'
import { View, Text } from 'react-native'
// Styles
import { Layout, Fonts } from '@/Theme'


const DocumentsController = ({ navigation }) => {
  return(
    <View style={[Layout.bgContainerLight]}>
      <View style={[ {flex:1}]}>

        <Text style={[Fonts.textRegular,  Fonts.textBlue]}>
          Documetos 
        </Text>
        <Text style={[Fonts.textSmall, Fonts.textGray, Fonts.textCenter]}>
          Aún no subes ningun documeto 
        </Text>
      </View>
    </View>
  )
}


export default DocumentsController
