import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { Button } from '../components/Button';
import React from 'react';

const styles = StyleSheet.create({
    button:{
        backgroundColor: 'rgba(255,255,255,0.3)',
        borderRadius: 10,
        paddingVertical: 15,
        alignItems: "center",
        justifyContent: "center",
        width: "46%",
        marginTop: 20,
    },
    text:{
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
    },
    buttonContainer:{
        flexDirection: "row",
        flexWrap: "warp",
        marginTop: 20,
        justifyContent: 'space-between',
    }
});

export default Button = ({ text, onPress = () => {} }) => (
    <TouchableOpacity onPress={onPress}>
        <Text>{text}</Text>
    </TouchableOpacity>
);

export const ButtonContainer = ({ children }) => (
    <View style={styles.buttonContainer}>
        {children}
    </View>
);