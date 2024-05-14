import axios from "axios";
import { useNavigate, useParams } from  "react-router-dom";
import { useState, useEffect } from "react";

const URL = "http://localhost:5000/api/productos/"

const CompEditarProductos = () => {

    const [ nombres, setNombres] = useState("");
    const [ descripcion, setDescripcion] = useState("");
    const [ precio, setPrecio] = useState("");
    const [ cantidad, setCantidad] = useState("");
    const [ categoria, setCategoria] = useState("");
    const navigate = useNavigate();
    const  { id} = useParams();

    //Función actualizar
    const editarProductos = async (e) => {
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

    useEffect( () =>{
        getproductosID()
    }, []);

    const getproductosID = async () => {
        const resul = await axios.get(`${URL}${id}`)
        setNombres(resul.data.nombres)
        setDescripcion(resul.data.descripcion)
        setPrecio(resul.data.precio)
        setCantidad(resul.data.cantidad)
        setCategoria(resul.data.categoria)
    }

    return (

        <div>
            <h3>Formulario de Editar Productos</h3>
            <form onSubmit={editarProductos}>

                <div className="mb-3">
                <label className="form-label">Nombres Productos</label>
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

                <button type="submit" className="btn btn-outline-info"> <i className="fa-solid fa-pen-to-square"></i> </button>

            </form>


        </div>



    )

}

export default CompEditarProductos;





