import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SearchScreen from './src/screens/SearchScreen';
import RecipeDetailScreen from './src/screens/RecipeDetailScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Search">
                <Stack.Screen
                    name="Search" // name of screen
                    component={SearchScreen} // name of component
                    options={{ title: 'Recipe Finder' }} // optional settings like screen header
                />
                <Stack.Screen
                    name="RecipeDetail"
                    component={RecipeDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
