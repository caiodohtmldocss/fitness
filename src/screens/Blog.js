import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function Blog({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Blog</Text>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Info1")}
            >
                <Text style={styles.label}>Por que se tornar fitness?</Text>
            </Pressable>
            <Pressable
                style={styles.button}
                onPress={() => navigation.navigate("Info2")}
            >
                <Text style={styles.label}>Histórias de Transformação</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
        color: 'white',
    },
    button: {
        height: 50,
        width: 300,
        backgroundColor: '#FF0000',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    label: {
        color: 'white',
        fontSize: 20
    }
});
