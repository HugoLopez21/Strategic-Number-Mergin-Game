import { StyleSheet } from 'react-native';
import { colors } from '../globalStyles';

export const boardStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 4,
    },
    row: {
        flexDirection: 'row',
    },
    block: {
        width: 38,
        height: 38,
        margin: 1,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: 'transparent',
    },
    blockSelected: {
        borderColor: colors.selected,
        shadowColor: '#fff',
        shadowOpacity: 0.8,
        shadowRadius: 4,
    },
    blockEmpty: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    blockText: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
    }
})