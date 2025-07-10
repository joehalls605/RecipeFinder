import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

const RecipeDetailScreen = ({ navigation }) => {
    const recipe = navigation.getParam('recipe');

    return (
        <ScrollView style={{ padding: 10 }}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Text style={styles.title}>{recipe.label}</Text>
            <Text style={styles.subtitle}>Ingredients:</Text>
            {recipe.ingredientLines.map((line, index) => (
                <Text key={index}>• {line}</Text>
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        borderRadius: 5
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 10
    },
    subtitle: {
        fontSize: 18,
        marginVertical: 5
    }
});

export default RecipeDetailScreen;
