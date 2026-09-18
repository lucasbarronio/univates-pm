import { ActivityIndicator, Button, FlatList, Image, Pressable, ScrollView, StyleSheet, Switch, Text, TextInput, View} from 'react-native';
import { Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

const ITEMS = [
  { id: '1', name: 'Primeiro item' },
  { id: '2', name: 'Segundo item' },
  { id: '3', name: 'Terceiro item' },
];

export default function EstudosIndependentes2() {
  const [text, setText] = useState('');
  const [buttonMessage, setButtonMessage] = useState('Aguardando ação');
  const [pressed, setPressed] = useState(false);
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Estudos Independentes 2' }} />

      <FlatList
        data={ITEMS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles['list-item']}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListHeaderComponent={(
          <View>
            <Text style={styles.title}>Componentes básicos</Text>

            <View style={styles.section}>
              <Text style={styles['section-title']}>View</Text>
              <View style={styles['view-example']}>
                <Text>Esta View organiza o conteúdo da seção.</Text>
              </View>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>Text</Text>
              <Text>Este é um texto exibido pelo componente Text.</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>Image</Text>
              <Image
                style={styles.image}
                source={require('../../assets/favicon.png')}
              />
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>TextInput</Text>
              <TextInput
                style={styles.input}
                value={text}
                onChangeText={setText}
                placeholder="Digite uma mensagem"
              />
              <Text style={styles.result}>Texto digitado: {text || ''}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>Button</Text>
              <Button
                title="Testar botão"
                onPress={() => setButtonMessage('Botão pressionado')}
              />
              <Text style={styles.result}>{buttonMessage}</Text>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>Pressable</Text>
              <Pressable
                style={[styles.pressable, pressed && styles['pressable-active']]}
                onPress={() => setPressed(!pressed)}
              >
                <Text style={styles['pressable-text']}>
                  {pressed ? 'Pressable ativado' : 'Toque aqui'}
                </Text>
              </Pressable>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>Switch</Text>
              <Switch
                value={isEnabled}
                onValueChange={setIsEnabled}
              />
              <Text style={styles.result}>
                Estado: {isEnabled ? 'ligado' : 'desligado'}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>ScrollView</Text>
              <ScrollView horizontal contentContainerStyle={styles['scroll-content']}>
                <Text style={styles['scroll-item']}>Conteúdo 1</Text>
                <Text style={styles['scroll-item']}>Conteúdo 2</Text>
                <Text style={styles['scroll-item']}>Conteúdo 3</Text>
                <Text style={styles['scroll-item']}>Conteúdo 4</Text>
              </ScrollView>
            </View>

            <View style={styles.section}>
              <Text style={styles['section-title']}>FlatList</Text>
              <Text>Lista renderizada com dados separados:</Text>
            </View>
          </View>
        )}
        ListFooterComponent={(
          <View style={styles.section}>
            <Text style={styles['section-title']}>ActivityIndicator</Text>
            <ActivityIndicator size="large" color="#6b8e4e" />
          </View>
        )}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f3f0',
  },
  content: {
    padding: 16,
    gap: 12,
  },
  title: {
    color: '#1f1f1f',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  section: {
    backgroundColor: '#ffffff',
    borderColor: '#dfe3dc',
    borderRadius: 10,
    borderWidth: 1,
    gap: 10,
    marginBottom: 12,
    padding: 14,
  },
  'section-title': {
    color: '#273f28',
    fontSize: 17,
    fontWeight: 'bold',
  },
  'view-example': {
    backgroundColor: '#edf3e8',
    padding: 12,
  },
  image: {
    height: 64,
    width: 64,
  },
  input: {
    borderColor: '#bfcbb9',
    borderRadius: 6,
    borderWidth: 1,
    padding: 10,
  },
  result: {
    color: '#68756b',
  },
  pressable: {
    alignItems: 'center',
    backgroundColor: '#dfe7d5',
    padding: 12,
  },
  'pressable-active': {
    backgroundColor: '#9bb58b',
  },
  'pressable-text': {
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
  'scroll-content': {
    gap: 8,
  },
  'scroll-item': {
    backgroundColor: '#edf3e8',
    padding: 14,
  },
  'list-item': {
    backgroundColor: '#f8f7f4',
    borderColor: '#dfe3dc',
    borderWidth: 1,
    marginBottom: 8,
    padding: 12,
  },
});