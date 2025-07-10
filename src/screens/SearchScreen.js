import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import useRecipes from '../hooks/useRecipes';
import RecipeList from '../components/RecipeList';

const SearchScreen = () => {
    const [term, setTerm] = useState("");
    const [searchApi, results, errorMessage] = useRecipes();

    const onTermSubmit = () => {
        searchApi(term);
    };

    return (
        <View>
            <TextInput
            style={styles.input}
            placeholder="Search Recipes"
            value={term}
            onChangeText={setTerm}
            onEndEditing={onTermSubmit}
            />
            {errorMessage ? <Text>{errorMessage}</Text>: null}
            <ScrollView>
                <RecipeList title="Top Recipes" results={results}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flex: 1
    },
    input: {
        backgroundColor: '#eee',
        margin: 10,
        padding: 10,
        fontSize: 18,
        borderRadius: 5
    }
});

export default SearchScreen;