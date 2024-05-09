import React, { useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { ErrorMessage, Form, Formik, useFormik } from "formik";
import { Label } from "@radix-ui/react-label";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";
import { Loader2 } from "lucide-react";
import * as yup from "yup";
import { useCreateMutation, useUpdateMutation } from "../../../store/service/endpoint/contact.endpoint";
import { SheetClose } from "../../../components/ui/sheet";

const FormTool = ({handleClose, editContact}) => {
  // const {toast}=useToast()
  const [fun, { data, isError, isLoading }] = useCreateMutation();
  const [updateFun,updateData]=useUpdateMutation()
  // console.log(updateData)
  // console.log(data, isError, isLoading);
  const closeRef = useRef();
  const initialValue = {
    phone:editContact.data?.phone || "",
    email:editContact.data?.email ||  "",
    name:editContact.data?.name || "",
    address:editContact.data?.address || "",
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
    phone: yup
      .string()
      .required("phone is required")
      .min(9, "phone must last have 9")
      .max(11, "phone must have most 11"),
    address: yup.string().required("You must conform your phone"),
    //   .oneOf([yup.ref("phone"), null], "phones must match"),
  });
  const handleSubmit =async(vlaues ,action) => {
    if(editContact?.edit){
      const id=editContact?.data.id
      await updateFun({id:id, ...vlaues});
      action.reset
      closeRef.current.click()
    }else{
      await fun(vlaues);
      action.reset
      closeRef.current.click()
    };
  }

  return (
    <div className=" w-full justify-center mx-auto h-full flex">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnBlur={false}
        validateOnChange={false}
      >
        {({ handleChange, handleBlur, values, isSubmitting }) => (
          <>
            <Form className=" flex w-full flex-col gap-2 justify-between mb-10">
              <div className=" flex w-full flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name}
                  type="name"
                  name="name"
                  id="name"
                  placeholder="Sar Yar Gyi"
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
                  placeholder="example@gmail.com"
                />
                <ErrorMessage
                  component={"p"}
                  name="email"
                  className=" text-danger text-sm"
                />
                <Label htmlFor="phone">phone</Label>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.phone}
                  type="phone"
                  name="phone"
                  id="phone"
                  placeholder="9784223322"
                />
                <ErrorMessage
                  component={"p"}
                  name="phone"
                  className=" text-danger text-sm"
                />
                <Label htmlFor="address">Address</Label>
                <Input
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.address}
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Mandalay"
                />
                <ErrorMessage
                  component={"p"}
                  name="address"
                  className=" text-danger text-sm"
                />
              </div>
              <div className="mt-2 flex flex-row items-center gap-4">
                <SheetClose asChild>
                  <Button
                    onClick={handleClose}
                    ref={closeRef}
                    type="button"
                    className=" w-1/2 border-2 border-basic text-basic"
                    variant="outline"
                  >
                    Cancel
                  </Button>
                </SheetClose>
                {/* <SheetClose asChild ref={closeRef} className=" w-full"> */}
                  <Button
                    type="submit"
                    className="bg-basic disabled:bg-blue-400 w-1/2"
                  >
                    <h1 className=" select-none">
                      {isSubmitting ? (
                        <p className=" flex items-center justify-center">
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          <span>Loading......</span>
                        </p>
                      ) : (
                        <p>Create</p>
                      )}
                    </h1>
                  </Button>
                {/* </SheetClose> */}
              </div>
            </Form>
          </>
        )}
      </Formik>
    </div>
  );
};

export default FormTool;
