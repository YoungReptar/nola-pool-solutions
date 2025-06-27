import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Switch } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUpScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [offers, setOffers] = useState(false);

  const handleSignUp = async () => {
    if (email && password) {
      // Save email for offers if opted in
      if (offers) {
        await AsyncStorage.setItem('offersEmail', email);
      }
      await AsyncStorage.setItem('userToken', 'demo-token');
      navigation.replace('Home');
    } else {
      Alert.alert('Error', 'Please enter email and password');
    }
  };

  return (
    <View className="flex-1 justify-center items-center bg-blue-100 px-6">
      <Text className="text-3xl font-bold text-blue-700 mb-8">Sign Up</Text>
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
      <View className="flex-row items-center mb-4 w-full">
        <Switch value={offers} onValueChange={setOffers} />
        <Text className="ml-2">Receive discounts and offers</Text>
      </View>
      <TouchableOpacity className="bg-blue-700 rounded w-full py-4 mb-4" onPress={handleSignUp}>
        <Text className="text-white text-center font-bold">Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-blue-700 underline">Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
} 