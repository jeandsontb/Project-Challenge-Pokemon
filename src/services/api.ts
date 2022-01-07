import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: `https://pokeapi.co/api/v2/`
});

api.interceptors.request.use(config => {
  const token = AsyncStorage.getItem('@usertoken:user') || '';
  config.headers = {
    'Authorization': `Bearer ${token}`,
  }
  return config
})

export default api;