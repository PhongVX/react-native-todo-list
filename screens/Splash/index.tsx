import React from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text
} from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Roboto_900Black } from '@expo-google-fonts/roboto';
import { Feather } from '@expo/vector-icons';

import { useTheme } from '../../theme';

interface SplashProps {
    navigation: any
}

export default function Splash(props: SplashProps) {
    const { navigation } = props;
    let [fontsLoaded] = useFonts({
        Roboto_900Black,
    });
    const { theme } = useTheme();
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        }, 2000);
    }, []);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
        return (
            <View style={[
                styles.body,
                {backgroundColor: theme?.colors.primary}
            ]}>
                 <Feather name='activity' color={theme?.colors.surface} size={100}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 128,
        height: 128,
        marginTop: 20
    },
    title: {
        fontSize: 30,
        marginTop: 10,
        fontWeight: '700',
        fontFamily: 'Roboto_900Black'
    }
})