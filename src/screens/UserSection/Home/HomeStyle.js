import {Colors} from 'global/Index';
import {StyleSheet} from 'react-native';
import {height} from '../../../global/Constant';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.THEME_WHITE,
  },
  mainView: {
    padding: 17,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    width: '100%',
    marginBottom: 10,
    fontSize: 15,
    color: Colors.BLACK,
  },
  checkbox: {
    height: 20,
    width: 20,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImg: {
    height: 100,
    width: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  searchIconStyle: {
    height: 30,
    width: 30,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
