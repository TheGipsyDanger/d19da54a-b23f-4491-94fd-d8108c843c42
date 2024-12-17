import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { Header } from "../components";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <Header.HeaderClean />
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <FlatList
          style={{ paddingTop: 32 }}
          data={[{}]}
          renderItem={() => (
            <>
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginBottom: 16,
                  paddingHorizontal: 32,
                }}
              >
                Diciplinas
              </Text>
              <FlatList
                data={[
                  "Direito Civil",
                  "Direito Penal",
                  "Direito Administrativo",
                  "Direito Constitucional",
                ]}
                contentContainerStyle={{ paddingHorizontal: 32 }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View style={{ width: 16 }} />}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{ borderWidth: 1, borderRadius: 8, padding: 16 }}
                  >
                    <Text>{item}</Text>
                  </TouchableOpacity>
                )}
              />
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginTop: 32,
                  marginBottom: 16,
                  paddingHorizontal: 32,
                }}
              >
                Meu Curso
              </Text>
              <FlatList
                data={[
                  { label: "Notas", icon: "grid" },
                  { label: "Trabalhos", icon: "edit" },
                  { label: "Exercícios", icon: "book-open" },
                  { label: "Simulados", icon: "file" },
                ]}
                style={{ paddingHorizontal: 32 }}
                numColumns={2}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    style={{
                      borderColor: "#EAEAEA",
                      borderWidth: 1,
                      borderRadius: 8,
                      width: Dimensions.get("window").width / 2 - 48,
                      marginRight: 32,
                      marginTop: 16,
                      marginBottom: 16,
                      height: 150,
                      padding: 16,
                      justifyContent: "space-between",
                    }}
                  >
                    {/* @ts-ignore */}
                    <Feather name={item.icon} size={26} />
                    <Text>{item.label}</Text>
                  </TouchableOpacity>
                )}
              />
            </>
          )}
        />
      </View>
    </View>
  );
};
