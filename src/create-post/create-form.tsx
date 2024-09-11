import {useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {addDoc,collection} from "firebase/firestore";
import {auth,db} from "../Config/fireBase"
import {useAuthState} from "react-firebase-hooks/auth"
import "./CreateForm.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

interface CreateFormData{
    title:string;
    description:string;
}

export const CreateForm=()=>{
    const [user]=useAuthState(auth);
    const navigate=useNavigate();

    const schema= yup.object().shape({
        title:yup.string().required("You Must Add a title."),
        description:yup.string().required("Enter Discription First"),

    });
    const {register,handleSubmit,formState:{errors}}=useForm<CreateFormData>({
        resolver:yupResolver(schema),
    });

    const postsRef=collection(db,"posts");

    const onCreatePost= async(data : CreateFormData)=>{
        await addDoc(postsRef,{
            title :data.title,
            description:data.description,
            username:user?.displayName,
            userId: user?.uid,
        });
        navigate("/");
    }
    return (
        <form onSubmit={handleSubmit(onCreatePost)} className="create-form">
          <input
            placeholder="Title..."
            {...register("title")}
            className="form-input"
          />
          <p className="error">{errors.title?.message}</p>
          <textarea
            placeholder="Description..."
            {...register("description")}
            className="form-input"
          />
          <p className="error">{errors.description?.message}</p>
          <input type="submit" className="submit-button" />
        </form>
      );
      
};