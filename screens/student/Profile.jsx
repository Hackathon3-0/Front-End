import { View, Text, TouchableOpacity } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { updateToken,updateUser } from '../../redux/userSlice';

const Profile = () => {

  const dispatch = useDispatch();
  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("user");
    dispatch(updateToken(false));
    dispatch(updateUser(false));
  }
  return (
    <View>
      <TouchableOpacity onPress={logOut}>
        <Text>Çıkış yap</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile