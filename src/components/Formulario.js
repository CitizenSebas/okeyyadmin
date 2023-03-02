import { useState } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import useMensaje from "@/hooks/useMensaje";
import styles from "@/styles/Home.module.css";
import MensajeError from "./MensajeError";

const Formulario = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { mensaje, activo, setActivo, setMensaje } = useMensaje();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if ([correo, password].includes("")) {
      setActivo(true);
      setMensaje("todos los campos son obligatorios");
      return;
    } else if (correo !== "somosokeyyy@gmail.com") {
      setActivo(true);
      setMensaje("Es no es el correo de administrador");
      return;
    }

    await signInWithEmailAndPassword(auth, correo, password)
      .then((userCrendential) => {
        const user = userCrendential.user;
        router.push("/principal");
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          setActivo(true);
          setMensaje("Usuario no registrado,Por favor registrese");
        } else if (error.code === "auth/wrong-password") {
          setActivo(true);
          setMensaje("la contraseña no es la registrada");
          return;
        } else if (error.code) {
          setActivo(true);
          setMensaje("Algo salio mal,intentelo de nuevo");
        }

        return;
      });
  };

  return (
    <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form class="bg-white">
        <h1 class="text-gray-800 font-bold text-2xl mb-1">Hola</h1>

        <p class="text-xl font-normal text-gray-600 mb-7">
          Bienvenido administrador
        </p>
        {activo && <MensajeError>{mensaje}</MensajeError>}
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clip-rule="evenodd"
            />
          </svg>
          <input
            class="pl-2 outline-none border-none"
            type="password"
            name=""
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          onClick={handleSignIn}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Formulario;
