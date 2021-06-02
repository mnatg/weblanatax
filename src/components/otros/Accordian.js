// React
import React, { Component } from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    StyleSheet,
    LayoutAnimation,
    Platform,
    UIManager,
    Image,
} from "react-native";
// Styles
import {
    Layout,
    Colors,
    FontSize,
    dimensions
} from '@/Theme'

export default class Accordian extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planImage: props.planImage,
            planImageE: props.planImageE,
            expanded: false,
        }
        //if (Platform.OS === 'android') {
            if (true) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }

    render() {
        return (
            <View>
                <TouchableOpacity style={this.state.expanded == false ? [styles.row, Layout.rowCenter] : [styles.rowE]} onPress={() => this.toggleExpand()}>
                    <Image style={
                        this.state.expanded == false ?
                            [styles.plan] :
                            [styles.planE]
                        }
                        source={this.state.expanded == false ? this.state.planImage : this.state.planImageE}
                    />
                </TouchableOpacity>
                {
                    this.state.expanded &&
                    <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('SignUp')}>
                        <Text style={styles.textButton}>Empieza gratis</Text>
                    </TouchableOpacity>
                }
            </View>
        )
    }

    onClick = (index) => {
        const temp = this.state.data.slice()
        temp[index].value = !temp[index].value
        this.setState({ data: temp })
    }

    toggleExpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        this.setState({ expanded: !this.state.expanded })
    }
}

const styles = StyleSheet.create({
    planE: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: dimensions.width * 0.95,
        height: dimensions.height,
        bottom: dimensions.height * 0.10
    },
    plan: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: dimensions.width * 0.95,
        height: dimensions.height * 0.2
    },
    rowE: {
        zIndex: 5,
        marginTop: dimensions.height * 0.05,
    },
    row: {
        height: dimensions.height * 0.22,
        zIndex: 1
    },
    itemActive: {
        fontSize: FontSize.regular,
        color: Colors.green,
    },
    itemInActive: {
        fontSize: FontSize.regular,
        color: Colors.grayDark,
    },
    btnActive: {
        borderColor: Colors.green,
    },
    btnInActive: {
        borderColor: Colors.grayDark,
    },
    childHr: {
        backgroundColor: Colors.lightGray,
        width: '100%',
    },
    colorActive: {
        borderColor: Colors.green,
    },
    colorInActive: {
        borderColor: Colors.grayDark,
    },
    button: {
        backgroundColor: Colors.yellow,
        color: 'white',
        width: dimensions.width * 0.8,
        alignItems: 'center',
        alignSelf: 'center',
        padding: '3%',
        borderRadius: 100,
        position: 'absolute',
        bottom: dimensions.height * 0.2,
        zIndex: 7
    },
    textButton: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: FontSize.regular
    }
});