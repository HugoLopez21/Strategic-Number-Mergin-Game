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
        margin: 3,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 4,
        borderColor: 'transparent',
    },
    blockSelected: {
        borderColor: "#f7f181",
        boxShadowColor: '#fff',
        boxShadowOpacity: 0.8,
        boxShadowRadius: 4,
    },
    blockEmpty: {
        backgroundColor: 'rgba(255,255,255,0.05)',
    },
    blockText: {
        color: colors.text,
        fontWeight: 'bold',
        fontSize: 14,
        textShadowColor: 'rgba(0, 0, 0)',
        textShadowOffset: { width: 0, height: 0 }, 
        textShadowRadius: 1,
    }
})