import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contato | Meu Portfólio",
  description: "Formas de entrar em contato comigo.",
};

export default function Contato() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-sky-400 hover:underline text-sm mb-8 inline-block"
        >
          ← Voltar para a Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Vamos conversar?</h1>
        <p className="text-slate-400 mb-10">
          Ficarei feliz em trocar uma ideia sobre projetos, oportunidades ou
          colaborações.
        </p>

        <div className="space-y-4">
          <div className="flex items-center gap-4 rounded-lg bg-slate-900 border border-slate-800 px-5 py-4">
            <span className="text-sky-400 font-semibold w-24">E-mail</span>
            <span className="text-slate-300">germano.moraes08@aluno.ifce.edu.br
</span>
          </div>
          <div className="flex items-center gap-4 rounded-lg bg-slate-900 border border-slate-800 px-5 py-4">
            <span className="text-sky-400 font-semibold w-24">GitHub</span>
            <span className="text-slate-300">https://github.com/germanomoraes</span>
          </div>
          </div>
        </div>
    </main>
  );
}