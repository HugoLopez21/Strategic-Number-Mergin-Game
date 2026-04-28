import { StyleSheet } from 'react-native';
import { colors } from '../globalStyles';

export const penaltyStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        paddingHorizontal: 12,
        paddingVertical: 6,
    },
    label: {
        color: colors.textSecondary,
        fontSize: 12,
        marginRight: 4,
    },
    dot: {
        width: 16,
        height: 16,
        borderRadius: 8,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    dotActive: {
        backgroundColor: '#e94560',
    }
})