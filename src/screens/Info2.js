import React from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from "react-native";

export default function Info2({ navigation }) {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Histórias de Transformação</Text>

            <View style={styles.story}>
                <Image source={{uri: 'https://img.freepik.com/fotos-premium/mulher-gorda-suada-fazendo-exercicios-com-corda-no-ginasio-queima-de-calorias-mulher-obesa-em-treinamento-em-clube-esportivo-obesidade_266732-11400.jpg'}} style={styles.image} />
                <Text style={styles.storyText}>
                    Maria, aos 120 kg, enfrentou muitos desafios em sua vida devido ao excesso de peso. Com determinação e trabalho árduo, ela perdeu 40 kg ao longo de um ano, melhorando sua saúde e autoestima.{"\n\n"}
                    Após anos de luta com a obesidade, Maria decidiu fazer uma mudança em sua vida e adotou uma rotina de exercícios e uma dieta saudável, perdendo 30 kg e ganhando uma nova perspectiva de vida.
                </Text>
            </View>

            <View style={styles.story}>
                <Image source={{uri: 'https://img.freepik.com/fotos-premium/um-homem-em-uma-academia-com-uma-placa-que-diz-eu-sou-um-homem-gordo_800563-6419.jpg'}} style={styles.image} />
                <Text style={styles.storyText}>
                    Carlos, aos 150 kg, sempre enfrentou dificuldades devido ao seu peso. Determinado a mudar, ele iniciou uma jornada de exercícios e alimentação saudável, perdendo 50 kg em um ano.{"\n\n"}
                    Laura, após uma longa batalha com a obesidade, decidiu transformar sua vida e se dedicar à sua saúde. Com esforço e dedicação, ela perdeu 40 kg e ganhou uma nova confiança em si mesma.
                </Text>
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
                <Text style={styles.buttonText}>Voltar para Blog</Text>
            </TouchableOpacity>
            <View style={{ height: 20 }} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: "#000",
        paddingHorizontal: 20,
        paddingTop: 20
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#FFF",
        marginBottom: 20
    },
    story: {
        marginBottom: 20
    },
    image: {
        width: "100%",
        height: 200,
        marginBottom: 10
    },
    storyText: {
        fontSize: 16,
        color: "#FFF",
        textAlign: "justify"
    },
    button: {
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 5,
        alignItems: "center"
    },
    buttonText: {
        color: "#FFF",
        fontSize: 16
    }
});
