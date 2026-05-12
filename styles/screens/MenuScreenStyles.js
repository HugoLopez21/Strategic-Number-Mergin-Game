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
        backgroundColor: colors.button,
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 12,
    },
    buttonText: {
        color: colors.text,
        fontSize: 18,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 10,
        padding: 14,
        color: colors.text,
        fontSize: 10,
        borderWidth: 1,
        borderColor: colors.border,
    },
    rulesButton: {
        borderWidth: 1,
        borderColor: colors.border,
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 12,
    },
    rulesButtonText: {
        color: colors.textSecondary,
        fontSize: 16,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        backgroundColor: '#16213e',
        borderRadius: 16,
        padding: 24,
        width: '85%',
        maxHeight: '70%',
        gap: 12,
    },
    modalTitle: {
        color: colors.text,
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 8,
    },
    modalText: {
        color: colors.text,
        fontSize: 10,
        marginBottom: 12,
        lineHeight: 22,
    },
})