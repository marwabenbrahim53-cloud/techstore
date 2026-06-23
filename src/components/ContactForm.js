"use client";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Schéma de validation
const schema = yup.object().shape({
  name: yup.string().required("Nom requis").min(4, "Min 4 caractères"),
  email: yup.string().email("Email invalide").required("Email requis"),
  phone: yup.string().matches(/^[0-9]{8}$/, "Doit contenir 8 chiffres").required("Téléphone requis"),
  message: yup.string().required("Message requis").max(30, "Max 30 caractères"),
});

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log("Données envoyées :", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-6 border rounded-xl shadow-sm">
      <div className="mb-4">
        <input {...register("name")} placeholder="Nom" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.name?.message}</p>
      </div>

      <div className="mb-4">
        <input {...register("email")} placeholder="Email" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.email?.message}</p>
      </div>

      <div className="mb-4">
        <input {...register("phone")} placeholder="Téléphone (8 chiffres)" className="w-full border p-2 rounded" />
        <p className="text-red-500 text-sm">{errors.phone?.message}</p>
      </div>

      <div className="mb-4">
        <textarea {...register("message")} placeholder="Message (max 30 car.)" className="w-full border p-2 rounded"></textarea>
        <p className="text-red-500 text-sm">{errors.message?.message}</p>
      </div>

      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700">
        Envoyer
      </button>
    </form>
  );
}