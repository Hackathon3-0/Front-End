import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import GoBackHeader from "../../components/GoBackHeader";
import { Input, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const BusRegister = ({ navigation }) => {
  
  const [show, setShow] = useState(false);

  return (
    <View className="flex-1 bg-beyazark dark:bg-yesil   ">
      {/* header */}
      <GoBackHeader title={"İşletme Kayıt"} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1  justify-center items-center ">
          <Stack space={2} w="80%" my="8" mx="auto" px={8}>
            <Input
              className=" bg-beyaz dark:bg-yesil2 text-[14px] text-yesil dark:text-beyaz"
              variant="filled"
              placeholder="İşletme Adı"
              shadow={1}
              maxLength={20}
            />
            <Input
              className=" bg-beyaz dark:bg-yesil2 text-[14px] text-yesil dark:text-beyaz "
              variant="filled"
              placeholder="Email"
              keyboardType="email-address"
              shadow={1}
              maxLength={50}
            />
            <Input
              className=" bg-beyaz dark:bg-yesil2 text-[14px] text-yesil dark:text-beyaz "
              variant="filled"
              placeholder="Telefon numarası"
              keyboardType="phone-pad"
              shadow={1}
              maxLength={11}
            />
            <Input
              className=" bg-beyaz relative dark:bg-yesil2 text-[14px] text-yesil dark:text-beyaz "
              variant="filled"
              placeholder="Şifre"
              shadow={1}
              maxLength={20}
              secureTextEntry={!show}
              InputRightElement={
                <TouchableOpacity
                  onPress={() => setShow(!show)}
                  className="absolute right-2"
                >
                  <Ionicons
                    name={show ? "eye-off" : "eye"}
                    size={24}
                    color={"#3a3a3a"}
                  />
                </TouchableOpacity>
              }
            />
            <Input
              className=" bg-beyaz dark:bg-yesil2 text-[14px] text-yesil dark:text-beyaz "
              variant="filled"
              placeholder="Şifre yeniden"
              shadow={1}
              maxLength={20}
              secureTextEntry={!show}
            />
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-beyaz dark:bg-yesil2"
            activeOpacity={0.7}
            onPress={() => navigation.navigate("BusRegisterContinue")}
          >
            <Text className="font-semibold text-lg text-yesil2 dark:text-beyaz">
              Devam Et
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full items-center">
          <TouchableOpacity
            className="w-[80%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-beyaz dark:bg-yesil2"
            activeOpacity={0.9}
            // onPress={() => {
            //   navigation.navigate("EmpProfile");
            // }}
            onPress={() => toggleColorScheme()}
          >
            <Text className="font-semibold text-lg text-yesil2 dark:text-beyaz">
              Zaten bir hesabım var
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default React.memo(BusRegister);
