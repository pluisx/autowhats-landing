export interface Servicio {
  id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_minutos: number;
  categoria: string;
  activo: boolean;
  horario?: string;
  created_at?: string;
}

export interface CursoModulo {
  clase: number;
  nombre: string;
  temas: string[];
}

export interface Curso {
  id?: string;
  nombre: string;
  descripcion: string;
  precio: number;
  duracion_dias: number;
  duracion_descripcion: string;
  fechas_descripcion: string;
  hora_inicio: string;
  horario: string;
  ubicacion: string;
  cupos_disponibles: number;
  deposito_porcentaje: number | null;
  deposito_monto: number;
  descuento_hoy: number;
  restante_sin_descuento: number;
  restante_con_descuento: number;
  incluye_materiales: boolean;
  incluye_certificacion: boolean;
  incluye_almuerzo: boolean;
  proxima_fecha: string | null;
  edad_minima: number;
  activo: boolean;
  modulos: CursoModulo[] | null;
  metodos_pago: string[] | null;
  politica_reembolso: string | null;
  nota_licencia: string | null;
  link_deposito: string | null;
  link_restante: string | null;
  link_restante_descuento: string | null;
  link_completo: string | null;
  link_completo_descuento: string | null;
  created_at?: string;
}

export interface ConfiguracionBot {
  id?: string;
  nombre: string | null;
  nombre_negocio: string | null;
  ciudad: string | null;
  nombre_asistente: string | null;
  instagram: string | null;
  tono_general: string | null;
  usar_emojis: string | null;
  emojis_favoritos: string | null;
  longitud_mensajes: string | null;
  palabras_carinosas: string | null;
  frecuencia_carinosas: string | null;
  signos_exclamacion: boolean;
  ejemplos_buenos: string | null;
  ejemplos_malos: string | null;
  updated_at?: string;
}

export interface RespuestaObjecion {
  id?: string;
  objecion: string;
  respuesta_1: string;
  respuesta_2: string | null;
  derivar_a_gigi: boolean;
  activo: boolean;
  updated_at?: string;
}

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
}
