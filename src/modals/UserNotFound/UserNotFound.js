//import : react components
import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Keyboard,
  ImageBackground,
  Image,
  ScrollView,
  Share,
  Alert,
  Modal
} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : third parties
// import Modal from 'react-native-modal';
import Toast from 'react-native-simple-toast';
//import : global
import {Colors, MyIcon, ScreenNames, Service} from 'global/Index';
//import : styles
import {styles} from './UserNotFoundStyle';
import MyButton from '../../components/MyButton/MyButton';
import {height, width} from '../../global/Constant';
//
const UserNotFound = ({visible, setVisibility}) => {
  //variables
  //variables : redux variables
  //states
  //function : modal function
  const closeModal = () => {
    setVisibility(false);
  };
  //UI
  return (
    <Modal
      visible={visible}
      onRequestClose={closeModal}
      animationType="fade"
      transparent>
      <View style={styles.container}>
        <TouchableOpacity style={styles.blurView} onPress={closeModal} />
        <View style={styles.mainView}>
          <Image source={require('assets/images/not-found.png')} />
        <View style={{height: 30}} />
      </View>
      </View>
    </Modal>
  );
};

export default UserNotFound;
