import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';
import {height, width} from '../../global/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BLACK,
  },
  blurView: {
    flex: 1,
  },
  mainView: {
    padding: 20,
    margin: 20,
    backgroundColor: Colors.WHITE,
    borderRadius: 20,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
    backgroundColor: 'rgba(0,0,0,0.75)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  modalContent: {
    width: width,
    height: '30%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#545454',
  },
  deleteIconContainer: {
    alignSelf: 'flex-end',
    marginTop: 5,
    // position: 'absolute',
    // top: 10,
    // right: 10,
  },
  deleteIcon: {
    height: (40 * 192) / 204,
    width: 40,
  },
  mainImg: {
    width: '100%',
    height: height / 2,
    marginTop: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.THEME_WHITE,
    width: '100%',
    paddingHorizontal: 25,
    paddingVertical: 15,
    borderBottomColor: Colors.GREY,
    borderBottomWidth: 1,
  },
  logoLeftBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%',
  },
  logoRightBox: {
    width: '35%',
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  middleImageStyle: {
    width: width - 40,
    height: height / 2,
    borderRadius: 10,
    // marginTop: 10,
  },
  greyContainer: {
    backgroundColor: Colors.GREY,
    alignItems: 'center',
    paddingVertical: 20,
    width: '100%',
  },
});
