import { useEffect, useState } from "react";
import { Button, ScrollView, StyleSheet, Text, TextInput, View, FlatList, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import MaterialIcons from "@react-native-vector-icons/material-icons";

const PLANT_API_ENDPOINT = "https://6aea2ee43d3dd3d37be6338e.mockapi.io/plant";

export default function Herbarium() {
  const [plants, setPlants] = useState([]);
  const [itemId, setItemId] = useState(0);
  const [commonName, setCommonName] = useState("");
  const [scientificName, setScientificName] = useState("");
  const [description, setDescription] = useState("");
  const [family, setFamily] = useState("");
  const [habitat, setHabitat] = useState("");
  const [message, setMessage] = useState("");

  function cleanInputs() {
    setItemId(0);
    setCommonName("");
    setScientificName("");
    setDescription("");
    setFamily("");
    setHabitat("");
  }

  async function edit(item) {
    setItemId(item.id);
    setCommonName(item.commonName);
    setScientificName(item.scientificName);
    setDescription(item.description);
    setFamily(item.family);
    setHabitat(item.habitat);
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

  async function remove(id) {
    await fetch(`${PLANT_API_ENDPOINT}/${id}`, {
      method: "DELETE"
    });

    get();
  }

  async function save() {

    if (commonName === "" || scientificName === "" || description === "" || habitat === "" || family === "") {
      setMessage("Preencha os campos.");
      return;
    }

    if (itemId === 0) {
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
    } else {
      await fetch(`${PLANT_API_ENDPOINT}/${itemId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          commonName: commonName,
          scientificName: scientificName,
          description: description,
          family: family,
          habitat: habitat
        }),
      });
    }

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
        <View style={styles["field"]}>
          <Text style={styles["field-label"]}>Nome popular</Text>
          <TextInput
            style={styles["field-input"]}
            value={commonName}
            onChangeText={setCommonName}
            placeholder="Nome popular..."
            placeholderTextColor="#7b827a"
            autoFocus={true}
          />
        </View>

        <View style={styles["field"]}>
          <Text style={styles["field-label"]}>Nome científico</Text>
          <TextInput
            style={styles["field-input"]}
            value={scientificName}
            onChangeText={setScientificName}
            placeholder="Nome científico..."
            placeholderTextColor="#7b827a"
          />
        </View>

        <View style={styles["field"]}>
          <Text style={styles["field-label"]}>Descrição</Text>
          <TextInput
            style={styles["field-input"]}
            value={description}
            onChangeText={setDescription}
            placeholder="Descrição..."
            placeholderTextColor="#7b827a"
          />
        </View>

        <View style={styles["field"]}>
          <Text style={styles["field-label"]}>Família</Text>
          <TextInput
            style={styles["field-input"]}
            value={family}
            onChangeText={setFamily}
            placeholder="Família..."
            placeholderTextColor="#7b827a"
          />
        </View>

        <View style={styles["field"]}>
          <Text style={styles["field-label"]}>Habitat</Text>
          <TextInput
            style={styles["field-input"]}
            value={habitat}
            onChangeText={setHabitat}
            placeholder="Habitat..."
            placeholderTextColor="#7b827a"
          />
        </View>
      </View>

      <View>
        <View style={styles["button-wrapper"]}>
          <Button title="Salvar" onPress={save} color="#538532" />
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
              <View style={styles["item-actions"]}>
                <TouchableHighlight
                  onPress={() => { edit(item) }}
                  style={styles["actions"]}
                  underlayColor="#4b5749"
                >
                  <View style={styles["action-edit"]}>
                    <MaterialIcons name="edit" size={22} color="#FFF" />
                  </View>
                </TouchableHighlight>
                <TouchableHighlight
                  onPress={() => { remove(item.id) }}
                  style={styles["actions"]}
                  underlayColor="#692d27"
                >
                  <View style={styles["action-delete"]}>
                    <MaterialIcons name="delete-outline" size={22} color="#FFF" />
                  </View>
                </TouchableHighlight>
              </View>
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
  'item-actions': {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  'actions': {
    alignItems: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    width: 36,
    height: 36,
  },
  'action-delete': {
    backgroundColor: '#853A32',
    borderRadius: 22,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'action-edit': {
    backgroundColor: '#5f6d5d',
    borderRadius: 22,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  'container': {
    backgroundColor: "#f5f4f1",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  'field': {
    gap: 2,
  },
  'field-input': {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe3dc",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    fontSize: 14,
    color: "#1f1f1f",
  },
  'field-label': {
    fontSize: 12,
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