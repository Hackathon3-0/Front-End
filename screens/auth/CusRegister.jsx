import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

import GoBackHeader from "../../components/GoBackHeader";
import { Input, Stack } from "native-base";
import DowlandImage from "../../components/DowlandImage";
import { Ionicons } from "@expo/vector-icons";

const CusRegister = ({ navigation }) => {

  const [show, setShow] = useState(false);

  return (
    <View className="flex-1 bg-beyazark ">
      {/* header */}
      <GoBackHeader title={"Öğretmen Kayıt"} />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 justify-center items-center ">
          {/* <View className="w-32 h-32 rounded-full">
            <DowlandImage
              values={{
                // image: "https://www.w3schools.com/w3images/avatar3.png",
                image:
                  "https://i.kym-cdn.com/entries/icons/facebook/000/023/980/db1.jpg",
              }}
            />
            <Text className="text-center mt-1 text-base text-yesil2 ark">
              Profil Fotoğrafı
            </Text>
          </View> */}

          <Stack space={2} w="80%" my="8" mx="auto" px={8}>
            <Input
              className=" bg-beyaz  text-[14px] text-gri "
              variant="filled"
              placeholder="Ad Soyad"
              shadow={1}
              maxLength={20}
            />
            <Input
              className=" bg-beyaz  text-[14px] text-gri  "
              variant="filled"
              placeholder="Email"
              keyboardType="email-address"
              shadow={1}
              maxLength={50}
            />

            <Input
              className=" bg-beyaz relative  text-[14px] text-gri  "
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
              className=" bg-beyaz  text-[14px] text-gri  "
              variant="filled"
              placeholder="Şifre yeniden"
              shadow={1}
              maxLength={20}
              secureTextEntry={!show}
            />
          </Stack>
          <TouchableOpacity
            className="w-[55%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-yesil "
            activeOpacity={0.7}
            onPress={() => navigation.navigate("VerificationCode")}
          >
            <Text className="font-semibold text-lg text-beyaz ">
              Devam Et
            </Text>
          </TouchableOpacity>
        </View>
        <View className="w-full items-center">
          <TouchableOpacity
            className="w-[80%] h-14 shadow shadow-yesil2 justify-center items-center rounded-md mb-4 bg-beyaz "
            activeOpacity={0.9}
            // onPress={() => {
            //   navigation.navigate("EmpProfile");
            // }}
            onPress={() => toggleColorScheme()}
          >
            <Text className="font-semibold text-lg text-gri ">
              Zaten bir hesabım var
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default React.memo(CusRegister);
