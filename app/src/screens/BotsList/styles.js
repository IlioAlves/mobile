import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  contentCenter: {
    flex: 1,
    backgroundColor: '#F5F8FA',
    justifyContent: 'center',
  },
  screen: {
    flex: 1,
    backgroundColor: '#E1E8ED',
  },
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    marginVertical: Dimensions.get('window').height / 60,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 50,
    overflow: 'hidden',
  },
  imagem: {
    marginBottom: 10,
  },
  nameProfile: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    marginLeft: 45,
  },
  names: {
    flex: 2,
    flexDirection: 'column',
    marginLeft: 5,
  },
  listContainer: {
    margin: 5,
    height: 75,
    padding: 10,
    width: Dimensions.get('window').width * 0.83,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 50,
  },
  list: {
    width: Dimensions.get('window').width * 0.85,
  },
  profile: {
    height: 65,
    width: 65,
    borderRadius: 100,
  },
  actions: {
    display: 'flex',
    marginTop: 15,
  },
  button: {
    width: 195,
    height: 35,
    marginTop: 10,
    backgroundColor: '#1DA1F2',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  headerList: {
    backgroundColor: '#282C34',
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
});
