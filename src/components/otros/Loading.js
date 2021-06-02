// React
import * as React from 'react';
import {
    View,
    StyleSheet,
    Image,
} from 'react-native'
// Styles
import { dimensions, Images } from '@/Theme'

const Loading = ({
    show
}) => {
    return (
        show &&
        <View style={[styles.content]}>
            <Image source={Images.loading} style={styles.loadingImg}></Image>
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    content: {
        width: dimensions.width,
        height: dimensions.height,
        position: 'absolute',
        zIndex: 99,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    loadingImg: {
        width: dimensions.width,
        height: dimensions.height,
        resizeMode: 'contain'
    }
});