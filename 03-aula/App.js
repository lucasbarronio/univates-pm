import { StatusBar } from 'expo-status-bar';
import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={{paddingVertical: '12%', paddingHorizontal: '6%', gap: 20}}>
      <View style={styles['header-section']}>
        <Image
          style={styles.favicon}
          source={require('./assets/favicon.png')}
        />

        <View style={styles['header-section__content']}>
          <Text style={[styles['h1-txt'], styles['txt-dark']]}>Olá, Estudante</Text>
          <Text style={[styles['sub-txt'], styles['txt-lgray']]}>Bem-vindo ao seu painel</Text>
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

    </View>
  );
}

const styles = StyleSheet.create({
  'h1-txt': {
    fontSize: 26,
    fontWeight: 'bold'
  },
  'cta-txt': {
    textDecorationColor: 'black',
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
    color: '#FFF'
  },
  'txt-lgray': {
    color: '#A3A3A3'
  },
  'txt-dark': {
    color: '#292929'
  },
  'txt-black': {
    color: '#000'
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
    backgroundColor: '#f4f4f4',
    borderColor: '#c9c7c7'
  },
  'task-card__important': {
    backgroundColor: '#d2f5f8',
    borderColor: '#72d7e0'
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
    backgroundColor: '#00326a'
  },
  'bg-purple': {
    backgroundColor: '#4c006a'
  },
  'bg-green': {
    backgroundColor: '#096a00'
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
    backgroundColor: '#f4f4f4',
    borderColor: '#c9c7c7',
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