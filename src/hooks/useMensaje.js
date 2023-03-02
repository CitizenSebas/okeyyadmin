import { useState } from "react";

const useMensaje = () => {

    const [activo,setActivo] = useState(false)
    const [mensaje,setMensaje] = useState('')

    return {
        activo,
        mensaje,
        setActivo,
        setMensaje
    }
}

export default useMensaje;