import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Projetos | Meu Portfólio",
  description: "Lista de projetos desenvolvidos.",
};

const projetos = [
  {
    nome: "App de Tarefas",
    descricao: "Aplicação para gerenciar tarefas diárias, com React e localStorage.",
    tecnologias: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    nome: "Blog Pessoal",
    descricao: "Blog estático gerado com Next.js, focado em performance e SEO.",
    tecnologias: ["Next.js", "Markdown", "Tailwind CSS"],
  },
  {
    nome: "Landing Page",
    descricao: "Página de apresentação para um produto fictício, com design responsivo.",
    tecnologias: ["HTML", "CSS", "JavaScript"],
  },
];

export default function Projetos() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/"
          className="text-sky-400 hover:underline text-sm mb-8 inline-block"
        >
          ← Voltar para a Home
        </Link>

        <h1 className="text-3xl sm:text-4xl font-bold mb-2">Meus Projetos</h1>
        <p className="text-slate-400 mb-10">
          Alguns trabalhos que desenvolvi durante meus estudos e prática.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projetos.map((projeto) => (
            <div
              key={projeto.nome}
              className="rounded-xl border border-slate-800 bg-slate-900 p-6 hover:border-sky-400 transition-colors"
            >
              <h2 className="text-xl font-semibold mb-2">{projeto.nome}</h2>
              <p className="text-slate-400 text-sm mb-4">{projeto.descricao}</p>
              <div className="flex flex-wrap gap-2">
                {projeto.tecnologias.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-slate-800 text-sky-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
