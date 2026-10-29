import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Página não encontrada | Meu Portfólio",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6 text-center">
      <p className="text-6xl font-bold text-sky-400 mb-4">404</p>
      <h1 className="text-2xl sm:text-3xl font-semibold mb-3">
        Página não encontrada
      </h1>
      <p className="text-slate-400 mb-8 max-w-md">
        A página que você tentou acessar não existe ou foi movida.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors"
      >
        Voltar para a Home
      </Link>
    </main>
  );
}