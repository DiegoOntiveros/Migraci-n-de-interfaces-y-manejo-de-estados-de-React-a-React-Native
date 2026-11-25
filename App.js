import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import WelcomeScreen from './src/screens/WelcomeScreen';

export default function App() {
  const [screen, setScreen] = useState('login');
  const [name, setName] = useState('');

  function showWelcome(userName) {
    setName(userName);
    setScreen('welcome');
  }

  return (
    <>
      <StatusBar style="light" />
      {screen === 'register' ? (
        <RegisterScreen
          onRegister={showWelcome}
          onShowLogin={() => setScreen('login')}
        />
      ) : screen === 'welcome' ? (
        <WelcomeScreen name={name} onLogout={() => setScreen('login')} />
      ) : (
        <LoginScreen
          onLogin={(email) => showWelcome(email.split('@')[0])}
          onShowRegister={() => setScreen('register')}
        />
      )}
    </>
  );
}
