import { useContext, useState, useRef } from "react"

import { AuthContext } from "../../contexts/AuthContext"
import { Navigate } from "react-router-dom"

export default function Auth() {
  const { register, login, authLoading, isAuthenticated } =
    useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true)

  const nameRef = useRef()
  const taxNumberRef = useRef()
  const mailRef = useRef()
  const phoneRef = useRef()
  const passwordRef = useRef()

  if (isAuthenticated) {
    return <Navigate to="/home" />
  }

  function RegisterUser(e) {
    e.preventDefault()

    const name = nameRef.current.value
    const taxNumber = taxNumberRef.current.value
    const mail = mailRef.current.value
    const phone = phoneRef.current.value
    const password = passwordRef.current.value

    if (
      name === "" ||
      taxNumber === "" ||
      mail === "" ||
      phone === "" ||
      password === ""
    ) {
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

  function LoginUser(e) {
    e.preventDefault()

    const taxNumber = taxNumberRef.current.value
    const password = passwordRef.current.value

    if (taxNumber === "" || password === "") {
      return
    }

    const userData = {
      taxNumber,
      password,
    }

    login(userData)
    cleanFields()
  }

  function changeScreen() {
    setIsLogin(!isLogin)
    cleanFields()
  }

  function cleanFields() {
    if (isLogin) {
      taxNumberRef.current.value = ""
      passwordRef.current.value = ""
      return
    }

    nameRef.current.value = ""
    taxNumberRef.current.value = ""
    mailRef.current.value = ""
    phoneRef.current.value = ""
    passwordRef.current.value = ""
  }

  return isLogin ? (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center w-[80%] md:w-[40%] rounded-xl p-4">
        <h1 className="text-6xl font-bold">T-Alpha</h1>

        <form
          onSubmit={LoginUser}
          className="flex flex-col w-[90%] items-center"
        >
          <input
            type="number"
            placeholder="Digite seu CPF ou CNPJ"
            ref={taxNumberRef}
            maxLength={11}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="********"
            ref={passwordRef}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="w-[100%] md:w-[60%] bg-zinc-900 text-white font-bold rounded-md p-2"
          >
            {authLoading ? "Carregando..." : "Acessar"}
          </button>
        </form>

        <button onClick={changeScreen}>Criar nova conta</button>
      </div>
    </div>
  ) : (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col gap-4 items-center w-[80%] md:w-[40%] rounded-xl p-4">
        <h1 className="text-6xl font-bold">T-Alpha</h1>

        <form
          onSubmit={RegisterUser}
          className="flex flex-col w-[90%] items-center"
        >
          <input
            type="text"
            placeholder="Digite seu nome"
            ref={nameRef}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Digite seu CPF ou CNPJ"
            ref={taxNumberRef}
            maxLength={11}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Digite seu e-mail"
            ref={mailRef}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <input
            type="number"
            placeholder="Digite seu telefone"
            ref={phoneRef}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <input
            type="password"
            placeholder="********"
            ref={passwordRef}
            required
            className="border-2 border-zinc-100 w-[100%] md:w-[60%] mb-4 rounded-md p-2 focus:outline-none"
          />
          <button
            type="submit"
            className="w-[100%] md:w-[60%] bg-zinc-900 text-white font-bold rounded-md p-2"
          >
            {authLoading ? "Carregando..." : "Cadastrar"}
          </button>
        </form>

        <button onClick={changeScreen}>Já tenho conta</button>
      </div>
    </div>
  )
}
