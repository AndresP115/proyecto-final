import axios from "axios";
import { useNavigate } from  "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/api/clientes/"

const CompCrearClientes = () => {

    const [ nombres, setNombres] = useState("");
    const [ apellidos, setApellidos] = useState("");
    const [ cedula, setCedula] = useState("");
    const [ correo, setCorreo] = useState("");
    const [ telefono, setTelefono] = useState("");
    const [ direccion, setDireccion] = useState("");
    const navigate = useNavigate();

    //Creamos la función de guardar
    const guardarClientes = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombres:nombres, apellidos:apellidos, cedula:cedula, correo:correo, 
            telefono:telefono, direccion:direccion
        } )
        navigate("/clientes")
    }

    return(

        <div>
            <h3>Formulario de Guardar Clientes</h3>
            <form onSubmit={guardarClientes}>

                <div className="mb-3">
                <label className="form-label">Nombres clientes</label>
                <input value={nombres} onChange={(e) => setNombres(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Apellidos clientes</label>
                <input value={apellidos} onChange={(e) => setApellidos(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Cedula</label>
                <input value={cedula} onChange={(e) => setCedula(e.target.value)} 
                type= "number" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Correo</label>
                <input value={correo} onChange={(e) => setCorreo(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Telefono</label>
                <input value={telefono} onChange={(e) => setTelefono(e.target.value)} 
                type= "number" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Direccion</label>
                <input value={direccion} onChange={(e) => setDireccion(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-primary"> <i className="fa-solid fa-floppy-disk"></i> </button>

            </form>


        </div>



    )


}


export default CompCrearClientes;