import { StyleSheet } from 'react-native';
import { colors } from '../globalStyles';

export const gameOverStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    title: {
        color: '#e94560',
        fontSize: 36,
        fontWeight: 'bold',
    },
    score: {
        color: colors.text,
        fontSize: 24,
    },
    button: {
        backgroundColor: '#3a7bd5',
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 12,
    },
    buttonText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    }
})