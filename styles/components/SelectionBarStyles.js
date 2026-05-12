import { StyleSheet } from 'react-native';
import { colors } from '../globalStyles';

export const selectionStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderTopWidth: 1,
        borderTopColor: colors.border,
    },
    combination: {
        flexDirection: 'column',
        flex: 1,
    },
    confirmButton: {
        width: 100,
        backgroundColor: '#3a7bd5',
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 10,
    },
    confirmText: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
    },
    miniBlock: {
    width: 32,
    height: 32,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
    },
    miniBlockText: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 14,
    },
    operator: {
        color: colors.text,
        fontSize: 16,
        marginHorizontal: 2,
        alignSelf: 'center',
    },
    label: {
        color: colors.textSecondary,
        fontSize: 10,
        marginBottom: 4,
    },
    blocksRow: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    blockRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})