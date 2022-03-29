import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    Image,
    Alert
} from 'react-native';
import { useForm, Controller } from "react-hook-form";
import { Button, TextInput } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';

import TextField from 'src/components/TextField';
import { useTheme } from 'src/theme';

interface SignInProps {
    navigation: any
}

type FormData = {
    userName: string;
    password: string;
};

const SignIn: React.FC<SignInProps> = (props) => {
    const {navigation} = props;
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        defaultValues: {
            userName: '',
            password: ''
        }
    });
    const { theme } = useTheme();
    const onSubmit = (data: FormData) => {
        if (data.userName == 'admin' && data.password == '123456') {
            navigation.navigate('Home');
        }else{
            Alert.alert('Error', 'Username and password dint correct')
        } 
    }
  
    return (
        <View style={[
            styles.container,
            {backgroundColor: theme?.colors.primary}
        
        ]}>
            <View style={styles.header}>
                <Feather name='activity' color={theme?.colors.surface} size={100}/>
            </View>
            <View style={[
                styles.body,
                { borderColor: theme?.colors.primary }

            ]}>
                <Controller
                    control={control}
                    rules={{
                        required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextField value={value} onBlur={onBlur} onChange={(e) => onChange(e.nativeEvent.text)} label='Username' placeholder='Username' />
                    )}
                    name='userName'
                />
        
                <Controller
                    control={control}
                    rules={{
                        required: false,
                    }}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextField secureTextEntry={true}  value={value} onBlur={onBlur} onChange={(e) => onChange(e.nativeEvent.text)} label='Password' placeholder='Password' />
                    )}
                    name='password'
                />               
                <Button style={styles.buttonLogin} mode="contained" onPress={handleSubmit(onSubmit)}>
                    Login
                </Button>
                      
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // padding: 10,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        flex: 2,
        padding: 20,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
    },
    buttonLogin: {
        marginTop: 15
    },
    logo: {
        width: 128,
        height: 128,
        marginTop: 20
    },
})

export default SignIn;