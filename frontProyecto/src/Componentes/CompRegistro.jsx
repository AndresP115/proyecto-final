import { useForm } from "react-hook-form";
import '../estilos/registro.css'

function CompRegistro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const password = watch("password", "");
  
  return (
    <>
      <form className="contenedor" onSubmit={handleSubmit((data) => console.log(data))}>
        <label htmlFor="nombre"> Nombres </label>
        <input type="text"
          {...register("nombre", {
            required: {
              value: true,
              message: " El nombre es requerido",
            },
            minLength: {
              value: 6,
              message: " El nombre debe tener minimo 6 caracteres",
            },
            maxLength: {
              value: 20,
              message: " El nombre debe tener maximo 20 caracteres",
            },
          })}/>
        {errors.nombre && (<span className="text-danger">{errors.nombre && errors.nombre.message}</span>)}


        <label> Correo </label>
        <input
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

        <label> Contraseña </label>
        <input
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


        <label> Confirmar contraseña </label>
        <input {...register("confirmarpassword", {
            required:true,
            pattern:/^(?=.*[A-Z])(?=.*[!@#$%^&*()_+|~=`{}\[\]:";'<>?,.\/])(?=.*[a-z]).{8,}$/,
            validate:(value) => value == password
            
        })}/>
        {errors.confirmarpassword?.type=="validate" && <span className="text-danger">Las contraseñas no coinciden</span>}
        


        <label> Fecha de nacimiento </label>
        <input type = "date"
        {...register("fechadenacimiento", {
          required: {
            value: true,
            message: "La fecha de nacimiento es requerida"
          },
        })} />
        {errors.fechadenacimiento && (<span className="text-danger">{errors.fechadenacimiento && errors.fechadenacimiento.message}</span>)}

        <button className="btn btn-primary" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
}

export default CompRegistro;
