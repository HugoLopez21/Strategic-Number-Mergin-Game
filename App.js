import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { GameOverScreen } from './src/screens/GameOverScreen';
import { GameScreen } from './src/screens/GameScreen';
import { MenuScreen } from './src/screens/MenuScreen';
import { LeaderboardScreen } from './src/screens/LeaderboardScreen'

const Stack = createNativeStackNavigator()

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Menu" component={MenuScreen}/>
                <Stack.Screen name="Leaderboard" component={LeaderboardScreen}/>
                <Stack.Screen name="Game" component={GameScreen}/>
                <Stack.Screen name="GameOver" component={GameOverScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}
