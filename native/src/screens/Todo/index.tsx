import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

interface TodoProps {

}

export default function Todo(props:TodoProps) {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Todo</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff'
    },
    title:{
        fontSize: 30,
        color: '#39404A',
        marginTop: 10,
        fontWeight: '700',
    }
})