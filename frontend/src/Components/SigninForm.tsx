import { useForm } from "react-hook-form";
import { SignupType } from "@priyanshurohilla/common-app";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const SigninForm = () => {
  return (
    <div className="px-20 md:px-40">
      <div className="flex flex-col justify-center items-center h-screen gap-10">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold mb-2">Login</h1>
          <p className="text-gray-900 text-lg font-light">
            Don't have a acount ?{" "}
            <a className=" underline" href="/Signup">
              Signup
            </a>
          </p>
        </div>

        <Mainform />
      </div>
    </div>
  );
};


function Mainform() {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupType>();

  const navigate = useNavigate();

  const onSubmit = async (data : SignupType) => {
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/user/signin`, data);
      const token = res.data.token;
      localStorage.setItem("token", token);
      navigate("/blogs");
    } catch (error) {
      alert("Error Occured While signup");
    }
    setLoading(false);
  };

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-2 w-full "
      >
        <InputField
          name="email"
          type="email"
          register={register}
          errors={errors}
        />
        <InputField
          name="password"
          type="password"
          register={register}
          errors={errors}
        />
        <button
          disabled={loading}
          className={`bg-slate-800 p-2 mt-4 shadow text-white rounded ${loading ? 'disabled animate-pulse' : ''}`}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}

interface InputFieldProps {
  name: string;
  type?: string;
  register: any;
  errors: any;
}

function InputField({ name, register, errors, type }: InputFieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold capitalize">{name}</label>
      <input
        {...register(name, { required: "This field is required" })}
        className="border-2 bg-slate-100 border-slate-300 rounded-md p-2"
        type={type ? type : "text"}
        placeholder={"Enter Your " + name}
      />
      <div className="text-red-700 text-sm">{errors[name]?.message}</div>
    </div>
  );
}
