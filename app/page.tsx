import { redirect } from "next/navigation";

export default function Home() {
  redirect("/HomePage"); // Redireciona imediatamente no servidor
}