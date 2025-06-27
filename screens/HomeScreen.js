import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen({ navigation }) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('userToken');
    navigation.replace('Login');
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-100 px-6">
      <Text className="text-3xl font-bold text-blue-700 mb-8">Welcome!</Text>
      <Text className="text-lg mb-8">You are now logged in.</Text>
      <TouchableOpacity className="bg-blue-700 rounded w-full py-4" onPress={handleLogout}>
        <Text className="text-white text-center font-bold">Logout</Text>
      </TouchableOpacity>
    </View>
  );
} 