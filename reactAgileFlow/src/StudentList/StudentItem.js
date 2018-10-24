import React from 'react'
import { Text, View, TouchableOpacity, TextInput } from 'react-native'
import styles from './styles'

const renderItem = ({ student, onPress, handleRemove }) => {
    if (student.editStatus) {
        return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Name and Lastname"
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Student ID"
                />
                <TouchableOpacity>
                    <Text> edit</Text>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <View style={{ flexDirection: "row" }}>
            <TouchableOpacity onPress={() => onPress(student)}>
                <View style={{ flexDirection: "row" }}>
                    <Text>{student.studentId} </Text>
                    <Text>{student.name}</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleRemove(student)}>
                <Text> X</Text>
            </TouchableOpacity>
        </View>
    )
}

export default StudentItem = (props) => {
    return renderItem(props)
}