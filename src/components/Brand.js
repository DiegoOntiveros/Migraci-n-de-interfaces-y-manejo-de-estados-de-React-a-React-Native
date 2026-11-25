import { Text, View } from 'react-native';
import { styles } from '../styles';

export default function Brand() {
  return (
    <View style={styles.brand}>
      <View style={styles.brandMark}>
        <Text style={styles.brandMarkText} accessibilityElementsHidden>
          ▶
        </Text>
      </View>
      <Text style={styles.brandName}>Pelitodo</Text>
    </View>
  );
}
