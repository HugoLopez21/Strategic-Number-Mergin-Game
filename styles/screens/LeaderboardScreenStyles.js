import { StyleSheet } from 'react-native';
import { colors, typography, spacing } from '../globalStyles';

export const leaderboardStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.lg,
    },
    title: {
        color: colors.text,
        fontSize: typography.xlarge,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: spacing.lg,
    },
    header: {
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 8,
        marginBottom: spacing.sm,
    },
    headerText: {
        color: colors.textSecondary,
        fontSize: typography.small,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        flex: 1,
        textAlign: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: spacing.sm,
        paddingHorizontal: spacing.md,
        marginBottom: spacing.xs,
        backgroundColor: 'rgba(255,255,255,0.05)',
        borderRadius: 8,
    },
    rankText: {
        color: colors.textSecondary,
        fontSize: typography.medium,
        width: 30,
    },
    cellUser: {
        color: colors.text,
        fontSize: typography.medium,
        fontWeight: 'bold',
        flex: 1,
    },
    cellScore: {
        color: '#e6a817',
        fontSize: typography.medium,
        fontWeight: 'bold',
    },
    emptyText: {
        color: colors.textSecondary,
        fontSize: typography.medium,
        textAlign: 'center',
        marginTop: spacing.xl,
    },
    backButton: {
        marginTop: spacing.lg,
        backgroundColor: '#3a7bd5',
        paddingHorizontal: 40,
        paddingVertical: 14,
        borderRadius: 12,
        alignSelf: 'center',
    },
    backButtonText: {
        color: colors.text,
        fontSize: typography.medium,
        fontWeight: 'bold',
    }
})