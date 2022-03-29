import React from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface IconButtonProps {
    children: React.ReactNode
}

const IconButton:React.FC<IconButtonProps> = (props) => {
    const { children } = props;
    return (
        <View>
            <TouchableOpacity>
                <Text>{children}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default IconButton; 