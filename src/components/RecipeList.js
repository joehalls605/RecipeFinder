import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import RecipeDetail from './RecipeDetail';
import { withNavigation } from 'react-navigation'

const RecipeList = ({title, results, navigation}) => {
    if(!results.length) return null;

    return (
        <View>
            <Text>{title}</Text>
            <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(item) => item.recipe.uri}
            renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('RecipeDetail', {recipe: item.recipe})}>
                    <RecipeDetail recipe={item.recipe}/>
                </TouchableOpacity>
            )}

            />
        </View>
    )
}