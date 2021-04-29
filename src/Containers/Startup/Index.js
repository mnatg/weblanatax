// React
import React, { Component } from 'react'
import { ActivityIndicator } from 'react-native'
// Components
import { Brand, BgContainer } from '@/Components'
// Styles
import { Images, MetricsSizes } from '@/Theme'

export default class IndexStartupContainer extends Component {

  componentDidMount() {
    this.timeoutHandle = setTimeout(() => {
      this.props.navigation.navigate('Welcome')
    }, 2000);
  }

  render() {
    return (
      <BgContainer
        url={Images.greenBg}>
        <Brand />
        <ActivityIndicator size={'large'} style={{ marginVertical: MetricsSizes.large }} />
      </BgContainer>
    )
  }
}

