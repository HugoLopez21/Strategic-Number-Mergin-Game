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
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    numText: {
        color: colors.text,
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 2,
    },
    confirmButton: {
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
    }
})