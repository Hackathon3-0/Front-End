import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import Header from "../../components/Header";
import { useState } from "react";
import { BACKEND_URL } from "../../env";
import { useSelector } from "react-redux";

const Category = ({navigation}) => {
  const DATA = [
    {
      id: "İngilizce",
      blogName: "İngilizce",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Hafıza Egzersizleri",
      blogName: "Hafıza Egzersizleri",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Yazılım",
      blogName: "Yazılım",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Matematik",
      blogName: "Matematik",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Fizik",
      blogName: "Fizik",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Almanca",
      blogName: "Almanca",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Hızlı Okuma",
      blogName: "Hızlı Okuma",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },
    {
      id: "Genel Kültür",
      blogName: "Genel Kültür",
      img:"https://cdnstorage.sendbig.com/unreal/female.webp"

    },


  ];

  const [selectedIds, setSelectedIds] = useState([])

  const handleSelect = (id) => {
    if (!selectedIds) {
      setSelectedIds([id]);
    } else {
      const index = selectedIds.indexOf(id);
      if (index === -1) {
        setSelectedIds([...selectedIds, id]);
      } else {
        const updatedIds = [...selectedIds];
        updatedIds.splice(index, 1);
        setSelectedIds(updatedIds);
      }
    }
  }

  const user = useSelector((state) => state.user.user);
  const token = useSelector((state) => state.user.token);

  const handleCategory = async () => {
    const id= user._id
    console.log(selectedIds)
    const response = await fetch(`${BACKEND_URL}/api/v1/teachers/${id}/add-category`, {
      method: "PUT",
      headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify({ category: selectedIds }),
  });
  const data = await response.json();
  // navigation.navigate("BusinessBottomTab")
  console.log(data);
  }

  const renderItem = ({ item }) => (
    <TouchableOpacity
      className={` w-44  h-44 relative m-2 justify-center items-center shadow-sm shadow-griAcik 
      rounded-md bg-slate-200  ${selectedIds.includes(item.id) ? 'border-2 border-yesil ':null} `}
      activeOpacity={0.8}
      onPress={() => handleSelect(item.id)}
    >
      <Text className="text-center font-nunitoExtraBold text-xl text-black px-1">
        {item.blogName}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-[0.95] ">
      <Text className="font-nunitoExtraBold text-2xl text-center mt-2">Ne Öğrenmek İstersin ?</Text>
          <View className=" items-center">
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              className="h-[95%] "
            />
            <TouchableOpacity className="justify-center items-center bg-griAcik h-14 w-full absolute -bottom-10"
            onPress={handleCategory}>
              <Text className="text-yesil font-nunitoExtraBold text-lg">Haydi Öğrenmeye Başla</Text>
            </TouchableOpacity>
          </View>

    </View>
  );
};

export default Category;
