import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Card from '../common/Card'

export default TodoItems = ({ student, removeStudent }) => {
    return (
        <Card>
            <Text>{student.studentId}</Text>
            <Text>{student.name}</Text>
            <TouchableOpacity onPress={() => removeStudent(student)}>
                <Text>remove</Text>
            </TouchableOpacity>
        </Card>
    )
}