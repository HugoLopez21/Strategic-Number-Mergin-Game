Dependencies

@react-navigation/native and @react-navigation/native-stack:
Navigation library for managing screen transitions. Used to handle the flow between the Main Menu, Game Screen, Game Over and Leaderboard.

react-native-screens and react-native-safe-area-context:
Required dependencies for React Navigation to work correctly on mobile devices, respecting screen edges and safe areas.
zustand

Global state management library: 
Stores and manages all game data in real time: the board, score, target number, current errors and falling speed.

@react-native-async-storage/async-storage:
Local device storage system. Used to save and retrieve the leaderboard scores even after the player closes the application.

Prueba