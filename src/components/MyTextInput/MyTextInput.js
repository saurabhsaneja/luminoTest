//import : react components
import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, Image} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import {Colors} from 'global/Index';
// import {Feather} from 'global/MyIcon';

const MyTextInput = ({
  Title,
  value = '',
  inputRef,
  onChangeText,
  placeholder,
  fontSize = 14,
  secureTextEntry = false,
  placeholderTextColor = '#C0C0C0',
  borderColor = '#E0E0E0',
  keyboardType = 'default',
  onSubmitEditing,
  editable = true,
  onTouchStart = () => {},
  backgroundColor = '#fff',
  style = {},
  textInputstyle = {},
  maxLength = 300,
}) => {
  const [look, setLook] = useState(false);
  return (
    <View
      style={{
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        // justifyContent: 'space-between',
        width: '100%',
        borderRadius: 5,
        backgroundColor,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 5,
        shadowOpacity: 0.05,
        elevation: 2,
        ...style,
      }}>
      <TextInput
        ref={inputRef}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        secureTextEntry={
          !secureTextEntry ? false : look ? !secureTextEntry : secureTextEntry
        }
        editable={editable}
        onTouchStart={onTouchStart}
        keyboardType={keyboardType}
        maxLength={maxLength}
        onSubmitEditing={onSubmitEditing}
        style={{
          padding: 10,
          paddingLeft: 20,
          borderRadius: 5,
          width: '72%',
          height: 58,
          fontSize: fontSize,
          // color: '#455A64',
          color: Colors.BLACK,
          ...textInputstyle,
        }}
      />
    </View>
  );
};

export default MyTextInput;
