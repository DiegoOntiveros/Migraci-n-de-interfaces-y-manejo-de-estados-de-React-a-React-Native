import { StyleSheet } from 'react-native';

export const colors = {
  background: '#090B12',
  surface: '#121826',
  input: '#0C111D',
  border: '#293044',
  text: '#F8F7FF',
  muted: '#B6B9C8',
  accent: '#8B5CF6',
  accentLight: '#D7C6FF',
  error: '#FDA4AF',
};

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },
  card: {
    width: '100%',
    maxWidth: 460,
    alignSelf: 'center',
    padding: 26,
    borderWidth: 1,
    borderColor: '#24283A',
    borderRadius: 24,
    backgroundColor: colors.surface,
  },
  brand: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 34,
  },
  brandMark: {
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
    borderRadius: 14,
    backgroundColor: colors.accent,
  },
  brandMarkText: {
    color: colors.text,
    fontSize: 16,
    fontWeight: '800',
  },
  brandName: {
    color: colors.text,
    fontSize: 21,
    fontWeight: '800',
  },
  eyebrow: {
    marginBottom: 9,
    color: '#B794F4',
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 1.5,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.7,
  },
  intro: {
    marginTop: 10,
    marginBottom: 25,
    color: colors.muted,
    fontSize: 15,
    lineHeight: 22,
  },
  field: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    color: '#E6E3F0',
    fontSize: 13,
    fontWeight: '600',
  },
  input: {
    minHeight: 50,
    paddingHorizontal: 14,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 13,
    backgroundColor: colors.input,
    color: colors.text,
    fontSize: 15,
  },
  inputError: {
    borderColor: colors.error,
  },
  errorText: {
    marginTop: 6,
    color: colors.error,
    fontSize: 12,
  },
  primaryButton: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
    borderRadius: 14,
    backgroundColor: colors.accent,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '700',
  },
  linkRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 22,
  },
  linkText: {
    color: colors.muted,
    fontSize: 13,
  },
  linkButton: {
    color: colors.accentLight,
    fontSize: 13,
    fontWeight: '700',
  },
  welcomeCard: {
    alignItems: 'center',
    paddingVertical: 42,
  },
  welcomeIcon: {
    width: 62,
    height: 62,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    borderRadius: 20,
    backgroundColor: colors.accent,
  },
  welcomeIconText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
  },
  centered: {
    textAlign: 'center',
  },
});
