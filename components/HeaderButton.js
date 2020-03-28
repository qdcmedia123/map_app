import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';


const CustomHeaderButton = props => {
    return <HeaderButton {...props} 
      IconComponent = {Ionicons} IconSize={40} Color = {Platform.OS === 'android' ? '' : 'white'}/>
}

export default CustomHeaderButton;