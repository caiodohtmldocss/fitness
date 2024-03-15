import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfilePage() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [goals, setGoals] = useState('');
    const [savedProfile, setSavedProfile] = useState(null); 

    const saveProfile = () => {
        const profile = { name, age, height, weight, goals };
        setSavedProfile(profile);
    };

    const clearProfile = () => {
        setName('');
        setAge('');
        setHeight('');
        setWeight('');
        setGoals('');
        setSavedProfile(null);
    };

    return (
        <View style={styles.container}>
            {!savedProfile ? (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    <Text style={styles.title}>Perfil do Usuário</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Idade"
                        value={age}
                        onChangeText={text => setAge(text)}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Altura (cm)"
                        value={height}
                        onChangeText={text => setHeight(text)}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Peso (kg)"
                        value={weight}
                        onChangeText={text => setWeight(text)}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Metas de Fitness"
                        value={goals}
                        onChangeText={text => setGoals(text)}
                        multiline
                    />
                    <TouchableOpacity style={styles.button} onPress={saveProfile}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableOpacity>
                </ScrollView>
            ) : (
                <UserProfile profile={savedProfile} clearProfile={clearProfile} />
            )}
        </View>
    );
}

const UserProfile = ({ profile, clearProfile }) => {
    const improvementTips = [
        "Considere aumentar sua ingestão de água diária para manter-se hidratado durante os exercícios.",
        "Adicione mais variedade aos seus exercícios para desafiar diferentes grupos musculares.",
        "Certifique-se de incluir uma boa fonte de proteína em todas as suas refeições para ajudar na recuperação muscular.",
        "Experimente incorporar sessões de alongamento ou ioga em sua rotina para melhorar a flexibilidade e reduzir o risco de lesões.",
    ];

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Text style={styles.title}>Seu Perfil</Text>
            <View style={styles.profileItem}>
                <Text style={styles.label}>Nome:</Text>
                <Text style={styles.value}>{profile.name}</Text>
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.label}>Idade:</Text>
                <Text style={styles.value}>{profile.age}</Text>
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.label}>Altura:</Text>
                <Text style={styles.value}>{profile.height} cm</Text>
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.label}>Peso:</Text>
                <Text style={styles.value}>{profile.weight} kg</Text>
            </View>
            <View style={styles.profileItem}>
                <Text style={styles.label}>Metas de Fitness:</Text>
                <Text style={styles.value}>{profile.goals}</Text>
            </View>
            <Text style={styles.tipsTitle}>Dicas de Melhoria:</Text>
            {improvementTips.map((tip, index) => (
                <Text key={index} style={styles.tipText}>{`${index + 1}. ${tip}`}</Text>
            ))}
            <TouchableOpacity style={styles.changeButton} onPress={clearProfile}>
                <Text style={styles.changeButtonText}>Mudar Meus Dados</Text>
            </TouchableOpacity>
            <br></br>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        paddingHorizontal: 20,
    },
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'white',
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 10,
        backgroundColor: 'white',
        color: 'black',
    },
    button: {
        backgroundColor: 'blue',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginRight: 10,
        color: 'white',
    },
    value: {
        fontSize: 16,
        color: 'white',
    },
    tipsTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
        color: 'white',
    },
    tipText: {
        fontSize: 16,
        marginBottom: 5,
        color: 'white',
    },
    changeButton: {
        marginTop: 20,
        backgroundColor: 'red',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
    },
    changeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
