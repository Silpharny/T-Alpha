import { Pressable, Text, TextInput, View } from "react-native"
import { Feather } from "@expo/vector-icons"
import { styles } from "./styles"

export default function ModalView({ onClose }) {
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Adicionar Produto</Text>
          <Pressable onPress={onClose}>
            <Feather name="x" size={32} color="#000" />
          </Pressable>
        </View>

        <View style={styles.body}>
          <TextInput placeholder="Nome" style={styles.input} />
          <TextInput placeholder="Descrição" style={styles.input} />
          <TextInput placeholder="$49,90" style={styles.input} />
          <TextInput placeholder="R$50 em estoque" style={styles.input} />
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Adicionar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  )
}
