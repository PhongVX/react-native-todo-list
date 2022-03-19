import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    ScrollView
} from 'react-native';
import {MaterialCommunityIcons, Fontisto, AntDesign} from '@expo/vector-icons'
import { useTheme } from '../../theme';
import Task from './Task';

interface HomeProps {

}

const tasks = [
    {
        id: 1,
        title: "Visit the dentist",
        description: "",
        stamp: 'Today. 8am',
        icon: 'tooth-outline'
    },
    {
        id: 2,
        title: "Have lunch",
        description: "",
        stamp: 'Today. 12pm',
        icon: 'bowl-mix-outline'
    },
    {
        id: 3,
        title: "Client consultation",
        description: "",
        stamp: 'Today. 3pm',
        icon: 'tooltip-account'
    },
    {
        id: 4,
        title: "Interview",
        description: "",
        stamp: 'Today. 5pm',
        icon: 'fingerprint'
    },
    {
        id: 5,
        title: "Have dinner",
        description: "",
        stamp: 'Today. 7pm',
        icon: 'noodles'
    },
    {
        id: 6,
        title: "Reading book",
        description: "",
        stamp: 'Today. 9pm',
        icon: 'notebook'
    }
]


export default function Home(props:HomeProps) {
    const { theme } = useTheme();
    return (
        <View style={[
            styles.container,
            {backgroundColor: theme?.colors.primary}
        ]}>
            <View style={styles.headerWrapper}>
                <MaterialCommunityIcons
                    name='text'
                    color={theme?.colors.surface}
                    size={30}
                />
                <View style={styles.headerTopLeft}>
                    <MaterialCommunityIcons
                        name='bell-outline'
                        color={theme?.colors.surface}
                        size={30}
                    />
                    <Fontisto
                        name='user-secret'
                        color={theme?.colors.surface}
                        size={25}
                    />
                </View>
            </View>
            <View style={styles.userInfoWrapper}>
                <Text style={[
                    styles.userName,
                    {color: theme?.colors.surface}
                ]}>
                    {'Hello, \nPhong Vo'}
                </Text>
            </View>
            <View style={[
                styles.actionCreateWrapper,
                {backgroundColor: theme?.colors.surface}
            ]}>
                <Text style={[
                    styles.actionText,
                    {color: theme?.colors.primary}
                ]}>Tasks</Text>
                <AntDesign name='plus' size={20} color={theme?.colors.primary} />
            </View>  
            <ScrollView style={
                [
                    styles.body,
                    {backgroundColor: '#F5F5FD'}
                ]
            }>
                {
                    tasks.map((task) => <Task task={task} />)
                }
            </ScrollView>
        </View>
        
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 30
    },
    headerTopLeft:{
        flexDirection: 'row'
    },
    userInfoWrapper:{
        padding: 20
    },
    userName:{
        fontSize: 30,
        fontWeight: '700'    
    },
    actionCreateWrapper:{
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection:'row',
        alignItems: 'center',
        height: 45,
        justifyContent: 'space-between'
    },
    actionText: {
        fontSize: 20,
        fontWeight: '700'
    },
    body:{
        paddingTop: 10,
        paddingBottom: 20
    }
})