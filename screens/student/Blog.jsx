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

const Blog = () => {
  const DATA = [
    {
      id: "1",
      title: "Sağlıklı Yaşamın Sırları",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "2",
      title: "İyi Bir Uyku İçin 10 Öneri",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "3",
      title: "Sağlıklı Beslenme",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "4",
      title: "Sağlıklı Yaşamın Sırları",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "5",
      title: "İyi Bir Uyku İçin 10 Öneri",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "6",
      title: "Sağlıklı Beslenme",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "2",
      title: "İyi Bir Uyku İçin 10 Öneri",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "3",
      title: "Sağlıklı Beslenme",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "4",
      title: "Sağlıklı Yaşamın Sırları",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "5",
      title: "İyi Bir Uyku İçin 10 Öneri",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    },
    {
      id: "6",
      title: "Sağlıklı Beslenme",
      contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",

    }


  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      className=" w-44  h-44 relative m-2 justify-center items-center shadow-sm shadow-griAcik rounded-md bg-beyaz "
      activeOpacity={0.8}
    >
      {/* image */}
      <Image
        source={require("../../assets/cat.jpg")}
        className="rounded-md  w-44  h-44 absolute "
        fill="cover"
      />
      <View className="rounded-md bg-gri/60  w-44 h-44 absolute " />
      <Text className="text-center font-nunitoExtraBold text-xl text-beyaz px-1">
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View className="flex-[.86]">
      <Header />
          <View className=" items-center">
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              numColumns={2}
              
            />
          </View>
    </View>
  );
};

export default Blog;
