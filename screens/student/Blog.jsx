import { View, Text, FlatList, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/Header";

const Blog = () => {
  // const DATA = [
  //   {
  //     id: "1",
  //     title: "First Item",
  //   },
  //   {
  //     id: "2",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "3",
  //     title: "Third Item",
  //   },
  // ];
  // const renderItem = ({ item }) => (
  //   <View className="flex-1 bg-beyaz ">
  //     <Text>Aİ</Text>
  //   </View>
  // );

  return (
    <View>
      <Header />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View className="mb-32">
          <Text className="text-3xl font-nunitoExtraBold text-yesil m-4 mb-2">
            Blog
          </Text>

          <View className="flex-wrap flex-row justify-center ">
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>
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
                Sağlıklı Beslenmenin Faydaları
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Blog;
