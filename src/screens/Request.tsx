import React from "react";
import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";

export const Request = () => {
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
      <Text
        style={{
          paddingTop: 32,
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
          {
            title: "Troca de Curso",
            description:
              "Solicitar a troca de curso para [nome do curso desejado], em razão de [motivo específico, como afinidade com a área ou mudança de interesse acadêmico]. Após uma análise criteriosa de minhas aptidões e objetivos profissionais, acredito que essa mudança contribuirá significativamente para o meu desenvolvimento acadêmico e futuro profissional.",
          },
          {
            title: "Adição de Disciplinas",
            description:
              "A adição dessas matérias é necessária para que eu possa [justificar o motivo: adiantar a grade, cumprir pré-requisitos ou recuperação de créditos pendentes], visando um melhor aproveitamento do meu curso e a conclusão dentro do prazo esperado.",
          },
          {
            title: "Informação de Ausência",
            description:
              "Estou ciente das atividades e responsabilidades acadêmicas durante esse período e comprometo-me a regularizar todas as pendências e tarefas assim que retornar. Caso necessário, estarei disponível para esclarecimentos e alinhamento sobre o conteúdo perdido.",
          },
        ]}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        ItemSeparatorComponent={() => <View style={{ height: 32 }} />}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderRadius: 8,
              padding: 16,
              opacity: index === 0 ? 1 : 0.4,
            }}
          >
            <Text style={{ marginBottom: 8, fontWeight: "bold" }}>
              {item.title}
            </Text>
            <Text numberOfLines={2}>{item.description}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
