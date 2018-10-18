import React from 'react'
import { Text } from 'react-native'
import Card from '../common/Card'

export default TodoItems = (props) => {
    return (
        <Card>
            <Text>{props.textTask}</Text>
        </Card>
    )
}