import { Stack } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Styling() {
  return (
    <SafeAreaView style={{paddingHorizontal: '6%', gap: 20, backgroundColor: '#f5f5f3'}}>
      <Stack.Screen options={{ title: "Estilização" }} />

      <View style={styles['header-section']}>
        <Image
          style={styles.favicon}
          source={require('../../assets/favicon.png')}
        />

        <View style={styles['header-section__content']}>
          <Text style={[styles['h1-txt'], styles['txt-dark']]}>Olá, Estudante</Text>
          <Text style={[styles['sub-tx03-aula/styling.jst'], styles['txt-lgray']]}>Bem-vindo ao seu painel</Text>
        </View>
      </View>

      <Text style={[styles['txt-dark'], styles['body-txt']]}>Menu</Text>

      <View style={styles['menu-section']}>
        <TouchableOpacity style={styles['bg-blue']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>Notas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles['bg-green']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>Aulas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles['bg-purple']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>Avisos</Text>
        </TouchableOpacity>
      </View>

      <Text style={[styles['txt-dark'], styles['body-txt']]}>Próximas Atividades</Text>

      <ScrollView style={styles['task-section']}>
        <View style={[styles['task-card'], styles['task-card__base']]}>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Trabalho de Matemática</Text>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Entrega: 20/08</Text>
        </View>
        <View style={[styles['task-card'], styles['task-card__important']]}>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Prova de Física (Importante)</Text>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Data: 22/08</Text>
        </View>
        <View style={[styles['task-card'], styles['task-card__base']]}>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Leitura de História</Text>
          <Text style={[styles['txt-dark'], styles['sub-txt']]}>Cap: 3 e 4</Text>
        </View>
      </ScrollView>

      <Text style={[styles['txt-dark'], styles['body-txt']]}>Chamada para Ação</Text>
      <View style={styles['cta-section']}>
        <Text style={[styles['txt-dark'], styles['cta-txt']]}>Adquira um novo curso e continue aprendendo</Text>
        <TouchableOpacity style={styles['bg-purple']}>
          <Text style={[styles['txt-white'], styles['menu-item']]}>Comprar Curso</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'h1-txt': {
    fontSize: 26,
    fontWeight: 'bold'
  },
  'cta-txt': {
    textDecorationColor: '#1f1f1f',
    textDecorationLine: 'underline',
    fontWeight: '500',
    textAlign: 'center',
  },
  'sub-txt': {
    fontSize: 14
  },
  'body-txt': {
    fontSize: 16
  },
  'txt-white': {
    color: '#ffffff'
  },
  'txt-lgray': {
    color: '#68756b'
  },
  'txt-dark': {
    color: '#1f1f1f'
  },
  'txt-black': {
    color: '#111111'
  },
  'task-card': {
    padding: 10,
    alignItems: 'flex-start',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    height: 100,
    marginBottom: 10,
  },
  'task-card__base': {
    backgroundColor: '#f8f7f4',
    borderColor: '#dfe3dc'
  },
  'task-card__important': {
    backgroundColor: '#edf3e8',
    borderColor: '#bfd4b4'
  },
  'task-section': {
    height: '30%',
  },
  'menu-item': {
    paddingHorizontal: 24,
    paddingVertical: 10,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  'menu-section': {
    gap: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  'bg-blue': {
    backgroundColor: '#5f6d5d'
  },
  'bg-purple': {
    backgroundColor: '#dfe7d5'
  },
  'bg-green': {
    backgroundColor: '#6b8e4e'
  },
  'header-section': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  'header-section__content': {
    flex: 1,
    paddingLeft: '5%'
  },
  'cta-section': {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
    paddingHorizontal: 20,
    gap: 20,
    backgroundColor: '#f2f1ee',
    borderColor: '#dfe3dc',
    borderRadius: 10,
    borderWidth: 1
  },
  'cta-button': {
    alignSelf: 'center',
    textTransform: 'uppercase'
  },
  'favicon': {
    width: 32,
    height: 32,
  },
});