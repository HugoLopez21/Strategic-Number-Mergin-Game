import { StyleSheet } from 'react-native';

export const colors = {
    background: '#1a1a3e',
    surface: '#16213e',
    text: '#ffffff',
    textSecondary: '#a0a0a0',
    selected: '#ffffff',
    border: '#4a4a8a',
}

export const typography = {
    small: 11,
    medium: 14,
    large: 18,
    xlarge: 24,
}

export const spacing = {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
}

export const globalStyles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    centeredText: { color: colors.text, textAlign: 'center', fontWeight: 'bold' }
})