import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles['header-section']}>
        <View style={styles['circle']}></View>

        <View style={styles['header-section__content']}>
          <Text style={styles['heading']}>React Native</Text>
          <Text style={styles['heading-sub']}>Avaliação do dia 04/09</Text>
        </View>
      </View>

      <View style={styles['main-content']}>
        <View style={styles['box']}>
          <Text style={styles['box-text']}>Batatas são macias.</Text>
        </View>

        <TouchableOpacity style={styles['button']}>
          <Text style={styles['button-text']}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  debug: {
    borderColor: 'red',
    borderWidth: 2,
  },
  container: {
    backgroundColor: '#dfdfdf',
    flex: 1,
    gap: 20,
    paddingHorizontal: '6%',
    paddingVertical: '12%',
  },
  'header-section': {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  'header-section__content': {
    paddingLeft: '5%',
  },
  'circle': {
    backgroundColor: '#408fe9',
    borderRadius: 50,
    height: 64,
    width: 64,
  },
  'box': {
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderColor: '#bdbcbc',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 25,
    width: '100%',
  },
  'box-text': {
    color: '#000',
    fontSize: 16,
  },
  'button': {
    alignItems: 'center',
    backgroundColor: '#408fe9',
    paddingHorizontal: 40,
    paddingVertical: 6,
  },
  'button-text': {
    color: '#FFF',
    fontSize: 16,
    textTransform: 'uppercase'
  },
  'main-content': {
    alignItems: 'center',
    flex: 1,
    gap: 30,
    justifyContent: 'center',
  },
  'heading': {
    fontSize: 20,
    fontWeight: 700,
  },
  'heading-sub': {
    color: '#9b9b9b',
    fontSize: 12,
    fontWeight: 300,
  }
});
