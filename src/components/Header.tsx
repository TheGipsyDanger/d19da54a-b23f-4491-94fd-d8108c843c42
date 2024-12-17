import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HeaderClean = () => (
  <View style={styles.ContainerClean}>
    <View style={styles.ContentClean}>
      <View>
        <Text style={styles.University}>Estácio</Text>
        <Text style={styles.Course}>Direito</Text>
        <Text style={styles.Code}>2021 0910 1061</Text>
      </View>
      <View>
        <Image style={styles.Avatar} source={require("../../assets/my.jpg")} />
      </View>
    </View>
  </View>
);

const HeaderWithBackNavigation = ({ navigation }: any) => (
  <View>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Feather name={"arrow-left"} size={26} color="#144BC8" />
    </TouchableOpacity>
  </View>
);

export const HeaderCompose = ({ clickOne, navigation }: any) => (
  <View style={styles.ContainerCompose}>
    <View style={styles.ContentCompose}>
      <View>
        <TouchableWithoutFeedback onPress={clickOne}>
          <Image
            style={styles.AvatarComponse}
            source={require("../../assets/my.jpg")}
          />
        </TouchableWithoutFeedback>
        <Text style={styles.Name}>Renan Henrique Da Fonte Costa</Text>
      </View>
      <View style={styles.CenterInfos}>
        <Text style={styles.Code}>2021 0910 1061</Text>
        <Text style={styles.Email}>renan.henrique.fonte@gmail.com</Text>
        <Text style={styles.Phone}>(21) 99223-1184</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Cards")}
          style={styles.CardContainer}
        >
          <Feather name={"maximize-2"} size={22} color={"white"} />
          <Text style={styles.Card}>Acessar carterinha</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);

export const Header = {
  HeaderClean,
  HeaderWithBackNavigation,
  HeaderCompose,
};

const styles = StyleSheet.create({
  ContainerClean: {
    paddingTop: 32,
    justifyContent: "center",
    paddingHorizontal: 32,
    backgroundColor: "#144BC8",
    height: 200,
  },
  ContentClean: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  University: {
    color: "white",
    marginBottom: 8,
  },
  Course: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  Code: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  Avatar: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  ContainerCompose: {
    paddingTop: 60,
    paddingHorizontal: 32,
    backgroundColor: "#144BC8",
    flex: 1,
  },
  ContentCompose: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },
  AvatarComponse: {
    width: 80,
    height: 80,
    borderRadius: 50,
    alignSelf: "center",
    marginBottom: 24,
  },
  Name: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  CenterInfos: {
    justifyContent: "center",
    alignItems: "center",
  },
  Email: {
    color: "white",
    fontSize: 18,
    marginBottom: 8,
  },
  Phone: {
    color: "white",
    fontSize: 18,
    marginBottom: 32,
  },
  CardContainer: {
    height: 60,
    flexDirection: "row",
    alignItems: "center",
  },
  Card: {
    marginLeft: 8,
    color: "white",
    fontSize: 18,
  },
});
