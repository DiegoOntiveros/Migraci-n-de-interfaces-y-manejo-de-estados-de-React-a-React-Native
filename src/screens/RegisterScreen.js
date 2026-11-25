import { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Brand from '../components/Brand';
import FormField from '../components/FormField';
import PrimaryButton from '../components/PrimaryButton';
import { styles } from '../styles';

export default function RegisterScreen({ onRegister, onShowLogin }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  function handleRegister() {
    const nextErrors = {};
    if (!name.trim()) {
      nextErrors.name = 'Escribe tu nombre.';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      nextErrors.email = 'Escribe un correo electrónico válido.';
    }
    if (password.length < 6) {
      nextErrors.password = 'La contraseña debe tener al menos 6 caracteres.';
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      onRegister(name.trim());
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
          <Text style={styles.eyebrow}>COMIENZA HOY</Text>
          <Text style={styles.title}>Crea tu cuenta</Text>
          <Text style={styles.intro}>Completa tus datos para comenzar.</Text>

          <FormField
            label="Nombre completo"
            value={name}
            onChangeText={setName}
            placeholder="Tu nombre"
            autoCapitalize="words"
            textContentType="name"
            error={errors.name}
          />
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
            textContentType="newPassword"
            error={errors.password}
          />
          <PrimaryButton title="Crear cuenta" onPress={handleRegister} />

          <View style={styles.linkRow}>
            <Text style={styles.linkText}>¿Ya tienes una cuenta? </Text>
            <Text
              accessibilityRole="button"
              onPress={onShowLogin}
              style={styles.linkButton}
            >
              Inicia sesión
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
