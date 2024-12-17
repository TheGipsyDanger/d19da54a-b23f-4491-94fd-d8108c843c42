import React from "react";
import { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import { Header } from "../components";

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
      <Header.HeaderClean />
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
