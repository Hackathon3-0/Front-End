import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

import GoBackHeader from "../../components/GoBackHeader";
import { Input, Stack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const BusRegister = ({ navigation }) => {

  const [show, setShow] = useState(false);

  return (
    <View className="flex-1 bg-beyazark dark:bg-yesil ">
      {/* header */}
      <GoBackHeader title={"Giriş Yap"} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1  justify-center items-center ">
          <Image
            source={require("../../assets/ducky.png")}
            className="w-52 h-20 mb-8"
            resizeMode="contain"
          />

          <Stack space={2} w="80%" my="8" mx="auto" px={8}>
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
            <View className="w-full items-end">
              <TouchableOpacity
                onPress={() => navigation.navigate("RenewPassword")}
              >
                <Text className=" text-yesil2 dark:text-beyaz">
                  Şifreyi sıfırla
                </Text>
              </TouchableOpacity>
            </View>
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-beyaz dark:bg-yesil2"
            activeOpacity={0.7}
            // onPress={() => navigation.navigate()}
          >
            <Text className="font-semibold text-lg text-yesil2 dark:text-beyaz">
              Devam Et
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full items-center">
          <TouchableOpacity
            className="w-[80%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-8 bg-beyaz dark:bg-yesil2"
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate("AuthEntryQuestion");
            }}
          >
            <Text className="font-semibold text-lg text-yesil2 dark:text-beyaz">
              Kaydın yok mu? Kayıt ol
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default React.memo(BusRegister);
