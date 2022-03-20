import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Platform,
    Animated,
    Easing
} from 'react-native';

import { useTheme } from '../../theme';

interface TextFieldProps {
    label?: string
    error?: boolean
    helperText?: string
    startIcon?: JSX.Element
    endIcon?: JSX.Element
    placeholder?: string
    secureTextEntry?: boolean
    style?: any
    value?: any
    onChange?: (e: any) => void | undefined
    onFocus?: (e: any) => void | undefined
    onBlur?: (e: any) => void | undefined
}

const TextField: React.FC<TextFieldProps> = (props) => {
    const { label, startIcon, endIcon, placeholder, secureTextEntry, style, helperText, error, onChange, onFocus, onBlur, ...restProps } = props;
    const [statePlaceHolder, setStatePlaceHolder] = React.useState(placeholder);
    const [stateLabel, setStateLabel] = React.useState(!placeholder ? label : '');
    const [stateTextInputValue, setStateTextInputValue] = React.useState('');
    const [stateLabelAnimated, setStateLabelAnimated] = React.useState(new Animated.Value(0));
    const [stateFocused, setStateFocused] = React.useState(false);

    const marginLeftOfLabel = !!startIcon ? 25 : 0;
    const { theme } = useTheme();

    const handleTextInputFocus = (e: any) => {
        setStateFocused(true);
        setStatePlaceHolder('');
        setStateLabel(label);
        Animated.timing(stateLabelAnimated, {
            toValue: 1,
            duration: 150,
            easing: Easing.ease,
            useNativeDriver: false,
        }).start();
        if (onFocus) {
            onFocus(e);
        }
    }

    const handleTextInputBlur = (e: any) => {
        setStateFocused(false);
        if (stateTextInputValue === '') {
            setStateLabel('');
            setStatePlaceHolder(placeholder);
            Animated.timing(stateLabelAnimated, {
                toValue: 0,
                duration: 150,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start();

        } else {
            Animated.timing(stateLabelAnimated, {
                toValue: 1,
                duration: 150,
                easing: Easing.ease,
                useNativeDriver: false,
            }).start();
        }
        if (onBlur) {
            onBlur(e);
        }
    }

    const handleTextInputChange = (e: any) => {
        setStateTextInputValue(e.nativeEvent.text);
        if (onChange) {
            onChange(e);
        }
    }
    console.log('Re render')
    return (
        <View style={styles.container}>
            <Animated.View style={[
                {
                    transform: [
                        {
                            translateY: stateLabelAnimated.interpolate({
                                inputRange: [0, 1],
                                outputRange: [15, 0]
                            }),
                        }]
                }
            ]}>
                <Animated.Text style={[
                    styles.label,
                    { marginLeft: marginLeftOfLabel },
                    { color: stateFocused ? theme?.colors.primary : theme?.colors.disabled },
                    {
                        fontSize: stateLabelAnimated.interpolate({
                            inputRange: [0, 0.5, 1],
                            outputRange: [18, 14, 12]
                        })
                    },


                ]}>
                    {stateLabel}
                </Animated.Text>
            </Animated.View>
            <View style={styles.wrapperTextField}>
                {
                    !!startIcon && <View style={styles.icon}>
                        {startIcon}
                    </View>
                }

                <TextInput
                    placeholder={statePlaceHolder}
                    secureTextEntry={secureTextEntry}
                    style={[
                        styles.textField,
                        // {height: 35},
                        { ...style }
                    ]}
                    onChange={handleTextInputChange}
                    onFocus={handleTextInputFocus}
                    onBlur={handleTextInputBlur}
                    value={stateTextInputValue}
                    {...restProps}
                />
                {endIcon}
            </View>
            <Animated.View style={[
                styles.underLine,
                { backgroundColor: stateFocused ? theme?.colors.primary : theme?.colors.disabled },
                { transform: [{ scaleY: stateFocused ? 1 : 0.5 }] }
            ]} />
            {/* {
            helperText ? <Text style={styles.helperText}>
                helperText
            </Text> : null
            } */}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
    },
    wrapperTextField: {
        flexDirection: 'row',
        marginTop: 10,
        height: 35
    },
    label: {
        height: 15,
        // marginLeft: 10
    },
    textField: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        // paddingLeft: 10
    },
    icon: {
        paddingBottom: 5
    },
    underLine: {
        height: 2
    },
    helperText: {
        fontSize: 12
    }
});

export default TextField; 
