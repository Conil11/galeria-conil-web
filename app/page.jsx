"use client";
import { useState } from "react";

export default function Home() {
  const [lang, setLang] = useState("fr");

  const t = {
    fr: {
      title: "Galerie Conil",
      subtitle: "Art contemporain, œuvres originales et artistes émergents.",
      featured: "Œuvres en vedette",
      artist: "Artiste · 2025",
    },
    en: {
      title: "Conil Gallery",
      subtitle: "Contemporary art, original works and emerging artists.",
      featured: "Featured artworks",
      artist: "Artist · 2025",
    },
    es: {
      title: "Galería Conil",
      subtitle: "Arte contemporáneo, obras originales y artistas emergentes.",
      featured: "Obras destacadas",
      artist: "Artista · 2025",
    },
  };

  return (
    <main className="min-h-screen bg-white text-neutral-900">
      {/* LANGUAGE SELECTOR */}
      <div className="w-full flex justify-end gap-3 px-6 pt-6 text-sm">
        {["fr", "en", "es"].map((l) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            className={`px-3 py-1 border rounded-full transition ${
              lang === l ? "bg-black text-white" : "text-neutral-600"
            }`}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-6xl font-serif mb-6">{t[lang].title}</h1>
        <p className="max-w-xl text-lg text-neutral-600">{t[lang].subtitle}</p>
      </section>

      {/* IMAGEN DESTACADA */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1549880181-56a44cf4a9a5"
            alt="Artwork"
            className="w-full h-[500px] object-cover"
          />
        </div>
      </section>

      {/* GALERÍA */}
      <section className="px-6 pb-24">
        <h2 className="text-2xl font-serif text-center mb-10">{t[lang].featured}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition"
            >
              <img
                src={`https://picsum.photos/600/600?random=${item}`}
                alt="Artwork"
                className="w-full h-72 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold">Titre de l’œuvre</h3>
                <p className="text-sm text-neutral-500">{t[lang].artist}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} {t[lang].title} · Tous droits réservés
      </footer>
    </main>
  );
}
