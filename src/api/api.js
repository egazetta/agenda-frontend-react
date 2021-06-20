import axios from 'axios';

export const api = axios.create({
    baseURL: 'http://127.0.0.1:1880/api/all/administradores'
})

export const busca = async(url, setDado) => {
    const resposta = await api.get(url)
    console.log(resposta.data)
    setDado(resposta.data)
}