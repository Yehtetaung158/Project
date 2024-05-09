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
import { Link } from "react-router-dom";
import { useSigUpMutation } from "../../store/service/endpoint/auth.endpoint";
import { Loader2 } from "lucide-react"
import AuthGuard from "../../components/ui/guard/Auth.Guard";
// import {useToast} from "../../components/ui/use-toast"

const SigupPage = () => {
  // const {toast}=useToast()
  const [fun,{isError,isLoading,data}]=useSigUpMutation()
  console.log(isError,isLoading,data)
  const initialValue = {
    password: "",
    email: "",
    name: "",
    password_confirmation: "",
  };

  //yup
  const validationSchema = yup.object({
    name: yup
      .string()
      .required("Your name is required")
      .min(2, "Your name must have lest 2 letters"),
    email: yup
      .string()
      .required("Email is required")
      .email("Invalid Email Format"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must last have 8 letter"),
    password_confirmation: yup
      .string()
      .required("You must conform your password")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const handleSubmit = (value) => {
    console.log(value);
    fun(value)
  };

  return (
    <AuthGuard path="/signup">
      <div className="w-3/5 mx-auto h-full flex justify-center items-center">
      <Card className=" basis-3/4 p-5">
        <CardHeader className=" flex flex-row justify-between mb-2">
          <CardTitle>Sign Up</CardTitle>
          <CardDescription className=" text-basic ">
            <Link to="/">I have already an account</Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            validateOnBlur={false}
            validateOnChange={false}
          >
            {({ handleChange, handleBlur, values, isSubmitting }) => (
              <>
                <Form className=" flex flex-col gap-5">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.name}
                    type="name"
                    name="name"
                    id="name"
                    placeholder="Enter Your Email"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="name"
                    className=" text-danger text-sm"
                  />
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
                  <Label htmlFor="password_confirmation">Comform Password</Label>
                  <Input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password_confirmation}
                    type="password"
                    name="password_confirmation"
                    id="password_confirmation"
                    placeholder="Comfirm password"
                  />
                  <ErrorMessage
                    component={"p"}
                    name="password_confirmation"
                    className=" text-danger text-sm"
                  />
                  <Button
                    disabled={isLoading}
                    type="submit"
                    className=" w-full bg-basic mt-2 disabled:bg-blue-400"
                  > {isLoading ? 
                    <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    <h1>Loading......</h1>
                    </>
                     :
                   <h1 className=" select-none">Sign Up</h1>
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

export default SigupPage;
