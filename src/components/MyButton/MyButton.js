//react components
import React, {useEffect} from 'react';
import {
  View,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
//global
import {Colors, Constant, Images, ScreenNames} from 'global/Index';
//styles
import {styles} from './MyButtonStyle';
import MyText from '../MyText/MyText';

const MyButton = ({
  text,
  onPress,
  style = {},
  fontSize = 20,
  isBlueBg = false,
  isIcon = false,
}) => {
  // console.log('text textColor', text, textColor);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        style,
        isBlueBg ? {backgroundColor: Colors.BLUE} : null,
      ]}>
      <MyText
        text={text}
        fontSize={fontSize}
        fontFamily="medium"
        textColor={isBlueBg ? Colors.WHITE : Colors.BLUE}
        textAlign="center"
      />
    </TouchableOpacity>
  );
};

export default MyButton;
