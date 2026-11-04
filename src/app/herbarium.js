import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";

export default function Herbarium() {
  const [plants, setPlants] = useState([]);
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("");
  const [habitat, setHabitat] = useState("");
  const [message, setMessage] = useState("");
  const PLANT_API_ENDPOINT = "https://6aea2ee43d3dd3d37be6338e.mockapi.io/plant";

  function cleanInputs() {
    setCommonName("");
    setScientificName("");
    setDescription("");
    setFamily("");
    setHabitat("");
  }

  async function get() {
    const response = await fetch(PLANT_API_ENDPOINT);
    const data = await response.json();

    if (data.length === 0) {
      setMessage("Nenhuma planta disponível no herbário");
      setPlants([]);
    } else {
      setMessage("");
      setPlants(data);
    }
  }

  async function save() {

    if (commonName === "" || scientificName === "" || description === "" || habitat === "" || family === "") {
      setMessage("Preencha os campos.");
      return;
    }

    await fetch(PLANT_API_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        commonName: commonName,
        scientificName: scientificName,
        description: description,
        family: family,
        habitat: habitat
      }),
    });
    cleanInputs();
    get();
  }

  useEffect(() => {
    get();
  }, []);

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "Herbário" }} />

      <View style={styles.form}>
        <TextInput
          style={styles.field}
          value={commonName}
          onChangeText={setCommonName}
          placeholder="Nome popular..."
          placeholderTextColor="#7b827a"
          autoFocus={true}
        />

        <TextInput
          style={styles.field}
          value={scientificName}
          onChangeText={setScientificName}
          placeholder="Nome científico..."
          placeholderTextColor="#7b827a"
        />

        <TextInput
          style={styles.field}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição..."
          placeholderTextColor="#7b827a"
        />

        <TextInput
          style={styles.field}
          value={family}
          onChangeText={setFamily}
          placeholder="Família..."
          placeholderTextColor="#7b827a"
        />

        <TextInput
          style={styles.field}
          value={habitat}
          onChangeText={setHabitat}
          placeholder="Habitat..."
          placeholderTextColor="#7b827a"
        />
      </View>

      <View>
        <View style={styles["button-wrapper"]}>
          <Button title="Publicar" onPress={save} color="#538532" />
        </View>
        <View style={styles["button-wrapper"]}>
          <Button title="Atualizar" onPress={get} color={"#314a3a"} />
        </View>
      </View>

      <Text style={styles.message}>{message}</Text>

      <FlatList style={styles.list}
        data={plants}
        renderItem={({ item }) => (
          <View style={styles["item-wrapper"]}>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles["item"]}
            >
              <Text style={styles["item-text"]}>{item.commonName} / {item.scientificName}</Text>
              <Text style={styles["item-subtext"]}>{item.family}</Text>
              <Text style={styles["item-subtext"]}>{item.habitat}</Text>
              <Text style={styles["item-subtext"]}>{item.description}</Text>
            </ScrollView>
          </View>
        )}
      />
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
  'form': {
    alignItems: "stretch",
    flexDirection: "column",
    gap: 6,
  },
  'message': {
    marginTop: 16,
    color: "#B91C1C",
  },
  'field': {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe3dc",
    borderRadius: 10,
    width: "100%",
    padding: 12,
    fontSize: 16,
    color: "#1f1f1f",
  },
  'button-wrapper': {
    backgroundColor: "#6b8e4e",
    borderRadius: 10,
    marginTop: 10,
    overflow: "hidden",
  },
  'list': {
    flex: 1,
  },
  'item-wrapper': {
    marginBottom: 10,
    width: "100%",
  },
  'item': {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#6b8e4e",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    minHeight: 64,
    minWidth: "100%",
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 10,
  },
  'item-text': {
    color: "#1f1f1f",
    fontSize: 16,
  },
  'item-subtext': {
    marginBottom: 4,
    color: "#68756b",
    fontSize: 12,
  },
});