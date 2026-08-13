import { Icono } from "../data/iconos";

export interface Opcion {
  id: number;
  nombre: string;
  icono: Icono;
  iconoAccion: string;
  pantalla: string;
}

export interface Seccion {
  id: number;
  titulo: string;
  opciones: Opcion[];
}