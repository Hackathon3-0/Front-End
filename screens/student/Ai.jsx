import { View, Text, Image ,FlatList,TouchableOpacity} from "react-native";
import React ,{useState}from "react";
import { Stack, Input, Avatar } from "native-base";
import Icon from "react-native-vector-icons/FontAwesome5";

const Ai = () => {
  const [messageList, setMessageList] = useState([]);
  const [message, setMessage] = useState("");

  const messageContent = {
    username:"user",
    message:message,
    date:new Date().toLocaleString()
}
  return (
    <View className="flex-1">
      <View className="p-4 flex-row">
        <Image
          className="w-20 h-14 "
          source={require("../../assets/ducky.png")}
          resizeMode="contain"
        />
        <View>
          <Text className="text-2xl font-nunitoBold">
            Merhaba{" "}
            <Text className="text-2xl font-nunitoBold text-yesil">Erkan</Text>
          </Text>
          <Text className=" font-nunitoBold">
            Sana Nasıl Yardımcı Olabilirim ?{" "}
          </Text>
        </View>
      </View>

      <View className="flex-1 justify-between">

{/*             <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              
            /> */}
          <View>
        <View className=" items-end mr-3 mb-2">
          <View className="bg-yesil shadow-md shadow-black w-64  rounded-2xl rounded-br-none ">
            <Text className="text-white text-[13px] p-2 font-nunitoBold">
              Selam ne yapıyorsunuz nasıl gidiyor hayat, ben bugün gelemeyeceğim
              galiba ya midem kötü hastaneye gideceğim kendimi iyi hisetmiyorum
            </Text>
          </View>
        </View>

        <View className=" ml-3 mb-2 flex-row">
          <View className="bg-white shadow-md shadow-black max-w-xs rounded-2xl rounded-bl-none ">
            <Text className="p-2 pt-1 pb-0 text-yesil text-end">Ducky</Text>
            <Text className="text-gri text-[13px] p-2 pt-0 font-nunitoBold">
              Selam ne yapıyorsunuz nasıl gidiyor hayat, ben bugün gelemeyeceğim
              galiba ya midem kötü hastaneye gideceğim kendimi iyi hisetmiyorum
              Selam ne yapıyorsunuz nasıl gidiyor hayat, ben bugün gelemeyeceğim
              galiba ya midem kötü hastaneye gideceğim kendimi iyi hisetmiyorum
            </Text>
          </View>
        </View>
        </View>

        <Stack space={14} w="100%" p="2" className="" mx="auto" px={8} >
        <Input
          className=" bg-beyaz text-[14px] items-center justify-center text-gri  "
          variant="rounded"
          placeholder="Mesaj Yaz"
          placeholderTextColor={"black"}
        />
      </Stack>


      </View>
    </View>
  );
};

export default Ai;
