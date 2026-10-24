import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cnpj() {
  const [cnpj, setCnpj] = useState("");
  const [cnpjData, setCnpjData] = useState({});
  const [error, setError] = useState("");

  async function get() {
    const resposta = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`);

    const data = await resposta.json();

    if (data.status === "ERROR") {
      setError(`Erro na resposta: ${data.message}`);
      setCnpjData({});
    } else {
      setError("");
      setCnpjData(data);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "CNPJ" }} />

      <TextInput
        style={styles.campo}
        value={cnpj}
        onChangeText={setCnpj}
        placeholder="CNPJ (apenas números)"
        keyboardType="numeric"
        maxLength={14}
      />
      <Button title="Buscar" onPress={get} color={"#538532"} />

      <Text style={styles.erro}>{error}</Text>

      <View style={styles.result}>
        <Text style={styles['title']}>{cnpjData.nome}</Text>
        <Text style={styles['subinfo']}>{cnpjData.fantasia}</Text>
        <Text style={styles['subinfo']}>{cnpjData.municipio} {cnpjData.uf}</Text>
      </View>
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
  campo: {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe3dc",
    borderRadius: 12,
    padding: 12,
    fontSize: 16,
    marginBottom: 6,
  },
  erro: {
    marginTop: 16,
    color: "#B91C1C",
  },
  'title': {
    fontSize: 30,
    fontWeight: "600",
  },
  'subinfo': {
    fontSize: 20
  },
  'result': {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});