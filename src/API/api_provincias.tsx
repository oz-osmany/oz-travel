import {images} from "../assets";
import { DatosProvincias } from "../interfaces/reservadoInterface";
//import {countries} from "../constans/dummy";

export const provincias:Array<DatosProvincias>=[
    {
        id:1,
        name:"Habana-Matanzas",
        provincia:"Habana",
        foto:require("../assets/images/museoRevolucion.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"10:30",
        direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
    },
    {   id:2,
        name:"Pinar del Rio-Matanzas",
        provincia: "Pinar del Rio"  ,
        foto:require("../assets/images/pinar.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"11:30",
         direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
        },
    {
        id:3,
        name:"Santiago-Camaguey",
        provincia:"Santiago de Cuba",
        foto:require("../assets/images/santiago.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"10:00",
         direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
        },
    {
        id:4,
        name:"Holguin-Las Tunas",
        provincia:"Holguin",
        foto:require("../assets/images/holguin.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"08:30",
        direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
    },
    {
        id:5,
        name:"Matanzas-Villa Clara",
        provincia:"Matanzas",
        foto:require("../assets/images/varadero.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"12:30",
         direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
        },
    {
        id:6,
        name:"Sancti Spiritus-Camaguey",
        provincia:"Sancti Spiritus",
        foto:require("../assets/images/trinidad.jpg"),
        categoria:"Tour",
        paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
        tipo_transp:"Bicicleta",
        isBookmark:true,
        desde:"2021-01-15",
        hasta:"2021-01-23",
        hora:"11:30",
        direccion:"Picota 123 entre Agel y Espada",
        descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
    }]

const dummyProvince = { provincias };

export default dummyProvince;

 /*  places: [
            {
                id: 1,
                name: "Kuching",
                description: "Kuching, officially the City of Kuching, is the capital and the most populous city in the state of Sarawak in Malaysia. It is also the capital of Kuching Division.",
                image: images.kuching,
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 1.557177,
                    longitude: 110.351902,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Riverside Majestic Hotel",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557907,
                            longitude: 110.352079,
                        },
                    },
                    {
                        id: "2",
                        name: "Grand Margherita Hotel",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.558163,
                            longitude: 110.352813,
                        },
                    },
                    {
                        id: "3",
                        name: "Hilton Kuching",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 1.557144,
                            longitude: 110.350496,
                        },
                    },
                ]
            },
            {
                id: 2,
                name: "Kuala Lumpur",
                description: "Kuala Lumpur is the capital of Malaysia. Its modern skyline is dominated by the 451m-tall Petronas Twin Towers, a pair of glass-and-steel-clad skyscrapers with Islamic motifs.",
                image: images.buceo,
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Hilton Kuala Lumpur",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135308,
                            longitude: 101.685729,
                        },
                    },
                    {
                        id: "2",
                        name: "Le Méridien Kuala Lumpur",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.135843,
                            longitude: 101.686544,
                        },
                    },
                    {
                        id: "3",
                        name: "The St. Regis Kuala Lumpur",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 3.136902,
                            longitude: 101.688924,
                        },
                    },
                ]
            },
            {
                id: 3,
                name: "Penang",
                description: "George Town is the colorful, multicultural capital of the Malaysian island of Penang.",
                image: images.senderismos,
                rate: "4.89",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                hotels: [
                    {
                        id: "1",
                        name: "Sunrise Gurney",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.432874,
                            longitude: 100.316750,
                        },
                    },
                    {
                        id: "2",
                        name: "Sunrise Gurney Homestay",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431626,
                            longitude: 100.317848,
                        },
                    },
                    {
                        id: "3",
                        name: "Evergreen Laurel Hotel Penang",
                        image: images.riverside,
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ]
            }
        ] */