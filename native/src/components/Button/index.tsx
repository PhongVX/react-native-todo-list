import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ButtonProps {
    children: React.ReactNode
}

const Button:React.FC<ButtonProps> = (props) => {
    const { children } = props;
    return (
        <View>
            <TouchableOpacity>
                <Text>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Button; 