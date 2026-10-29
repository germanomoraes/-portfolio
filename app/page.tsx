import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Início | Meu Portfólio",
  description: "Portfólio pessoal desenvolvido com Next.js e Tailwind CSS.",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center px-6">
      <div className="max-w-2xl text-center">
        <p className="text-sky-400 font-medium mb-2">Olá, seja bem-vindo(a) 👋</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          I'm {" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Germano
          </span>
        </h1>
        <p className="text-slate-400 text-lg mb-8">
          Desenvolvedor(a) em formação, gosto de criar interfaces
          simples, rápidas e funcionais com React e Next.js.
        </p>

        <nav className="flex flex-wrap justify-center gap-4">
          <Link
            href="/projetos"
            className="px-6 py-3 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold transition-colors"
          >
            Ver Projetos
          </Link>
          <Link
            href="/sobre"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-400 hover:text-sky-400 font-semibold transition-colors"
          >
            Sobre Mim
          </Link>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-lg border border-slate-700 hover:border-sky-400 hover:text-sky-400 font-semibold transition-colors"
          >
            Contato
          </Link>
        </nav>
      </div>
    </main>
  );
}