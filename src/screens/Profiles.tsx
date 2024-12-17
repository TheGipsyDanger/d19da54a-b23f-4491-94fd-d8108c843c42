import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { Header } from "../components";

export const Profiles = ({ navigation }: any) => {
  const [showAlert, setShowAlert] = useState(0);

  useEffect(() => {
    if (showAlert === 10) {
      Alert.alert("Esse é nosso segredo", "Sorria e acene", [
        {
          text: "Fechar",
          onPress: () => setShowAlert(0),
          style: "cancel",
        },
      ]);
    }
  }, [showAlert]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Header.HeaderCompose
        navigation={navigation}
        clickOne={() => setShowAlert(showAlert + 1)}
      />
      <View style={{ flex: 1 }}>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 18,
            marginTop: 32,
            marginBottom: 16,
            paddingHorizontal: 32,
          }}
        >
          Meu Perfil
        </Text>
        <FlatList
          data={[
            { label: "Curso", icon: "grid" },
            { label: "Informações", icon: "edit" },
            { label: "Endereço", icon: "compass" },
            { label: "Contatos", icon: "at-sign" },
          ]}
          contentContainerStyle={{ paddingHorizontal: 32 }}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
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
      </View>
    </View>
  );
};
