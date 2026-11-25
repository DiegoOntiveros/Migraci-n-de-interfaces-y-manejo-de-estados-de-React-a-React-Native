# Pelitodo: pantallas con React Native y Expo

Aplicación creada desde la plantilla `blank` de Expo y adaptada a partir del flujo y la pantalla principal Pelitodo del proyecto Flutter:

- **Registro:** nombre, correo electrónico y contraseña en estado local con `useState`.
- **Inicio de sesión:** correo y contraseña en estado local con `useState`.
- **Bienvenida/Inicio:** catálogo, búsqueda, películas guardadas, perfil y cierre de sesión.

La navegación y los formularios usan estado de React, sin dependencias de navegación. La validación, la búsqueda y los favoritos son locales; no se conecta con un servicio de autenticación.

## Ejecutar

```bash
npm install
npm start
```

Escanea el código QR con Expo Go o ejecuta `npm run android` con un emulador Android disponible. Para probar en navegador, ejecuta `npm run web`.
