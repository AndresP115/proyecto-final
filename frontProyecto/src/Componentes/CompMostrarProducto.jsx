import axios from "axios";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";


const URL = "http://localhost:5000/api/productos/"

const CompMostrarProductos = () => {

    const [productos, setProductos] = useState([])
    useEffect(() => {
        getproductos()
    }, []);

    //funcion para mostrar los clientes
    const getproductos = async () => {
        const resul = await axios.get(URL)
        setProductos(resul.data);
    }

    // Función eliminar clientes
    const eliminarProductos = async (id) => {
        await axios.delete(`${URL}${id}`)
        getproductos();
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <Link to="/productos/agregar" className="btn btn-outline-success mt-2 mb-2"> <i className="fa-solid fa-user-plus"></i> </Link>
                    <table className="table">
                        <thead className="table-light">
                            <tr>
                                <th>Nombres Productos</th>
                                <th>Descripción Productos</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>Categoria</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map((producto, index) =>(
                                <tr key = {index}>
                                    <td > {producto.nombres} </td>
                                    <td > {producto.descripcion} </td>
                                    <td > {producto.precio} </td>
                                    <td > {producto.cantidad} </td>
                                    <td > {producto.categoria} </td>
                                    <td> 
                                    <Link to= {`/productos/editar/${producto._id}`} className="btn btn-outline-primary mt-2 mb-2"> <i className="fa-solid fa-user-pen"></i> </Link>
                                    <button onClick={()=> eliminarProductos(producto._id)} className="btn btn-outline-danger"> <i className="fa-solid fa-user-xmark"></i> </button>
                                    </td>


                                </tr>
                            ))}

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )


}

export default CompMostrarProductos;




