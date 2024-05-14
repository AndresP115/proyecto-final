import React from "react";
//import '../estilos/footer.css';
//import redes from "../img/redes.png"

const CompFooter = () => {
    return(
        <footer>
            <div className="card-body">
                <h4 className="card-title"> Dirección Calle 121 #64 - 25 </h4>
                <p className="card-text"> Correo: industriasr@gmail.com - Telefonos: (601)- 5234241 - </p>
                {/* <img src= {redes} className="App-logo1" alt="logo"></img> */}
                <div className="card-footer text-muted"> Horario de atención: Lunes - Viernes 8 a.m - 7 p.m </div>
                <div className="mt-4">
                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-facebook-f"></i></a>
                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-twitter"></i></a>
                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-instagram"></i></a>
                <a type="button" className="btn btn-floating btn-light btn-lg"><i className="fab fa-google"></i></a>

                </div>
                <div className="text-center p-3" >
                        © 2020 Copyright: Andrés Pelaez
                </div>
            </div>
        </footer>
    )
}

export default CompFooter;
