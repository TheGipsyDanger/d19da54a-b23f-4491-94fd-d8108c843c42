import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Feather } from "@expo/vector-icons";

export const Profiles = ({ navigation }: any) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          paddingTop: 60,
          paddingHorizontal: 32,
          backgroundColor: "#144BC8",
          flex: 1,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            style={{ width: 60, height: 60, borderRadius: 50 }}
            source={require("../../assets/my.jpg")}
          />
          <Text
            style={{
              marginTop: 24,
              color: "white",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 32,
            }}
          >
            Renan Henrique Da Fonte Costa
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            2021 0910 1061
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginBottom: 8,
            }}
          >
            renan.henrique.fonte@gmail.com
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 18,
              marginBottom: 32,
            }}
          >
            (21) 99223-1184
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Cards")}
            style={{
              height: 60,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Feather name={"maximize-2"} size={22} color={"white"} />
            <Text
              style={{
                marginLeft: 8,
                color: "white",
                fontSize: 18,
              }}
            >
              Acessar carterinha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
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
