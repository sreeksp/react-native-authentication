import React from 'react';
import { Text, TextInput, View } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { inputStyle, labelStyle, containerStyle } = styles;
    return (
        <View style={containerStyle}>
            <Text style={labelStyle}>{label}</Text>
            <TextInput
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                autoCorrect={false}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
            />
        </View>      
    );
};

const styles = {
    labelStyle: {
        fontSize: 18,
        flex: 1,
        paddingLeft: 20,
    },
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'

    }
};

export { Input };