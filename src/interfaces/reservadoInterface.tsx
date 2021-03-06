// Generated by https://quicktype.io

export interface Reservados {
    datos_user: DatosUser[];
}

export interface DatosUser {
    titulo:      String,
    id:          number;
    pais:        String;
    provincia:   String;
    fecha:       string;
    hora:        string;
    imagen:      any;
    evento:      string;
    direccion:   string;
    chofer:      String;
    guia:        String;
    tipo_evento: string;
    telefono:    string;
    descripcion: string;
    
}

/* export interface Excursiones{
    excursion: DatosExcursiones[];
} */


export interface DatosExcursiones{
    id:number;
    imagen:any;
    titulo:string
    actividades:Activity[];
    
}
export interface Activity{
    id:number
    name:string
    foto:any
    guia:string
    idioma:string
    tipo_transp:string
    categoria:string
    isBookmark:boolean
    provincia:string
    desde:string
    hasta:string
    hora:string
    direccion:string
    descripcion:string
}
/* export enum Provincia {
    Habana = "Habana",
    SantiagoDeCuba = "Santiago de Cuba",
    Trinidad = "Trinidad",
} */
export interface Provincias{
    provincias: DatosProvincias[];
}


export interface DatosProvincias{
    id:number;
    name:string;
    provincia:string;
    foto:any;
    categoria:string;
    paradas:string[];
    tipo_transp:string;
    isBookmark:boolean;
    desde:string;
    hasta:string;
    hora:string;
    direccion:string;
    descripcion:string,
    precio:string;
    
}