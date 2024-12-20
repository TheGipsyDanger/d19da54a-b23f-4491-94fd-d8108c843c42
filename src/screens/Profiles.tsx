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
import { useUserStore } from "../store/user";

export const Profiles = ({ navigation }: any) => {
  const { users, setUserToUse } = useUserStore();
  const [showAlert, setShowAlert] = useState(0);

  useEffect(() => {
    if (showAlert === 10) {
      Alert.alert("Troque o usuário", "", [
        {
          text: "Fechar",
          onPress: () => setShowAlert(0),
          style: "cancel",
        },
        ...users.map((user) => ({
          text: user,
          onPress: () => {
            setUserToUse(user);
            setShowAlert(0);
          },
        })),
      ]);
    }
  }, [showAlert]);

  const press = () => {
    setShowAlert(showAlert + 1);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <Header.HeaderCompose navigation={navigation} clickOne={press} />
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
