import { useRouter } from "next/router";
import styles from "@/styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import { auth } from "@/firebase/firebase";
import { signOut } from "firebase/auth";
import {
  RiDashboardLine,
  RiFolderUserLine,
  RiStore2Line,
  RiListUnordered,
  RiLogoutBoxLine,
} from "react-icons/ri";
import Header from "../Header";

const Layout = ({ children }) => {
  const router = useRouter();

  const handleSignOut = (e) => {
    e.preventDefault();

    auth.signOut().then(() => {
      router.push("/");
    });
  };

  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1 p-8 border-r">
        <div className="p-8 text-center flex gap-2 justify-center items-center">
          <Image src="../../../Okey.svg" width={100} height={100}  />
        </div>

        <div className="flex flex-col h-[800px] justify-between">
          <nav className="">
            <a className="flex items-center p-4 gap-4 uppercase  hover:bg-purple-600 hover:text-white hover:rounded-lg ">
              <RiDashboardLine />
              <Link href="/principal">Principal</Link>
            </a>

            <a className="flex items-center p-4 gap-4 uppercase  hover:bg-purple-600 hover:text-white hover:rounded-lg">
              <RiFolderUserLine />
              <Link href="/usuarios">Usuarios</Link>
            </a>

            <a className="flex items-center p-4 gap-4 uppercase  hover:bg-purple-600 hover:text-white hover:rounded-lg">
              <RiStore2Line />
              <Link href="/almacen">almacen</Link>
            </a>

            <a className="flex items-center p-4 gap-4 uppercase hover:bg-purple-600 hover:text-white hover:rounded-lg">
              <RiListUnordered />
              <Link href="/pedidos">pedidos</Link>
            </a>
          </nav>

          <div className="flex flex-col gap-4">
            <Image
              src="../../../disign.svg"
              width={300}
              height={300}
              alt="imagen disign"
            />

            <div className="bg-purple-100 p-8 flex flex-col gap-4 rounded-2xl">
              <h3 className="text-xl text-center">Contactar con soporte</h3>
              <p className="text-gray-500 text-center">
                Si ves algo mal o hay problemas con la pagina contacta con
                soporte
              </p>
              <a
                className="bg-purple-600 text-white p-2 rounded-lg text-center"
                href="https://wa.me/+573102060000?text='Tengo una pregunta de la pagina'"
                target="_blank"
              >
                Soporte
              </a>
            </div>

            <button
              className="flex items-center p-4 gap-4 uppercase hover:bg-purple-600 hover:text-white hover:rounded-lg"
              onClick={handleSignOut}
            >
              <RiLogoutBoxLine />
              Cerrar Sesion
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-5">
        <Header/>
        {children}
      </div>
    </div>
  );
};

export default Layout;
