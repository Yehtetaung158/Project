import React, { useState } from "react";
import { BsPencilSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../components/ui/table";
import { useDeleteMutation } from "../../../store/service/endpoint/contact.endpoint";
import { SheetTrigger } from "../../../components/ui/sheet";

const DataTableTool = ({handleEdit, data }) => {
  const [deleteFun, res] = useDeleteMutation();
  // console.log(res);

  
  // const [inputValue, setInputValue] = useState('')
  const handleDelete = (id) => {
    withReactContent(Swal)
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#387ADF",
        cancelButtonColor: "red",
        confirmButtonText: "Yes, delete it!",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteFun(id);
          Swal.fire({
            position: "top-end",
            // icon: "success",
            title: "Your content has been deleted",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  // console.log(data);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow className=" bg-basic rounded-lg">
            <TableHead className=" rounded-tl-lg">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Address</TableHead>
            <TableHead className=" rounded-tr-lg ">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((i) => (
            <TableRow key={i.id}>
              <TableCell>{i.id}</TableCell>
              <TableCell>{i.name}</TableCell>
              <TableCell>{i.email}</TableCell>
              <TableCell>{i.phone}</TableCell>
              <TableCell>{i.address}</TableCell>
              <TableCell className=" flex gap-4 items-center ">
                <SheetTrigger onClick={handleEdit.bind(null,i.id)}>
                  <BsPencilSquare />
                </SheetTrigger>
                <button
                  onClick={handleDelete.bind(null, i.id)}
                  className=" text-red-500"
                >
                  <FaRegTrashCan />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {/* <div>Your input: {inputValue}</div>  */}
    </div>
  );
};

export default DataTableTool;
