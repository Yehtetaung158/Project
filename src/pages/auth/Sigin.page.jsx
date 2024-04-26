import React, { useEffect } from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { ErrorMessage, Form, Formik } from "formik";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../components/ui/input";
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSigInMutation } from "../../store/service/endpoint/auth.endpoint"; 
import { Loader2 } from "lucide-react"
import AuthGuard from "../../components/ui/guard/Auth.Guard";

const SiginPage = () => {
const nav=useNavigate()
const [fun,{isError,isLoading,data}]=useSigInMutation();
console.log(isError,isLoading,data)
  const initialValue = {
    password: "",
    email: "",
  };

  //yup
  const validationSchema = yup.object({
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must last have 8 letter"),
  });

  const handleSubmit =async (value) => {
      const res=await fun(value)
  };
  useEffect(()=>{
    (
      ()=>{
        if(data?.success){
          nav("/home")
        }
      }
    )()
  },[data])
  return (
   <AuthGuard check={data?.success} token={data?.token}>
       <div className="w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-3/4 p-5">
        <CardHeader className=" flex flex-row justify-between mb-2">
          <CardTitle>Sign In</CardTitle>
          <CardDescription className=" text-basic ">
           <Link to="/signup"> I don't have any account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={handleSubmit}
          >
            {({ handleChange, handleBlur, values, isSubmitting }) => (
              <>
                <Form className=" flex flex-col gap-5">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="email"
                    className=" text-danger text-sm"
                  />
                  <Label htmlFor="password">Password</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Your Password"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="password"
                    className=" text-danger text-sm"
                  />
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    className=" w-full bg-basic mt-2 disabled:bg-blue-400" 
                  >
                    {isLoading ? 
                     <>
                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                     <h1>Loading......</h1>
                     </>
                      :
                    <h1 className=" select-none">Sign In</h1>
                    }
                  </Button>
                </Form>
              </>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
   </AuthGuard>
  );
};

export default SiginPage;
