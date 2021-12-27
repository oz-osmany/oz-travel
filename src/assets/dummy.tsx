//import {images} from "../constans";
export const countries = [
    {
        id: 1,
        name: "Habana",
        image: require("../assets/images/excursion-bici.jpg"),
        places: [
            {
                id: 1,
                name:"Andar la Habana en bici",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"10:30",
                image:require("../assets/images/excursion-bici.jpg"),
                guia:"si",
                idioma:"ingles",
                paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
                tipo_transp:"Bicicleta",
                categoria:"Experiencia",
                isBookmark:true,
                provincia:"Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 1.557177,
                    longitude: 110.351902,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 2,
                name:"Al Este de la Habana",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"11:00",
                image:require("../assets/images/excursion-este.jpg"),
                guia:"si",
                idioma:"ingles",
                paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
                tipo_transp:"Bus",
                categoria:"Experiencia",
                isBookmark:true,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 3,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/autos_clasicos1.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 4,
                name:"Visita al mar",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/varadero.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 5,
                name:"Bailar con amigos",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/buceo.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            }
        ]
    },
    {
        id: 2,
        name: "Pinar del Rio",
        image: require("../assets/images/excursion-este.jpg"),//require("../assets/images/india/india_map.png"),
        places: [
            {
                id: 1,
                name:"Escuelas de Salsa",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"11:30",
                image:require("../assets/images/salsa.jpg"),
                guia:"si",
                idioma:"aleman",
                alojamiento:"no incluido",
                tipo_mp:"no",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Bus",
                categoria:"Experiencia",
                isBookmark:false,
                provincia: "Pinar del Rio",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 15.498931,
                    longitude: 73.767945,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 2,
                name:"Explora nuestras costas",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"14:30",
                image:require("../assets/images/excursion3.jpg"),
                guia:"si",
                idioma:"ingles",
                alojamiento:"no incluido",
                tipo_mp:"no",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Bus",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Pinar del Rio",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 26.928055,
                    longitude: 75.788295,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

                /*hotels: [
                    {
                        id: "1",
                        name: "Umaid Mahal",
                        image: require("../assets/images/india/jaipur/umaid_mahal.webp"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 26.927940,
                            longitude: 75.789056,
                        },
                    },
                ]*/
            },
            {
                id: 3,
                name:"Senderimo",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"10:30",
                image:require("../assets/images/senderismo.jpg"),
                guia:"si",
                idioma:"ingles",
                alojamiento:"no incluido",
                tipo_mp:"no",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Bus",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 27.168123,
                    longitude: 78.049032,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                }

                /*hotels: [
                    {
                        id: "1",
                        name: "The Oberoi Amarvilas",
                        image: require("../assets/images/india/agra/the_oberoi_amarvilas.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 27.168123,
                            longitude: 78.049032,
                        },
                    },
                ]*/
            },
            {
                id: 4,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/autos_clasicos1.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 5,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/excursion-bici.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },
                /*hotels: [
                    {
                        id: "1",
                        name: "Sunrise Gurney",
                        image: require("../assets/images/malaysia/penang/sunrise_gurney.jpg"),
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
                        image: require("../assets/images/malaysia/penang/sunrise_gurney_homestay.jpg"),
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
                        image: require("../assets/images/malaysia/penang/evergreen_laurel_hotel_penang.jpg"),
                        rate: 5,
                        price: 199,
                        latlng: {
                            latitude: 5.431288,
                            longitude: 100.317898,
                        },
                    },
                ]*/
            }
        ]
    },
    {
        id: 3,
        name: "Santiago de Cuba",
        image:require("../assets/images/senderismo.jpg"),// require("../assets/images/indonesia/indonesia_map.png"),
        places: [
            {
                id: 1,
                name:"Andar la Habana en bici",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"10:30",
                image:require("../assets/images/buceo.jpg"),
                guia:"si",
                idioma:"ingles",
                paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
                tipo_transp:"Bicicleta",
                categoria:"Experiencia",
                isBookmark:true,
                provincia:"Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 1.557177,
                    longitude: 110.351902,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 2,
                name:"Al Este de la Habana",
                desde:"2021-01-15",
                hasta:"2021-01-23",
                hora:"11:00",
                image:require("../assets/images/excursion-este.jpg"),
                guia:"si",
                idioma:"ingles",
                paradas:["Habana-Conejito","Conejito-Matanzas","Matanzas-Varadero"],
                tipo_transp:"Bus",
                categoria:"Experiencia",
                isBookmark:true,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 3.135662,
                    longitude: 101.687128,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 3,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/bus.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 4,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/excursion4.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            },
            {
                id: 5,
                name:"Old timer",
                desde:"2021-03-05",
                hasta:"2021-01-10",
                hora:"10:00",
                image:require("../assets/images/excursion5.jpg"),
                guia:"no",
                idioma:"no",
                alojamiento:"incluido",
                tipo_mp:"TI",
                paradas:["Habana-San Luis","San Luis-Arrollo","Arrollo-Mantua"],
                tipo_transp:"Auto",
                categoria:"Tour turistico",
                isBookmark:false,
                provincia: "Habana",
                telefono:"+5378308976",
                descripcion:"Este tour esta ideado para visitar varios puntos de la Habana, con el objetivo de mostrar los lugares mas bellos de la Habana.",
                mapInitialRegion: {
                    latitude: 5.432068,
                    longitude: 100.317376,
                    latitudeDelta: 0.0053,
                    longitudeDelta: 0.0044
                },

            }
        ]
    },
]

const dummyData = { countries };

export default dummyData;