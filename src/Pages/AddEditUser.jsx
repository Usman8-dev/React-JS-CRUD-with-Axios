import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { UserSchema } from "../validations/UserSchema";
import api from "../apis/axios";

import { InputText } from "primereact/inputtext";
import { InputNumber } from "primereact/inputnumber";
import { Button } from "primereact/button";
import { useEffect } from "react";


function AddEditUser({Toast}) {
  const navigate = useNavigate();
  const {id} = useParams();

  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(UserSchema),
  });

  const OnSubmit = async (data) => {
    if(id){
      await api.put(`/Users/${id}`, data)
    }else{
      await api.post('/Users', data)
    }
    navigate('/')
  };

  useEffect(()=>{
    if(id){
      api.get(`/Users/${id}`).then((res)=>{
      // console.log(res)
      Object.keys(res.data).map((key)=>{
        setValue(key, res.data[key])
      })
    })
    }
  }, [id, setValue])

  return (
    // <div className="border-2 m-10 text-center">
    //   <h2>Add User</h2>
    //   <div className="">
    //     <label>Name</label>
    //     <InputText {...register("name")} />
    //     <small className="p-error">{errors.name?.message}</small>
    //   </div>
    //   <div>
    //     <label>UserName</label>
    //     <InputText {...register("username")} />
    //     <small className="p-error">{errors.username?.message}</small>
    //   </div>
    //   <div>
    //     <label>Email</label>
    //     <InputText {...register("email")} />
    //     <small className="p-error">{errors.email?.message}</small>
    //   </div>
    //   <div>
    //     <label>Age</label>
    //     <InputNumber {...register("age")} />
    //     <small className="p-error">{errors.age?.message}</small>
    //   </div>

    //   <Button label="Submit" icon="pi-check-circle" />
    // </div>

    <div className="max-w-md mx-auto mt-10 bg-slate-700 border border-slate-800 rounded-xl p-8">
      <h2 className="text-slate-100 text-2xl font-semibold text-center mb-6">
        {id ? 'Edit User' : 'Add User'}
      </h2>

      <div className="flex flex-col gap-5">
        <form onSubmit={handleSubmit(OnSubmit)}>
          <div className="flex flex-col gap-1.5 mb-3">
            <label className="text-sm font-medium text-slate-400">Name</label>
            <InputText
              placeholder="Enter name"
              {...register("name")}
              className={`w-full ${errors.name ? "p-invalid" : ""}`}
            />
            <small className="p-error text-white text-xs">
              {errors.name?.message}
            </small>
          </div>

          <div className="flex flex-col gap-1.5 mb-3">
            <label className="text-sm font-medium text-slate-400">
              Username
            </label>
            <InputText
              placeholder="Enter username"
              {...register("username")}
              className={`w-full ${errors.username ? "p-invalid" : ""}`}
            />
            <small className="p-error text-white text-xs">
              {errors.username?.message}
            </small>
          </div>

          <div className="flex flex-col gap-1.5 mb-3">
            <label className="text-sm font-medium text-slate-400">Email</label>
            <InputText
              placeholder="Enter email"
              {...register("email")}
              className={`w-full ${errors.email ? "p-invalid" : ""}`}
            />
            <small className="p-error text-white text-xs">
              {errors.email?.message}
            </small>
          </div>

          <div className="flex flex-col gap-1.5 mb-3">
            <label className="text-sm font-medium text-slate-400">Age</label>
            <Controller
              name="age"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <InputNumber
                  placeholder="Enter age"
                  // {...register("age")}
                  // className={`w-full ${errors.age ? "p-invalid" : ""}`}
                  // inputClassName="w-full"

                  value={field.value}
                  onValueChange={(e) => field.onChange(e.value)}
                  className={errors.age ? 'p-invalid' : ''}
                />
              )}
            />

            <small className="p-error text-white text-xs">
              {errors.age?.message}
            </small>
          </div>

          <Button
            label="Submit"
            icon="pi pi-check-circle"
            className="w-full justify-center mt-2 !bg-amber-500 !border-amber-500 !text-slate-950 font-medium hover:!bg-amber-400"
          />
        </form>
      </div>
    </div>
  );
}

export default AddEditUser;
