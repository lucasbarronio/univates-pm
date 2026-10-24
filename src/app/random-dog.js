import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function RandomDog() {
  const [dog, setDog] = useState("");
  const [error, setError] = useState("");

  async function get() {
    const resposta = await fetch(`https://dog.ceo/api/breeds/image/random`);

    const dados = await resposta.json();

    if (dados.status !== "success") {
      setError(`Erro na resposta: ${dados.status}`);
      setDog("");
    } else {
      setError("");
      setDog(dados.message);
    }
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Dog" }} />

      <Button title="Outro cachorro" onPress={get} color={"#538532"} />

      <Text style={styles.erro}>{error}</Text>

      <Image source={{ uri: dog ? dog : undefined }} style={{ width: "100%", height: 320 }} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'debug': {
    borderColor: '#fe0000',
    borderWidth: 2,
  },
  'container': {
    backgroundColor: "#f5f4f1",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
  },
  texto: {
    fontSize: 20
  }
});