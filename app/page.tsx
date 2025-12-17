"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Star, Zap, ShieldCheck, Flame, ArrowDown, CheckCircle } from "lucide-react";

export default function ChamaAuraStudio() {
  return (
    <div className="bg-black text-white min-h-screen font-sans overflow-x-hidden">

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-black" />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 max-w-6xl text-center px-6"
        >
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            AURA <span className="text-purple-500">STUDIO</span>
          </h1>
          <p className="mt-8 text-xl md:text-2xl text-gray-300">
            Transforme seu PC em uma fonte real de renda através da edição de vídeos profissional.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="text-xl px-14 py-8 rounded-2xl shadow-2xl">
              O link vira aqui
            </Button>
            <Button variant="outline" className="text-xl px-14 py-8 rounded-2xl">
              Ver método
            </Button>
          </div>
          <ArrowDown className="mx-auto mt-16 animate-bounce text-purple-500" size={40} />
        </motion.div>
      </section>

      {/* STORY */}
      <section className="py-32 bg-black">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-5xl mx-auto px-6 text-center"
        >
          <h2 className="text-5xl font-bold mb-8">Isso não é só edição</h2>
          <p className="text-xl text-gray-400 leading-relaxed">
            O Aura Studio nasceu para pessoas comuns, sem estrutura, sem dinheiro sobrando,
            mas com fome de mudança. Aqui você aprende a editar, vender e viver disso.
          </p>
        </motion.div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 bg-gradient-to-b from-black to-zinc-900">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          {[{
            icon: <Flame />,
            title: "Mentalidade de Produtor",
            desc: "Você deixa de ser curioso e passa a pensar como profissional."
          }, {
            icon: <Zap />,
            title: "Execução Rápida",
            desc: "Nada de teoria infinita. Aprendeu, aplicou, faturou."
          }, {
            icon: <ShieldCheck />,
            title: "Estrutura Testada",
            desc: "Método validado para gerar renda real com edição."
          }].map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              className="bg-zinc-950 p-10 rounded-2xl shadow-xl"
            >
              <div className="text-purple-500 mb-4">{b.icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{b.title}</h3>
              <p className="text-gray-400">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section className="py-32 bg-black">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center mb-16">O que você vai aprender</h2>
          <div className="grid md:grid-cols-2 gap-10">
            {["Fundamentos da edição", "Fluxo profissional", "Edição que vende", "Captação de clientes", "Precificação", "Escala e autoridade"].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 bg-zinc-900 p-6 rounded-2xl"
              >
                <CheckCircle className="text-purple-500" />
                <p className="text-lg">{m}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-24 bg-gradient-to-t from-black to-zinc-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Quem entrou, não saiu igual</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Card key={i} className="bg-zinc-950 border-zinc-800 rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex text-purple-500 mb-4">
                    <Star /><Star /><Star /><Star /><Star />
                  </div>
                  <p className="text-gray-300">
                    "Esse curso mudou minha visão. Hoje eu vivo de edição."
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-40 bg-gradient-to-br from-purple-900 to-black text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-6xl font-extrabold mb-10">Você decide agora</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ou você fecha essa página, ou entra no Aura Studio e muda o jogo.
          </p>
          <Button className="text-2xl px-20 py-10 rounded-2xl shadow-2xl">
            O link vira aqui
          </Button>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-gray-500">
        © 2025 • Aura Studio • Todos os direitos reservados
      </footer>
    </div>
  );
}
