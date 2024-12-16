import React from "react";
import { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image, FlatList, Dimensions } from "react-native";

export const Financy = () => {
  const [isLoading, setIsLoading] = useState(true);

  useFocusEffect(
    useCallback(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
      return () => {};
    }, [])
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
      }}
    >
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
      <View style={{ paddingHorizontal: 32, marginTop: 32 }}>
        {isLoading ? (
          <ActivityIndicator color="#144BC8" size="large" />
        ) : (
          <Text
            style={{
              fontWeight: "600",
              fontSize: 18,
              marginBottom: 16,
            }}
          >
            Nenhuma pendência financeira
          </Text>
        )}
      </View>
    </View>
  );
};
