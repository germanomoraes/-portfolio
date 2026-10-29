import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre | Meu Portfólio",
  description: "Um pouco sobre minha trajetória e habilidades.",
};

export default function Sobre() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="text-sky-400 hover:underline text-sm mb-8 inline-block"
        >
          ← Voltar para a Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Sobre Mim</h1>

        <p className="text-slate-300 leading-relaxed mb-4">
          Sou estudante de desenvolvimento web, atualmente aprendendo React e
          Next.js. Gosto de transformar ideias em interfaces funcionais e
          estou sempre buscando entender melhor como as ferramentas que uso
          funcionam por baixo dos panos.
        </p>
        <p className="text-slate-300 leading-relaxed mb-10">
          Este portfólio foi construído como atividade prática, utilizando o
          App Router do Next.js, rotas estáticas e Tailwind CSS para a
          estilização.
        </p>

        <h2 className="text-xl font-semibold mb-4">Habilidades</h2>
        <ul className="grid sm:grid-cols-2 gap-3">
          {["HTML & CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"].map(
            (skill) => (
              <li
                key={skill}
                className="rounded-lg bg-slate-900 border border-slate-800 px-4 py-3 text-slate-200"
              >
                {skill}
              </li>
            )
          )}
        </ul>
      </div>
    </main>
  );
}