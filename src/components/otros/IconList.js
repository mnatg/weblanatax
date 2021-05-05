// React
import React from 'react'
import {
  View,
  Image,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
// Styles
import {
  Layout,
  Images,
  Colors,
  MetricsSizesW,
  dimensions,
  FontSize
} from '@/Theme'

const IconList = () => {
  const addItem = ({ item }) => (
    <View style={[styles.item, Layout.row]} >
      <View style={[styles.container, Layout.row]}><Image source={item.icon} style={styles.icon}></Image></View>
      <View style={styles.lineHorizontal}></View>
      <View style={styles.lineVertical}></View>
      <Text style={styles.title}>
        {item.title}
      </Text>

    </View>
  )
  return (
    <View style={[styles.content]} >
      <Text style={[styles.title, styles.widthTitle]}>Maneja todo desde un solo lugar</Text>
      <FlatList style={[styles.space]}
        data={[
          {
            key: "c-1",
            title: "Regístrate",
            icon: Images.icon_signup,
          }, {
            key: "c-2",
            title: "Junta tus documentos",
            icon: Images.icon_document,
          }, {
            key: "c-3",
            title: "Nosotros preparamos",
            icon: Images.icon_review,
          }, {
            key: "c-4",
            title: "Verificas y apruebas",
            icon: Images.icon_test,
          }, {
            key: "c-5",
            title: "Enviamos al IRS",
            icon: Images.icon_send_IRS,
          }
        ]}
        renderItem={(item) => addItem(item)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: dimensions.width * 0.08,
    height: dimensions.width * 0.08,
    backgroundColor: Colors.aquamarine,
    borderRadius: 100,
    padding: dimensions.width * 0.05,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    width: dimensions.width * 0.05,
    height: dimensions.width * 0.05,
    margin: 0,
    resizeMode: 'contain'
  },
  item: {
    marginLeft: MetricsSizesW.regularW,
    padding: dimensions.width * 0.03,
    height: dimensions.height * 0.1
  },
  title: {
    marginLeft: MetricsSizesW.smallW,
    fontFamily: 'Roboto',
    fontSize: FontSize.regular,
    fontWeight: 'bold',
    color: Colors.textGray
  },
  lineHorizontal: {
    width: dimensions.width * 0.09,
    height: dimensions.height * 0.1,
    borderBottomColor: Colors.yellow,
    borderBottomWidth: dimensions.width * 0.005,
    position: 'absolute',
    bottom: dimensions.height * 0.01,
    left: dimensions.width * 0.15
  },
  lineVertical: {
    width: dimensions.width * 0.04,
    height: dimensions.height * 0.15,
    borderLeftColor: Colors.yellow,
    borderLeftWidth: dimensions.width * 0.005,
    position: 'absolute',
    left: dimensions.width * 0.08,
    top: dimensions.height * 0.05,
    zIndex: -1
  },
  content: {
    flex: 1,
    maxHeight: dimensions.height * 0.5
  },
  space: {
    marginStart: -MetricsSizesW.regularLargeW
  },
  widthTitle: {
    width: dimensions.width * 0.75,
    marginLeft: dimensions.width * 0.015,
    paddingStart: dimensions.width * 0.12
  }
});
export default IconList

