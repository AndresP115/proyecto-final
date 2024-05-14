import axios from "axios";
import { useNavigate } from  "react-router-dom";
import { useState } from "react";

const URL = "http://localhost:5000/api/productos/"

const CompCrearProductos = () => {

    const [ nombres, setNombres] = useState("");
    const [ descripcion, setDescripcion] = useState("");
    const [ precio, setPrecio] = useState("");
    const [ cantidad, setCantidad] = useState("");
    const [ categoria, setCategoria] = useState("");
    const navigate = useNavigate();

    //Creamos la función de guardar
    const guardarProductos = async (e) => {
        e.preventDefault();
        await axios.post(URL, {
            nombres:nombres,
            descripcion:descripcion,
            precio:precio,
            cantidad:cantidad,
            categoria:categoria
        } )
        navigate("/productos")
    }

    return(

        <div>
            <h3>Formulario de Guardar Productos</h3>
            <form onSubmit={guardarProductos}>

                <div className="mb-3">
                <label className="form-label">Nombres productos</label>
                <input value={nombres} onChange={(e) => setNombres(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Descripción</label>
                <input value={descripcion} onChange={(e) => setDescripcion(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Precio</label>
                <input value={precio} onChange={(e) => setPrecio(e.target.value)} 
                type= "number" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Cantidad</label>
                <input value={cantidad} onChange={(e) => setCantidad(e.target.value)} 
                type= "number" className="form-control" />
                </div>

                <div className="mb-3">
                <label className="form-label">Categoria</label>
                <input value={categoria} onChange={(e) => setCategoria(e.target.value)} 
                type= "text" className="form-control" />
                </div>

                <button type="submit" className="btn btn-outline-info"> <i className="fa-solid fa-floppy-disk"></i> </button>

            </form>


        </div>



    )


}


export default CompCrearProductos;