import {StyleSheet} from 'react-native';

import {pagaloopColors} from '../../../styles/pagaloopColors';
import {poppinsTypography} from '../../../styles/poppinsTypography';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    padding: 10,
    marginRight: 10,
  },
  containerInput: {
    marginTop: 10,
    height: 'auto',
  },
  noAccountText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    color: '#D9D9D9',
    fontSize: 16,
    marginBottom: 10,
  },
  huellaText: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '600',
    color: 'white',
    fontSize: 14,
    marginBottom: 40,
  },
  registerText: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 16,
    color: '#00CABA',
    textAlign: 'center',
  },
  registerTextUnderline: {
    textDecorationLine: 'underline',
  },
  containerCircle: {
    flex: 1,
    alignItems: 'center',
  },
  circleApple: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    backgroundColor: 'black',
  },
  circleGoogle: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    backgroundColor: 'transparent',
    borderColor: '#C4C4C4',
    borderStyle: 'solid',
    borderWidth: 1,
  },
  circleFacebook: {
    flex: 1,
    alignItems: 'center',
    borderRadius: 50,
    padding: 15,
    backgroundColor: '#1877F2',
  },
  socialNetworks: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonLogin: {
    marginTop: 30,
    marginBottom: 40,
  },
  card: {
    flexGrow: 1,
    backgroundColor: pagaloopColors.white,
    paddingTop: 16,
  },
  scrollContainer: {
    paddingHorizontal: 16,
    backgroundColor: '#073742',
  },
  brand: {
    alignSelf: 'center',
    marginBottom: 30,
  },
  huellaIcon: {
    alignSelf: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  peopleImage: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  subtitle: {
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  forgotPasswordContainer: {
    marginVertical: 16,
    paddingHorizontal: 16,
  },
  forgotPassword: {
    ...poppinsTypography.textField.regular,
    color: '#D9D9D9',
    fontWeight: '500',
    fontSize: 16,
    textAlign: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  lineDivider: {
    flex: 1,
    borderBottomWidth: 2,
    borderBottomColor: pagaloopColors.neutral.lightGray['900'],
  },
  labelDivider: {
    ...poppinsTypography.textField.semiBold,
    color: pagaloopColors.primary.darkPurple['900'],
    paddingHorizontal: 17,
  },
  mainContainer: {
    flex: 1,
  },
});
