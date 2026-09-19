import { Stack } from 'expo-router';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Hooks() {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: "Hooks e Estados" }} />

      <View style={styles['header-section']}>
        <Text style={styles['heading']}>Contador</Text>
      </View>

      <View style={styles['counter-section']}>
        <View style={styles['counter-button']}>
          <Button
            title="-"
            onPress={() => setCount(count - 1)}
            color="#853A32"
          />
        </View>

        <Text style={styles['counter-value']}>{count}</Text>

        <View style={styles['counter-button']}>
          <Button
            title="+"
            onPress={() => setCount(count + 1)}
            color="#538532"
          />
        </View>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'debug': {
    borderColor: '#d0d3cd',
    borderWidth: 2,
  },
  'container': {
    backgroundColor: "#f3f2ee",
    flex: 1,
    gap: 20,
    paddingHorizontal: '20%',
  },
  'header-section': {
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffffff',
    borderColor: '#e6e3dd',
    borderRadius: 10,
    borderWidth: 1,
    gap: 10
  },
  'heading': {
    fontSize: 46,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: '#1f1f1f',
  },
  'counter-section': {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  'counter-value': {
    fontSize: 60,
    fontWeight: 600,
    color: '#5e665a'
  },
  'counter-button': {
    width: 64,

  }
});
