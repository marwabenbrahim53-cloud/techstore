"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
  username: yup.string().required("Nom d'utilisateur requis").min(3, "Trop court"),
  email: yup.string().email("Email invalide").required("Email requis"),
  password: yup.string().required("Mot de passe requis").min(6, "Minimum 6 caractères"),
  confirmPassword: yup.string()
    .oneOf([yup.ref('password'), null], "Les mots de passe ne correspondent pas")
    .required("Confirmation requise"),
});

export default function InscriptionForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log("Inscription validée :", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 border rounded-2xl shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>
      
      <div className="mb-4">
        <input {...register("username")} placeholder="Nom d'utilisateur" className="w-full border p-3 rounded-lg" />
        <p className="text-red-500 text-xs mt-1">{errors.username?.message}</p>
      </div>

      <div className="mb-4">
        <input {...register("email")} placeholder="Email" className="w-full border p-3 rounded-lg" />
        <p className="text-red-500 text-xs mt-1">{errors.email?.message}</p>
      </div>

      <div className="mb-4">
        <input type="password" {...register("password")} placeholder="Mot de passe" className="w-full border p-3 rounded-lg" />
        <p className="text-red-500 text-xs mt-1">{errors.password?.message}</p>
      </div>

      <div className="mb-6">
        <input type="password" {...register("confirmPassword")} placeholder="Confirmer mot de passe" className="w-full border p-3 rounded-lg" />
        <p className="text-red-500 text-xs mt-1">{errors.confirmPassword?.message}</p>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition">
        S'inscrire
      </button>
    </form>
  );
}