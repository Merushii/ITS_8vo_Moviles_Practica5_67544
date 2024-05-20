import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Bienvenido', { username: extractUsername(email) });
  };

  const extractUsername = (email) => {
    const username = email.split('@')[0];
    return username;
  };

  return (
    <LinearGradient colors={['steelblue', 'skyblue']} style={styles.container}>
      <Text style={styles.Titulo}>Test React Native + Expo</Text>
      <Text style={styles.Subtitulo}>Login</Text>
      <TextInput
        placeholder='Correo electrónico'
        style={styles.Login}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.Login}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleLogin}>
        <LinearGradient colors={['#0099FF', '#00FFFF']} style={styles.Boton}>
          <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'white' }}>Aceptar</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const WelcomeScreen = ({ route }) => {
  const { username } = route.params;
  return (
    <View style={styles.container}>
      <Text style={styles.Titulo}>¡Bienvenido {username}!</Text>
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Inicio" component={LoginScreen} />
        <Stack.Screen name="Bienvenido" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Titulo: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Subtitulo: {
    color: 'white',
    fontSize: 15,
    fontStyle: 'italic',
  },
  Login: {
    color: 'white',
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    paddingStart: 20,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
  },
  Boton: {
    padding: 15,
    marginTop: 40,
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 30,
  },
});
