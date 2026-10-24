import { useState } from "react";
import { Button, StyleSheet, Text, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Cep() {
  const [cep, setCep] = useState("");
  // Começa vazio: endereco.bairro é undefined e o texto não aparece.
  const [endereco, setEndereco] = useState({});
  const [erro, setErro] = useState("");

  // async: esta função vai esperar a internet (await).
  async function buscar() {
    // 1. Pede para a API. Teste a mesma URL no navegador.
    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    // 2. Transforma o texto da resposta em objeto.
    const dados = await resposta.json();

    // 3. CEP que não existe: a ViaCEP devolve { erro: "true" }.
    if (dados.erro) {
      setErro("CEP não encontrado.");
      setEndereco({});
    } else {
      setErro("");
      setEndereco(dados);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "CEP" }} />

      <TextInput
        style={styles.campo}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o CEP, só números"
        keyboardType="numeric"
      />
      <Button title="Buscar" onPress={buscar} color={"#538532"}/>

      <Text style={styles.erro}>{erro}</Text>
      <Text style={styles.titulo}>{endereco.logradouro}</Text>
      <Text style={styles.texto}>{endereco.bairro}</Text>
      <Text style={styles.texto}>
        {endereco.localidade}, {endereco.uf}
      </Text>
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
  titulo: {
    fontSize: 30,
    fontWeight: "600",
  },
  texto: {
    fontSize: 20
  }
});