import React from "react";
import { Header } from "../components";
import { View, Text, Image, Dimensions, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useUserStore } from "../store/user";

export const Card = ({ navigation }: any) => {
  const { user } = useUserStore();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: 80,
          marginHorizontal: 32,
        }}
      >
        <Header.HeaderWithBackNavigation navigation={navigation} />
        <Image
          style={{
            width: 100,
            height: 100,
            marginBottom: 24,
            borderRadius: 50,
            alignSelf: "center",
          }}
          source={{ uri: user.avatar }}
        />
        <View>
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              marginBottom: 60,
              textAlign: "center",
              fontSize: 16,
            }}
          >
            {user.name}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                flex: 1,
                color: "#8D8D8D",
                marginBottom: 8,
                fontSize: 12,
                fontWeight: "500",
              }}
            >{`CPF`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.document}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#8D8D8D",
                marginBottom: 8,
                fontSize: 12,
                fontWeight: "500",
              }}
            >{`Nascimento`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.birth}
            </Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#8D8D8D",
                marginBottom: 8,
                fontSize: 12,
                fontWeight: "500",
              }}
            >{`Matrícula`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.registration}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                color: "#8D8D8D",
                marginBottom: 8,
                fontWeight: "500",
                fontSize: 12,
              }}
            >{`Validade`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.valid}
            </Text>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 40,
          }}
        >
          <View>
            <Text
              style={{
                color: "#8D8D8D",
                marginBottom: 8,
                fontWeight: "500",
              }}
            >{`Curso (Ativo)`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.course}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 32,
          }}
        >
          <View>
            <Text
              style={{
                color: "#8D8D8D",
                fontSize: 12,
                marginBottom: 8,
                fontWeight: "500",
              }}
            >{`Campos`}</Text>
            <Text
              style={{
                fontWeight: "500",
                fontSize: 16,
              }}
            >
              {user.camps}
            </Text>
          </View>
        </View>
        {/*  */}
        <Image
          resizeMode="contain"
          style={{
            height: 80,
            width: Dimensions.get("screen").width / 3,
            alignSelf: "center",
          }}
          source={require("../../assets/logo.png")}
        />
        <Text
          style={{
            color: "#8D8D8D",
            marginBottom: 8,
            fontSize: 14,
            textAlign: "center",
            fontWeight: "500",
          }}
        >{`Válida mediante apresentação de\ndocumento com foto`}</Text>
      </View>
    </View>
  );
};
