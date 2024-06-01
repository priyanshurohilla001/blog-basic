import axios from "axios";
import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Appbar } from "../Components/Appbar";
import { BACKEND_URL } from "../config";

interface IFormInput {
  title: string;
  content: string;
}

export const Create = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>();

  const navigate = useNavigate();

  const submitref = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signin");
    }
  }, [navigate]);

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    submitref.current!.disabled = true;
    submitref.current!.innerHTML = "Loading...";
    submitref.current!.classList.add("disabled", "animate-pulse");

    try {
      const res = await axios.post(`${BACKEND_URL}/api/v1/blog`, data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      submitref.current!.classList.remove("disabled", "animate-pulse");
      submitref.current!.innerHTML = "Submit";

      if (res.status !== 200) {
        alert("Error Occured While Creating Blog");
        return;
      }

      alert("Blog Created Successfully");
      setTimeout(() => {
        navigate("/blogs");
      }, 1000);
    } catch (error) {
      submitref.current!.classList.remove("disabled", "animate-pulse");
      submitref.current!.innerHTML = "Submit";
      alert("Error Occured While Creating Blog");
    }
  };

  return (
    <div>
      <Appbar />
      <div className="bg-slate-50 h-screen flex justify-center items-center px-10 md:px-40">
        <div className="bg-white p-10 shadow rounded w-full">
          <h3 className="text-center text-xl font-semibold">
            Publish Your Blog
          </h3>
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputField name="title" register={register} errors={errors} />
            <InputField
              name="content"
              register={register}
              errors={errors}
              rows={10}
            />
            <button
              className="bg-blue-700 text-white p-2 rounded-md"
              type="submit"
              ref={submitref}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

interface InputFieldProps {
  name: string;
  type?: string;
  register: any;
  errors: any;
  rows?: number;
}

function InputField({ name, register, errors, type, rows }: InputFieldProps) {
  const Element = name === "content" ? "textarea" : "input";

  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold capitalize">{name}</label>
      <Element
        {...register(name, { required: "This field is required" })}
        className="border-2 bg-slate-100 border-slate-300 rounded-md p-2"
        type={type ? type : "text"}
        placeholder={"Enter Your " + name}
        rows={rows} // Added rows prop
      />
      <div className="text-red-700 text-sm">{errors[name]?.message}</div>
    </div>
  );
}
