import { useAnimation } from '../hooks/useAnimation';
import React, { useRef, useState } from 'react'
import { View, Text, Dimensions, Animated, TouchableOpacity } from 'react-native'
import Carousel, { Pagination }  from 'react-native-snap-carousel';

import { provincias } from '../API/api_provincias';
import { ProvinciasPoster } from '../components/ProdPoster';

const { width: windowWidth } = Dimensions.get('window');

export const TourScreen = () => {
    const [ activeIndex, setActiveIndex] = useState(0);
    const { opacity, fadeIn } = useAnimation();
    const isVisible = useRef(false);
    return (
        <View>
            <Carousel
                    data={ provincias }
                    renderItem={ ({ item }: any) => <ProvinciasPoster infoProvincia={ item } activo={activeIndex}/> }
                    sliderWidth={ windowWidth }
                    itemWidth={ windowWidth }
                    // inactiveSlideOpacity={0.9}
                    layout="default"
                    onSnapToItem={ (index) => {
                        setActiveIndex(index);
                        if ( index === 2 ) {
                            isVisible.current = true;
                            fadeIn()
                        }
                    }}
                        />
             
           
        </View>
    )
}

