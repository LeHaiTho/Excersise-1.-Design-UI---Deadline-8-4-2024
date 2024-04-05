import { ImageBackground, StyleSheet, Image, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleLogin = () => {
    Alert.alert(`username: ${username} \npassword: ${password}`)
  }

  return (
    <ImageBackground style={styles.container}
      source={require('./assets/images/background.jpg')}
    >
      <Image source={require('./assets/images/logo-bg.jpg')}
        style={{ paddingHorizontal: 20, width: '100%' }}
      />
      <View style={{ width: '100%', }}><Text style={{ textAlign: 'right', fontStyle: 'italic' }}>REGISTER</Text></View>
      <View style={{ backgroundColor: '#0000004D', width: '100%' }}>
        <TextInput placeholder='username'
          onChangeText={setUsername}
          value={username}
        />
        <TextInput placeholder='password' onChangeText={setPassword} value={password} secureTextEntry />
        <TouchableOpacity style={{ backgroundColor: 'red' }} onPress={handleLogin}
        ><Text style={{ textAlign: 'center', paddingVertical: 10 }}>LOGIN</Text></TouchableOpacity>
      </View>

    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  }
})
export default App