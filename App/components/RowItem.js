import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import React from 'react';

const styles = StyleSheet.create({
    row: {
        paddingHorizontal: 15,
        paddingVertical: 20,
        backgroundColor: '#36B1F0',
        marginBottom: 1,
    },
    text: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "600",
    },

});

export const RowItem =({ onPress = () => {}, name, color }) => (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        <View style={[styles.row, {backgroundColor: color}]} >
            <Text style={styles.text} >
                {name}
            </Text>
        </View>
    </TouchableOpacity>
);