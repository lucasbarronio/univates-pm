import { Stack } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function FirstExam() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "1ª avaliação" }} />

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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  debug: {
    borderColor: '#d0d3cd',
    borderWidth: 2,
  },
  container: {
    backgroundColor: '#f4f3f0',
    flex: 1,
    gap: 20,
    paddingHorizontal: '6%',
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
    backgroundColor: '#dfe7d5',
    borderRadius: 50,
    height: 64,
    width: 64,
  },
  'box': {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderColor: '#dfe3dc',
    borderRadius: 20,
    borderWidth: 1,
    paddingVertical: 25,
    width: '100%',
  },
  'box-text': {
    color: '#1f1f1f',
    fontSize: 16,
  },
  'button': {
    alignItems: 'center',
    backgroundColor: '#6b8e4e',
    paddingHorizontal: 40,
    paddingVertical: 6,
  },
  'button-text': {
    color: '#ffffff',
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
    color: '#1f1f1f',
  },
  'heading-sub': {
    color: '#68756b',
    fontSize: 12,
    fontWeight: 300,
  }
});
