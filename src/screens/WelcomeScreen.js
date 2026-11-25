import { ScrollView, Text, View } from 'react-native';
import PrimaryButton from '../components/PrimaryButton';
import { styles } from '../styles';

export default function WelcomeScreen({ name, onLogout }) {
  return (
    <View style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={[styles.card, styles.welcomeCard]}>
          <View style={styles.welcomeIcon}>
            <Text style={styles.welcomeIconText}>✓</Text>
          </View>
          <Text style={[styles.eyebrow, styles.centered]}>PELITODO</Text>
          <Text style={[styles.title, styles.centered]}>¡Bienvenido,</Text>
          <Text style={[styles.title, styles.centered]}>{name}!</Text>
          <Text style={[styles.intro, styles.centered]}>
            Tu cuenta está lista. Ya puedes comenzar a disfrutar de tu espacio.
          </Text>
          <PrimaryButton title="Cerrar sesión" onPress={onLogout} />
        </View>
      </ScrollView>
    </View>
  );
}
