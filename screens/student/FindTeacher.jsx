import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Header from "../../components/Header";
import { FontAwesome } from "@expo/vector-icons";
import { Stack, Input, Avatar } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

const FindTeacher = () => {
  const [searchText, setSearchText] = React.useState("");
  return (
    <View className="flex-1 items-center ">
      <Header />
      <Stack space={14} w="100%" my="2" mx="auto" px={8}>
        <Input
          className=" bg-beyaz text-[14px] items-center justify-center text-gri"
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

      <View className="w-[80%] bg-white  rounded-3xl p-2">
        <View className="flex flex-row gap-x-2">
          <Avatar
            bg="green.500"
            size="md"
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
          >
            AJ
          </Avatar>
          <View>
            <Text className="font-nunitoExtraBold text-lg text-yesil">
              Ali Ertuğrul
            </Text>
            <Text className="font-nunitoExtraBold text-xs">
              Felsefe Öğretmeni
            </Text>
          </View>
        </View>
        <Text className="font-bold">
          Felsefe konusunda size kapsamlı ders verebilirim. İstediğiniz zaman
          istediğiniz soruyu sorabilirsiniz. Ayrıca 7/24 aktifim
        </Text>
      </View>
    </View>
  );
};

export default FindTeacher;
