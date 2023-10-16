import axios from './axios'
import { Dj } from '@/interface/dj.js'
import { AxiosResponse } from "axios";
import { toRaw } from 'vue';

// este metodo permite hacer una peticion post para el add del dj
export const createDj = async (dj: Dj) => await axios.post('/djs', dj);


export const findAll= async (): Promise<Dj[]> => {
    try {
      const response = await axios.get('/djs');
      return response.data
    } catch (error) {
      console.error('Error al obtener los DJs', error);
      return [];
    }
};

export const getDj= async (id:string): Promise<Dj> => {
    const response = await axios.get('/djs/'+ id);
    return response.data
};

export const updateDj= async (id:string,dj:Dj): Promise<Dj> => {
  const response = await axios.put('/djs/'+ id,dj);
  return response.data
};

export const deleteDj= async (id:string): Promise<Dj> => {
  const response = await axios.delete('/djs/'+ id);
  return response.data
};
// export const getDj = async (id: string): Promise<AxiosResponse<Dj>> =>
//   await axios.get(`/djs/${id}`);
