import { useForm} from 'react-hook-form'
import Swal from 'sweetalert2'

export default function LoginForm() {

    const {handleSubmit,register,formState:{errors}} = useForm();
    
    const printData = (data)=>{
        console.log(data);
        alert(data.email,data.password)
    }

    const alert = (email,password)=>{
        Swal.fire({
            title: "Login Successfull!",
            text: `Your email is ${email} and your password is ${password}`,
            icon: "success"
          });
    }

  return (
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 py-5">
        <div className="col-lg-7 text-center text-lg-start">
          <h1 className="display-4 fw-bold lh-1 text-body-emphasis mb-3">
            Login Form
          </h1>
          <p className="col-lg-10 fs-4">
            Below is an example form built entirely with Bootstrap’s form
            controls. Each required form group has a validation state that can
            be triggered by attempting to submit the form without completing it.
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border rounded-3 bg-body-tertiary">
            <div className="form-floating mb-3">
              <input
              {...register("email",{required:true})}
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email address</label>
              {errors.email && <span style={{color:"red",marginTop:"5px"}}>* Please Enter Valid Email</span>}
            </div>
            <div className="form-floating mb-3">
              <input
              {...register("password",{required:true})}
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
              />
              <label for="floatingPassword">Password</label>
              {errors.password && <span style={{color:"red"}}>* Enter Valid Password</span>}
            </div>
            <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={handleSubmit(printData)}>
              Sign up
            </button>
            <hr className="my-4"></hr>
            <small className="text-body-secondary">
              By clicking Sign up, you agree to the terms of use.
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
