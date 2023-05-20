// authHelper.js
import jwt_decode from 'jwt-decode';

// Función para guardar el token en el almacenamiento local
export const saveToken = (token) => {
    localStorage.setItem('token', token);
  };
  
  // Función para obtener el token del almacenamiento local
  export const getToken = () => {
    return localStorage.getItem('token');
  };
  
  // Función para eliminar el token del almacenamiento local
  export const removeToken = () => {
    localStorage.removeItem('token');
  };
  
  // Función para verificar si el usuario está autenticado
  export const isAuthenticated = () => {
    const token = getToken();
    // Verificar si existe un token y no está expirado
    if (token) {
      // Decodificar el token para obtener la fecha de expiración
      const decodedToken = decodeToken(token);
      if (decodedToken.exp * 1000 > Date.now()) {
        return true;
      }
    }
    return false;
  };
  
  // Función para decodificar el token y obtener la carga útil
  export const decodeToken = (token) => {
    try {
      // Decodificar el token utilizando la librería 'jwt-decode'
      return jwt_decode(token,'S45.9');
    } catch (error) {
      // En caso de error, devolver un objeto vacío
      console.log(error)
      return {};
    }
  };
  