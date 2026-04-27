import { StyleSheet } from 'react-native';
import { colors, typography } from '../globalStyles';

export const infoStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 8,
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    box: {
        alignItems: 'center',
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.1)',
    },
    label: {
        color: colors.textSecondary,
        fontSize: typography.small,
    },
    value: {
        color: colors.text,
        fontSize: typography.large,
        fontWeight: 'bold',
    },
    targetBox: {
        backgroundColor: '#e6a817',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 12,
    }
})