import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  Dimensions,
  Touchable,
  TouchableOpacity,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

export const Home = () => {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          paddingTop: 32,
          justifyContent: "center",
          paddingHorizontal: 32,
          backgroundColor: "#144BC8",
          height: 200,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ color: "white", marginBottom: 8 }}>Estácio</Text>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 8,
              }}
            >
              Direito
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
          </View>
          <View>
            <Image
              style={{ width: 60, height: 60, borderRadius: 50 }}
              source={require("../../assets/my.jpg")}
            />
          </View>
        </View>
      </View>
      {/* body */}
      <View style={{ flex: 1, backgroundColor: "white" }}>
        <View style={{ paddingTop: 32 }}>
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
          <FlatList
            ListHeaderComponent={() => (
              <Text
                style={{
                  fontWeight: "600",
                  fontSize: 18,
                  marginTop: 32,
                  marginBottom: 16,
                }}
              >
                Meu Curso
              </Text>
            )}
            data={[
              { label: "Notas", icon: "grid" },
              { label: "Trabalhos", icon: "edit" },
              { label: "Exercícios", icon: "book-open" },
              { label: "Simulados", icon: "file" },
            ]}
            contentContainerStyle={{ paddingHorizontal: 32 }}
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
        </View>
      </View>
    </View>
  );
};
