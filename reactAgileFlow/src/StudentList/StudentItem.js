import React from 'react'
import { Text, View } from 'react-native'

export default StudentItem = ({std}) => {
    return (
        <View style={{ flexDirection: "row" }}>
            <Text>{std.stdId} </Text>
            <Text>{std.name}</Text>
        </View>
    )
}