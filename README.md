

1.Descripción del Proyecto
Esta aplicación ha sido desarrollada utilizando React Native y Expo Go. El proyecto integra la **Spotify Web API** permitiendo a los usuarios explorar álbumes, visualizar listas de reproducción y gestionar la interfaz de reproducción musical para celulares

##INTEGRANTES:
Balcaceres Hernandez Diego Alexander - BH241800
Flores Lino Daniel Enrique - FL220294
Hernandez Ortiz Luis Ernesto - OH242206
Alfaro Tomasino Ricardo Daniel - AT232988
Cartagena Arteaga Luis Enrique - CA241136

2. Tecnologías Utilizadas
* **Framework:** Expo Go
* **API Externa:** Spotify Web API
* **Lenguajes:** JavaScript y TypeScript 
* **Entorno de ejecución:** Node.js
* **Estilos:** Stylesheet y temas personalizados (Hooks)



3. Organización del Código (Arquitectura)


* **`api/`**: Contiene `spotifyApi.js` esta está encargado de las peticiones a los endpoints de Spotify (autenticación y obtención de datos)
* **`screens/`**: Pantallas principales de la app:
* `AlbumsScreen.js`: Visualización de catálogos musicales
* `DesktopScreen.js`: Interfaz principal de navegación
* `PlayScreen.js`: Reproductor 
* **`components/`**: Elementos de UI reutilizables como `XPWindow.js`, `Taskbar.js`, `DesktopIcon.js` y componentes de sistema
* **`hooks/`**: Logica para el manejo de esquemas de colores y temas dinámicos (`use-color-scheme.ts`)
* **`constants/`**: Definiciones globales de estilo y configuración del tema
* **`assets/`**: Recursos estaticos e imagenes de la aplicación



4. Instrucciones de Instalación y Ejecución

4.1 Requisitos Previos
* Tener instalado **Node.js** 
* Instalar la aplicación **Expo Go** en su celular

5. Configuración del Repositorio


5.1 Clonar el repositorio
git clone https://github.com/luhotz/DPS_Fase1ProyectoCatedra.git

5.2 Entrar a la carpeta del proyecto
cd DPS_Fase1ProyectoCatedra-main

5.3 Instalar dependencias de Node
npm install

5.4 Ejecución de la Aplicación
Para correr el proyecto:

npx expo start
