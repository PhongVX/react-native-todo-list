import * as React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTheme } from '../../../theme';

const Task = (props: any) => {
    const { task } = props;
    const { theme } = useTheme();
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <MaterialCommunityIcons
                    name={task.icon}
                    size={30}
                />
                <View style={styles.taskDes}>
                    <Text  style={[
                        {fontWeight: '600'}
                    ]}>
                        {task.title}
                    </Text>
                    <Text style={[
                        {color: theme?.colors.disabled}
                    ]}>
                        {task.stamp}
                    </Text>
                </View>
            </View>
            <View style={styles.right}>
                <MaterialCommunityIcons
                    name='pencil-outline'
                    size={30}
                />
                <MaterialCommunityIcons
                    name='trash-can-outline'
                    size={30}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        height: 80,
        margin: 7,
        borderRadius: 30,
        display: 'flex',
        justifyContent: 'space-between',
        padding: 20,
        flexDirection: 'row',

    },
    left: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    taskDes: {
        marginLeft: 7
    }
});

export default Task;