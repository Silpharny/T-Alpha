import { useState, useContext } from "react"

import {
  ActivityIndicator,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native"
import { styles } from "./styles"

import { AuthContext } from "../../contexts/AuthContext"

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true)

  const { register, login, authLoading } = useContext(AuthContext)

  const [name, setName] = useState("")
  const [taxNumber, setTaxNumber] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  function handleRegister() {
    if (!taxNumber || !password || !mail || !phone || !name) {
      alert("Preencha todos os campos")
      return
    }
    const userData = {
      name,
      taxNumber,
      mail,
      phone,
      password,
    }
    register(userData)
    cleanFields()
  }

  function handleLogin() {
    if (!taxNumber || !password) {
      alert("Preencha todos os campos")
      return
    }
    const userData = {
      taxNumber,
      password,
    }
    login(userData)
  }

  function changeScreen() {
    setIsLogin(!isLogin)
    cleanFields()
  }

  function cleanFields() {
    setName("")
    setTaxNumber("")
    setMail("")
    setPhone("")
    setPassword("")
  }

  return isLogin ? (
    <View style={styles.container}>
      <Text style={styles.title}>T-Alpha</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF ou CNPJ"
        keyboardType="number-pad"
        minLength={11}
        maxLength={11}
        onChangeText={(text) => setTaxNumber(text)}
        value={taxNumber}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Pressable style={styles.button} onPress={handleLogin}>
        {authLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </Pressable>

      <Pressable onPress={changeScreen}>
        <Text style={styles.link}>Criar uma conta</Text>
      </Pressable>
    </View>
  ) : (
    <View style={styles.container}>
      <Text style={styles.title}>T-Alpha</Text>
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Digite seu nome"
        onChangeText={(text) => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite seu CPF ou CNPJ"
        keyboardType="number-pad"
        minLength={11}
        maxLength={11}
        onChangeText={(text) => setTaxNumber(text)}
        value={taxNumber}
      />
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        placeholder="Digite seu email"
        onChangeText={(text) => setMail(text)}
        value={mail}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite seu telefone"
        keyboardType="number-pad"
        minLength={10}
        maxLength={10}
        onChangeText={(text) => setPhone(text)}
        value={phone}
      />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Digite sua senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />

      <Pressable style={styles.button} onPress={handleRegister}>
        {authLoading ? (
          <ActivityIndicator size="small" color="#fff" />
        ) : (
          <Text style={styles.buttonText}>Registrar</Text>
        )}
      </Pressable>

      <Pressable onPress={changeScreen}>
        <Text style={styles.link}>Já tenho uma conta</Text>
      </Pressable>
    </View>
  )
}
