# Pantallas con React Native y Expo

Aplicación móvil creada desde la plantilla `blank` de Expo. Incluye tres componentes de pantalla:

- **Registro:** nombre, correo electrónico y contraseña en estado local con `useState`.
- **Inicio de sesión:** correo y contraseña en estado local con `useState`.
- **Bienvenida:** saludo con el nombre y acción para cerrar sesión.

La navegación entre pantallas se implementa con estado de React, sin dependencias de navegación. La validación es local y no conecta con un servicio de autenticación.

## Ejecutar

```bash
npm install
npm start
```

Escanea el código QR con Expo Go o ejecuta `npm run android` con un emulador Android disponible. Para probar en navegador, ejecuta `npm run web`.
