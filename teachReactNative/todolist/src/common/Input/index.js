import React from 'react'
import { TextInput, TouchableOpacity, Text } from 'react-native'
import Card from '../Card'
import CardSection from '../CardSection'

export default Input = (props) => {
    return (
        <Card>
            <CardSection>
                <TextInput
                    placeholder={props.placeholder}
                    value={props.value}
                    style={{ flex: 1 }}
                    onChangeText={props.onChange}
                />
                <TouchableOpacity onPress={props.onPress}>
                    <Text>
                        Add Task
                </Text>
                </TouchableOpacity>
            </CardSection>
        </Card>
    )
}