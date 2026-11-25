import { Pressable, Text } from 'react-native';
import { styles } from '../styles';

export default function PrimaryButton({ title, onPress }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [
        styles.primaryButton,
        pressed ? { opacity: 0.82 } : null,
      ]}
    >
      <Text style={styles.primaryButtonText}>{title}</Text>
    </Pressable>
  );
}
