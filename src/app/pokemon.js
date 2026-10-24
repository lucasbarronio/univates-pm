import { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Pokemon() {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState({});
  const [error, setError] = useState("");

  async function get() {
    const slugName = name.trim().toLowerCase();
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${slugName}`);

    const data = await resposta.json();

    if (data.status === 404) {
      setError(`Pokémon não encontrado`);
      setPokemon({});
    } else {
      setError("");
      setPokemon(data);
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Pokedéx" }} />

      <TextInput
        style={styles.campo}
        value={name}
        onChangeText={setName}
        placeholder="Nome do Pokemón"
      />
      <Button title="Buscar" onPress={get} color={"#538532"} />

      <Text style={styles.erro}>{error}</Text>

      <View style={styles.result}>
        <Text style={styles['poke-name']}>{pokemon.name}</Text>
        <Text style={styles['poke-subinfo']}>{pokemon.height}</Text>
        <Text style={styles['poke-subinfo']}>{pokemon.weight}</Text>
        <Image source={{ uri: pokemon.sprites?.front_default ?? undefined }} style={styles['poke-thumb']} />
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
  'poke-name': {
    fontSize: 30,
    fontWeight: "600",
  },
  'poke-subinfo': {
    fontSize: 20
  },
  'poke-thumb': {
    width: "100%",
    height: 320
  },
  'result': {
    flex: 1,
    alignItems: "center",
    width: "100%"
  }
});