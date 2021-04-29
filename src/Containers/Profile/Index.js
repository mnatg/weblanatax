// React
import React, { useState, useEffect } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native'
// Redux
import { useDispatch, useSelector } from 'react-redux'
// Components
import { Header } from '@/Components'
// Style
import {
    Layout,
    MetricsSizes,
    MetricsSizesW,
    FontSize
} from '@/Theme'

const IndexProfileContainer = ({ navigation }) => {
    const dispatch = useDispatch()
    const [photoURL, setPhotoURL] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const user = useSelector((state) => state.user.item)
    const chat = useSelector((state) => state.chat)

    
    useEffect(() => {
        init();
    }, []);

    const init = async () => {
        setPhotoURL(user.photoURL)
        setEmail(user.email)
        setName(user.nadisplayNameme)
    }

    return (
        <View style={[Layout.fullSize]}>
            <View style={[{ flex: 0.3 }]}>
                <Header
                    title="" >
                </Header>
                <View style={[Layout.row, styles.userInfo ]}>
                    <Text style={styles.userName}>
                        {name}
                        <Text>
                            {"\n"}
                            {email}
                        </Text>
                    </Text>
                    {photoURL ?
                        <Image source={{ uri: photoURL }}
                            style={styles.userImage} />
                        : // or
                        <Text></Text>
                    }
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        position: 'absolute',
        top: '30%',
        marginLeft: MetricsSizesW.regularLargeW,
        alignSelf: 'flex-end'
    },
    userName: {
        color: 'white',
        fontSize: FontSize.regular * 1.25,
        paddingTop: MetricsSizes.large,
        marginLeft: MetricsSizesW.regularW
    },
    userImage: {
        width: MetricsSizesW.maxLargeW * 2,
        height: MetricsSizesW.maxLargeW * 2,
        borderRadius: 200,
        marginRight: MetricsSizesW.regularW
    }
})

export default IndexProfileContainer
