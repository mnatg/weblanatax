// React
import React, { useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground
} from 'react-native'
// Redux
import { useDispatch } from 'react-redux'
// Components
import { Accordian } from '@/Components'
import { ScrollView } from 'react-native-gesture-handler'
// Styles
import {
  Images,
  FontSize,
  dimensions,
  MetricsSizes
} from '@/Theme'

const PlansContainer = ({ navigation }) => {
  const [items, setItems] = useState([]);
  const [plans, setplans] = useState([
    {
      id: 1,
      planImage: Images.plan1,
      planImageE: Images.plan1E,
    },
    {
      id: 2,
      planImage: Images.plan2,
      planImageE: Images.plan2E,
    },
    {
      id: 3,
      planImage: Images.plan3,
      planImageE: Images.plan3E,
    },
    {
      id: 4,
      planImage: Images.plan4,
      planImageE: Images.plan4E,
    },
  ]);

  const dispatch = useDispatch()

  const renderAccordions = () => {
    for (const item of plans) {
      items.push(
        <Accordian key={item.id}
          planImage={item.planImage}
          planImageE={item.planImageE}
          navigation={navigation}
        />
      );
    }
    return items
  }

  return (
    <ScrollView style={styles.general}>
      <ImageBackground source={Images.plansBg} style={[styles.header]}>
        <View style={styles.headerText}>
          <Text style={styles.title}>
            Planes
          </Text>
          <Text style={styles.subtitle}>
            Basado en tu situación encontraremos el plan correcto para ti. Elige el
            plan que más te aplica
          </Text>
          <Text style={styles.text}>
            EMPIEZA
            GRATIS
          </Text>
        </View>
        <Image source={Images.characterPlans} style={[styles.imageBg]}></Image>
      </ImageBackground>
      <View style={styles.container}>
        {renderAccordions()}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  general: {
    backgroundColor: 'white',
  },
  header: {
    width: dimensions.width,
    height: dimensions.height * 0.27
  },
  container: {
    paddingTop: MetricsSizes.small,
    marginLeft: dimensions.width * 0.03,
    marginRight: dimensions.width * 0.03
  },
  imageBg: {
    width: dimensions.width * 0.35,
    height: dimensions.height * 0.3,
    resizeMode: 'contain',
    position: 'absolute',
    right: dimensions.width * 0.05,
    zIndex: 1,
    alignSelf: 'flex-end'
  },
  headerText: {
    color: 'white',
    width: dimensions.width * 0.55
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: FontSize.large,
    marginTop: dimensions.height * 0.05,
    marginLeft: dimensions.width * 0.05
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: FontSize.small,
    color: 'white',
    marginLeft: dimensions.width * 0.05
  },
  text: {
    fontFamily: 'Roboto',
    fontSize: FontSize.regular,
    color: 'white',
    marginLeft: dimensions.width * 0.05,
    fontWeight: 'bold'
  }
});

export default PlansContainer