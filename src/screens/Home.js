import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={{ uri: 'https://play-lh.googleusercontent.com/Vkr8u7qdY--dP5UnKsmw63Lgl3vRpmTpw37OCH0SSu7IOZqviEvKyma2OTQuiuVTapkW' }} 
                style={styles.backgroundImage}
                resizeMode="cover"
            >
                <View style={styles.overlay}>
                    <Text style={styles.title}>Bem-vindo ao FitnessApp</Text>
                    <Text style={styles.subtitle}>Sua jornada para uma vida mais saudável começa aqui!</Text>
                    <TouchableOpacity 
                        style={styles.button}
                        onPress={() => navigation.navigate('Feed')}
                    >
                        <Text style={styles.buttonText}>Começar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#FF0000', // Vermelho
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
