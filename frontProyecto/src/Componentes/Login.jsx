import { useForm } from "react-hook-form";
import '../estilos/login.css';


const CompLogin = () => {

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

      
    return (
      <>
        <form className="login-container" onSubmit={handleSubmit((data) => console.log(data))}>
  <div
    className="form-outline mb-4"
    data-mdb-input-init=""
  >
        <label
      className="form-label"
      htmlFor="form2Example1"
    >
      Correo electrónico
    </label>


    <input
      className="form-control"
      id="form2Example1"
      type="email"
      {...register("correo", {
        required: {
          value: true,
          message: " El correo es requerido",
        },
        pattern: {
          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
          message: " El correo no tiene un formato valido ",
        },
      })}
    />
            {errors.correo && (
          <span className="text-danger">{errors.correo && errors.correo.message}</span>
        )}
    

  </div>
  <div
    className="form-outline mb-4"
    data-mdb-input-init=""
  >
    <label
      className="form-label"
      htmlFor="form2Example2"
    >
      Contraseña
    </label>


    <input
      className="form-control"
      id="form2Example2"
      type="text"
      {...register("password", {
        required: {
          value: true,
          message: "La contraseña es requerida",
        },
        pattern: {
          value: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.*[a-z]).{8,}$/,
          message: "La contraseña no coincide con los requisitos",
        },
        
      })}/>
      {errors.password && (<span className="text-danger">{errors.password && errors.password.message}</span>)}
    

    
  </div>
  <div className="row mb-4">
    <div className="col d-flex justify-content-center">
      <div className="form-check">
        <input
          className="form-check-input"
          defaultChecked
          defaultValue=""
          id="form2Example31"
          type="checkbox"
        />
        <label
          className="form-check-label"
          htmlFor="form2Example31"
        >
          {' '}Recuerdame{' '}
        </label>
      </div>
    </div>
    <div className="col">
      <a href="#!">
        ¿Olvidaste la contraseña?
      </a>
    </div>
  </div>
  <button
    className="btn btn-primary btn-block mb-4"
    data-mdb-button-init=""
    data-mdb-ripple-init=""
    type="submit"
  >
    Iniciar sesión
  </button>
  <div className="text-center">
  <p>
      No tienes cuenta?{' '}
      <a href="registro">
        Registrate
      </a>
    </p>
    <p>
      O inicia sesión con:
    </p>
    <button
      className="btn btn-link btn-floating mx-1"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      type="button"
    >
      <i className="fab fa-facebook-f" />
    </button>
    <button
      className="btn btn-link btn-floating mx-1"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      type="button"
    >
      <i className="fab fa-google" />
    </button>
    <button
      className="btn btn-link btn-floating mx-1"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      type="button"
    >
      <i className="fab fa-twitter" />
    </button>
    <button
      className="btn btn-link btn-floating mx-1"
      data-mdb-button-init=""
      data-mdb-ripple-init=""
      type="button"
    >
      <i className="fab fa-github" />
    </button>
  </div>
</form>
</>

    );
}

export default CompLogin;



