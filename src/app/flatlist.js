import { Stack } from "expo-router";
import { Button, FlatList, StyleSheet, Text, TextInput, View } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function FlatListScreen() {
  const [description, setDescription] = useState("");
  const [list, setList] = useState([]);

  function addItemToList() {
    setList([...list, description]);
    setDescription("");
  }

  return (
    <SafeAreaView style={styles.container} edges={["bottom"]}>
      <Stack.Screen options={{ title: "FlatList" }} />

      <View style={styles.header}>
        <Text style={styles.title}>Minhas tarefas</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.field}
          value={description}
          onChangeText={setDescription}
          placeholder="Descrição..."
          placeholderTextColor="#7b827a"
        />

        <View style={styles["button-wrapper"]}>
          <Button title="Adicionar" onPress={addItemToList} color="#538532" />
        </View>
      </View>

      <FlatList style={styles.list}
        data={list}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text style={styles["item-text"]}>{item}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  'debug': {
    borderColor: '#d0d3cd',
    borderWidth: 2,
  },
  'container': {
    backgroundColor: "#f5f4f1",
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 24,
  },
  'header': {
    marginBottom: 20,
  },
  'title': {
    color: "#1f1f1f",
    fontSize: 26,
    fontWeight: "700",
    marginBottom: 4,
  },
  'subtitle': {
    color: "#68756b",
    fontSize: 14,
  },
  'form': {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
  'field': {
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderColor: "#dfe3dc",
    borderRadius: 10,
    flex: 1,
    padding: 12,
    fontSize: 16,
    color: "#1f1f1f",
  },
  'button-wrapper': {
    backgroundColor: "#6b8e4e",
    borderRadius: 10,
    overflow: "hidden",
  },
  'list': {
    flex: 1,
    marginTop: 24,
  },
  'item': {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#e1e4df",
    borderRadius: 12,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 10,
    minHeight: 64,
    paddingHorizontal: 14,
    paddingVertical: 12,
  },
  'item-text': {
    color: "#1f1f1f",
    flex: 1,
    fontSize: 15,
  },
});