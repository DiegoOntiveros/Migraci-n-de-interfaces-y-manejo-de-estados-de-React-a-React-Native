import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Brand from '../components/Brand';
import FormField from '../components/FormField';
import PrimaryButton from '../components/PrimaryButton';
import { styles } from '../styles';

export default function LoginScreen({ onLogin, onShowRegister }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleLogin() {
    const nextErrors = {};
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Escribe un correo electrónico válido.';
    }
    if (password.length < 6) {
      nextErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onLogin(email.trim());
    }
  }

  return (
    <View style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.card}>
          <Brand />
          <Text style={styles.eyebrow}>TU ESPACIO DE ENTRETENIMIENTO</Text>
          <Text style={styles.title}>Bienvenido de nuevo</Text>
          <Text style={styles.intro}>
            Inicia sesión para continuar en tu cuenta.
          </Text>

          <FormField
            label="Correo electrónico"
            value={email}
            onChangeText={setEmail}
            placeholder="nombre@correo.com"
            keyboardType="email-address"
            textContentType="emailAddress"
            error={errors.email}
          />
          <FormField
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            placeholder="Al menos 6 caracteres"
            secureTextEntry
            textContentType="password"
            error={errors.password}
          />
          <PrimaryButton title="Iniciar sesión" onPress={handleLogin} />

          <View style={styles.linkRow}>
            <Text style={styles.linkText}>¿No tienes una cuenta? </Text>
            <Text
              accessibilityRole="button"
              onPress={onShowRegister}
              style={styles.linkButton}
            >
              Regístrate
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
