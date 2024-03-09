import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { Stack, Input, Avatar } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

import { FlatList } from "react-native";

const FindTeacher = ({ navigation }) => {
  const [searchText, setSearchText] = React.useState("");

  // flatList
  const DATA = [
    {
      id: "1",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
    {
      id: "2",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
    {
      id: "3",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
    {
      id: "4",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
    {
      id: "5",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
    {
      id: "6",
      name: "Elif Elibol",
      title: "Felsefe Öğretmeni",
      explanation:
        "Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman istediğiniz soruyu sorabilirsiniz. Ayrıca 7/ 24 aktifim",
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className="w-full bg-white  rounded-xl my-1   p-4"
      onPress={() => {
        navigation.navigate("TeacherDetail");
      }}
    >
      <View className="flex flex-row gap-x-2 ">
        <Avatar
          bg="green.500"
          className="w-16 h-16"
          source={{
            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          AJ
        </Avatar>
        <View className=" justify-center">
          <Text className="font-nunitoExtraBold text-2xl text-yesil">
            {item.name}
          </Text>
          <Text className="font-nunitoExtraBold text-gri text-sm">
            {item.title}
          </Text>
        </View>
      </View>
      <Text className="font-nunitoBold text-gri mt-2  ">
        {item.explanation}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 items-center  ">
      <Header />
      <Stack space={14} w="100%" mt="2" mx="auto" px={8}>
        <Input
          className=" bg-beyaz text-[14px] items-center justify-center text-gri "
          variant="rounded"
          placeholder="Eğitim Koçu Ara"
          placeholderTextColor={"black"}
          onChangeText={(text) => setSearchText(text)}
          value={searchText}
          InputRightElement={
            <TouchableOpacity className="justify-center items-center">
              <Icon
                className="w-12 justify-center items-center absolute right-0 bg-yesil h-full pt-[10px] pl-3"
                name="search"
                size={20}
                color={"black"}
              />
            </TouchableOpacity>
          }
        />
      </Stack>

      <View className="mx-2  h-full">
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default FindTeacher;
