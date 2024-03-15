import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground, Image } from 'react-native';

export default function ExerciseCatalog() {
    return (
        <ImageBackground
            style={styles.backgroundImage}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Catálogo de Exercícios</Text>
                <View style={styles.exerciseContainer}>
                    <Image
                        source={{ uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/04/flexao-de-bracos.gif' }}
                        style={styles.exerciseImage}
                    />
                    <Text style={styles.exerciseTitle}>Flexão de Braço</Text>
                    <Text style={styles.exerciseDescription}>A flexão de braço é um ótimo exercício com o peso do corpo que trabalha o peito, ombros e tríceps. Comece em posição de prancha com as mãos na largura dos ombros, abaixe o corpo até quase tocar o chão com o peito e depois volte à posição inicial.</Text>
                </View>
                <View style={styles.exerciseContainer}>
                    <Image
                        source={{ uri: 'https://www.mundoboaforma.com.br/wp-content/uploads/2020/11/agachamento-com-barra.gif' }}
                        style={styles.exerciseImage}
                    />
                    <Text style={styles.exerciseTitle}>Agachamento</Text>
                    <Text style={styles.exerciseDescription}>O agachamento é um exercício fundamental para a parte inferior do corpo, que trabalha quadríceps, isquiotibiais e glúteos. Fique em pé com os pés na largura dos ombros, agache flexionando os joelhos e empurrando os quadris para trás, e depois retorne à posição inicial.</Text>
                </View>
                {/* Adicione mais exercícios aqui */}
            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        backgroundColor: 'black', // Definindo o fundo como preto
    },
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white', // Definindo a cor do título como branco
    },
    exerciseContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Fundo semi-transparente branco
        borderRadius: 10,
        padding: 20,
        marginBottom: 20,
        width: '90%',
        alignItems: 'center',
    },
    exerciseImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    exerciseTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
        color: 'black', // Definindo a cor do título como preto
    },
    exerciseDescription: {
        fontSize: 16,
        color: 'black', // Definindo a cor do texto como preto
        textAlign: 'center',
    },
});
