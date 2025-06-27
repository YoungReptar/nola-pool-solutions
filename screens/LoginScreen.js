import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // For demo: accept any non-empty email/password
    if (email && password) {
      await AsyncStorage.setItem('userToken', 'demo-token');
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-100 px-6">
      <Text className="text-3xl font-bold text-blue-700 mb-8">Welcome to NOLA Pool Solutions</Text>
      <TextInput
        className="w-full bg-white rounded p-4 mb-4 border border-blue-200"
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        className="w-full bg-white rounded p-4 mb-4 border border-blue-200"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity className="bg-blue-700 rounded w-full py-4 mb-4" onPress={handleLogin}>
        <Text className="text-white text-center font-bold">Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text className="text-blue-700 underline">Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
} 