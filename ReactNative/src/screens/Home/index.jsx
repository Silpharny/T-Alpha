import { useState, useEffect } from "react"
import { useContext } from "react"
import { FlatList, Modal, Pressable, Text, View } from "react-native"
import { styles } from "./styles"
import { Feather } from "@expo/vector-icons"
import { AuthContext } from "../../contexts/AuthContext"
import ModalView from "../../components/Modal"
import Product from "../../components/Product"
import api from "../../services/api"

import axios from "axios"

export default function Home() {
  const { user, logout } = useContext(AuthContext)

  const [showModal, setShowModal] = useState(false)
  const [productList, setProductList] = useState([])

  useEffect(() => {
    async function loadProducts() {
      await api
        .get("api/products/get-all-products")
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.error("Error sending data: ", error.response.data)
        })
    }
    loadProducts()
  }, [])

  function handleShowModal() {
    setShowModal(!showModal)
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.totalProducts}>
          <Text style={styles.totalProductsText}>Total de Produto(s): </Text>
        </View>
        <Pressable style={styles.logoutButton} onPress={logout}>
          <Feather name="log-out" size={24} color="#fff" />
        </Pressable>
      </View>

      <Pressable style={styles.addButton} onPress={handleShowModal}>
        <Feather name="plus" size={24} color="#fff" />
      </Pressable>
      <Modal visible={showModal} animationType="fade" transparent={true}>
        <ModalView onClose={handleShowModal} />
      </Modal>

      <View style={styles.body}>
        <FlatList
          data={user.products}
          renderItem={({ item }) => <Product data={item} />}
        />
      </View>
    </View>
  )
}
