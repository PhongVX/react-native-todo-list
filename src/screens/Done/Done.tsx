import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

interface DoneProps {

}

export default function Done(props:DoneProps) {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Done</Text>
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