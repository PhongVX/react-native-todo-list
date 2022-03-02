import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import ToDoImage from '../assets/images/todo.png';

interface SplashProps {
    navigation: any
}

export default function Splash(props:SplashProps) {
    const { navigation } = props
    React.useEffect(()=>{
        setTimeout(() => {
            navigation.replace('Home');
        }, 2000);
    }, []);
    return (
        <View style={styles.body}>
            <Image style={styles.logo} source={ToDoImage}/>
            <Text style={styles.title}>ToDo List</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0080ff'
    },
    logo:{
        width: 128,
        height: 128,
        marginTop: 20
    },
    title:{
        fontSize: 30,
        color: '#ffffff',
        marginTop: 10,
        fontWeight: '700',
    }
})