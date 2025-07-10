import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

const RecipeDetail = ({ recipe }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: recipe.image }} style={styles.image} />
            <Text style={styles.name}>{recipe.label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    image: {
        width: 250,
        height: 150,
        borderRadius: 4
    },
    name: {
        fontWeight: 'bold',
        marginTop: 5
    }
});

export default RecipeDetail;
