import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Info1({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Por que se tornar fitness?</Text>
            <Text style={styles.content}>
                Ser fitness vai muito além de apenas ter um corpo bonito. É sobre investir em sua saúde e bem-estar a longo prazo. Ao adotar um estilo de vida fitness, você está escolhendo priorizar sua saúde física e mental. Exercícios regulares e uma dieta equilibrada podem melhorar sua qualidade de vida, aumentar sua energia, reduzir o estresse e fortalecer sua imunidade. Além disso, ao se tornar fitness, você se torna um exemplo positivo para os outros ao seu redor, inspirando-os a também cuidar de si mesmos.
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para o Blog</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Fundo preto
        padding: 20 // Espaçamento interno
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white' // Texto branco
        
    },
    content: {
        fontSize: 16,
        textAlign: 'justify',
        color: 'white', // Texto branco
        marginBottom: 20
    },
    button: {
        backgroundColor: '#FF0000',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    }
});
