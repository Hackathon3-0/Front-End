import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Başlangıç durumu
const initialState = {
  user:  false,
  token: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      state.user = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { updateToken, updateUser } = userSlice.actions;

export default userSlice.reducer;

// AsyncStorage'den verileri yüklemek için başlangıç fonksiyonu
export const loadInitialStateFromStorage = async (dispatch) => {
  try {
    const user = await AsyncStorage.getItem('user');
    const token = await AsyncStorage.getItem('token');
    
     // Değerler null değilse store'u güncelle
    if (user !== null) {
      dispatch(updateUser(JSON.parse(user)));
    } else {
      dispatch(updateUser(false));
    }
    if (token !== null) {
      dispatch(updateToken(token));
    } else {
      dispatch(updateToken(false));
    }
  } catch (error) {
    console.error('Error loading data from AsyncStorage:', error);
  }
};
