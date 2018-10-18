import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles'

export default Header = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.textHeader}
            </Text>
        </View>
    )
}
