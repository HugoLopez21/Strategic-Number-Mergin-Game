import { StyleSheet } from 'react-native';
import { spacing, colors } from '../globalStyles';
export const messageStyles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignItems: 'center',
        zIndex: 10,
        paddingTop: spacing.sm,
    },
    alertBox: {
        paddingHorizontal: spacing.lg,
        paddingVertical: spacing.sm,
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.75)',
        borderWidth: 2,
        borderColor: colors.border,
    },
    text: {
        color: colors.text,
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    }
})