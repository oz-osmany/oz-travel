import React from 'react'
import { View,Text, Button } from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
//import {RootStackParamList} from '../RootStackParams';
import { ItiDetailScreen } from './ItiDetailScreen';

 type RootStackParamList = {
    ItiDetailScreen: undefined;
    Auth: undefined;
    };

type authScreenProp = StackNavigationProp<RootStackParamList, 'Auth'>;

export const OverviewScreen = () => {
    const navigation = useNavigation<authScreenProp>();

    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Auth Screen</Text>
        <Button title="Login" onPress={() => navigation.navigate('ItiDetailScreen')} />
      </View>
    );
  
  
}