// SE BACKEND_URL não estiver definida na hospedagem da nuvem (netlify) vai rodar localmente na 8080
export const BASE_URL = process.env.REACT_APP_BACKEND_URL?? 'http://localhost:8080';