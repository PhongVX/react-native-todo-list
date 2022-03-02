import React from 'react';
import {
    View,
    StyleSheet,
    Text
} from 'react-native';

interface HomeProps {

}

export default function Home(props:HomeProps) {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Home</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title:{
        fontSize: 30,
        color: '#ffffff',
        marginTop: 10,
        fontWeight: '700',
    }
})