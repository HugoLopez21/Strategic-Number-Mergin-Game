import { StyleSheet } from 'react-native';
import { colors } from '../globalStyles';

export const menuStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
    title: {
        color: colors.text,
        fontSize: 32,
        fontWeight: 'bold',
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