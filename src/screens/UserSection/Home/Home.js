//react components
import React, {useEffect, useState} from 'react';
import {
  View,
  ImageBackground,
  TextInput,
  ScrollView,
  Image,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Vibration,
} from 'react-native';
import {CommonActions} from '@react-navigation/native';
//third parties
//custom components
import MyText from 'components/MyText/MyText';
import UserNotFound from 'modals/UserNotFound/UserNotFound';
//global
import {Colors, Constant, Images, ScreenNames, Service} from 'global/Index';
//styles
import {styles} from './HomeStyle';
import Toast from 'react-native-simple-toast';
import CustomLoader from '../../../components/CustomLoader/CustomLoader';
import MyButton from '../../../components/MyButton/MyButton';
import MyTextInput from '../../../components/MyTextInput/MyTextInput';
const Home = ({navigation}) => {
  //variables
  //states
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({});

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatar, setAvatar] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [isCheckboxSelected, setIsCheckboxSelected] = useState(false);

  const emptyUserData = () => {
    setUserData({});
    setEmail('');
    setFirstName('');
    setLastName('');
    setAvatar('');
    setUserNumber('');
  };
  const validateUserNumber = () => {
    if (userNumber === '') {
      Toast.show('Enter Number to search', Toast.SHORT);
      return false;
    } else if (
      userNumber !== '' &&
      isCheckboxSelected &&
      (Number(userNumber) > 10 || Number(userNumber) < 1)
    ) {
      Toast.show('User Number should be between 1 and 10', Toast.SHORT);
      Vibration.vibrate();
      openModal();
      emptyUserData();
      return false;
    } else if (
      userNumber !== '' &&
      (Number(userNumber) > 12 || Number(userNumber) < 1)
    ) {
      Toast.show('User Number should be between 1 and 12', Toast.SHORT);
      Vibration.vibrate();
      openModal();
      emptyUserData();
      return false;
    } else {
      return true;
    }
  };
  // service function to get user
  const getUser = async () => {
    if (!validateUserNumber()) {
      return;
    }
    try {
      setLoading(true);
      const resp = await Service.getApi(Service.GET_USER + userNumber);
      console.log('getUser resp', JSON.stringify(resp?.data?.data?.id));
      if (resp?.status === 200) {
        setUserData(resp?.data?.data);
        setEmail(resp?.data?.data?.email);
        setFirstName(resp?.data?.data?.first_name);
        setLastName(resp?.data?.data?.last_name);
        setAvatar(resp?.data?.data?.avatar);
      } else {
        Toast.show('Error in getUser', Toast.SHORT);
      }
    } catch (error) {
      console.log('Error in getUser');
    }
    setLoading(false);
  };
  // open modal
  const openModal = () => {
    setShowModal(true);
  };
  const changeCheckbox = value => {
    setIsCheckboxSelected(value);
  };
  //UI
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainView}>
          <View style={styles.searchContainer}>
            <TextInput
              style={[styles.input, {width: '90%'}]}
              value={userNumber}
              onChangeText={text => {
                setUserNumber(text);
              }}
              placeholder="Enter User number"
              placeholderTextColor="#C0C0C0"
            />
            <TouchableOpacity onPress={() => getUser()}>
              <Image
                source={require('assets/images/search-icon.png')}
                style={styles.searchIconStyle}
              />
            </TouchableOpacity>
          </View>
          {isCheckboxSelected ? (
            <View style={styles.checkboxRow}>
              <TouchableOpacity onPress={() => changeCheckbox(false)}>
                <Image
                  source={require('assets/images/selected-checkbox.png')}
                  style={styles.checkbox}
                />
              </TouchableOpacity>
              <MyText
                text={'1-10 only'}
                fontSize={16}
                fontFamily="bold"
                textColor={Colors.DARK_GREY}
                style={{marginLeft: 10}}
              />
            </View>
          ) : (
            <View style={styles.checkboxRow}>
              <TouchableOpacity onPress={() => changeCheckbox(true)}>
                <Image
                  source={require('assets/images/unselected-checkbox.png')}
                  style={styles.checkbox}
                />
              </TouchableOpacity>
              <MyText
                text={'1-10 only'}
                fontSize={16}
                fontFamily="bold"
                textColor={Colors.DARK_GREY}
                style={{marginLeft: 10}}
              />
            </View>
          )}
          <View style={{marginBottom: 10}} />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={text => {
              setEmail(text);
            }}
            placeholder="Email"
            placeholderTextColor="#C0C0C0"
          />
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={text => {
              setFirstName(text);
            }}
            placeholder="First Name"
            placeholderTextColor="#C0C0C0"
          />
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={text => {
              setLastName(text);
            }}
            placeholder="Email"
            placeholderTextColor="#C0C0C0"
          />
          <Image
            source={
              avatar
                ? {uri: avatar}
                : require('assets/images/images-default.png')
            }
            style={styles.userImg}
          />
        </View>
      </ScrollView>
      <CustomLoader showLoader={loading} />
      <UserNotFound visible={showModal} setVisibility={setShowModal} />
    </View>
  );
};
export default Home;
