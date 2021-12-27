import ImageColors from 'react-native-image-colors';



export const getImageColors = async( uri: string ) => {
    
    console.log(uri);
    
    const colors = await ImageColors.getColors(uri, {});

    let primary;
    let secondary;
    
    if (colors.platform === "android") {
        // Access android properties
        primary = colors.dominant;
        secondary = colors.average;
    } else {
        // Access iOS properties
        // e.g.
        /* primary = colors.primar;
        secondary = colors.secondary; */
    }

    return [primary, secondary];

}