"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
// Importações corrigidas com alias "@/"
import { CATEGORIES, Template } from "@/types/catalog";
import { TEMPLATES } from "@/data/catalog";

// Importa os ícones do Font Awesome (necessário para as estrelas)
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
config.autoAddCss = false;

const CatalogoHomeOne = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredTemplates = TEMPLATES.filter(
    (template: Template) =>
      activeCategory === "Todos" ? true : template.category === activeCategory
  );

  return (
    <>
      <style jsx global>{`
        .catalogo-area {
          background-color: #f7f7f7 !important;
          padding: 115px 0 95px;
        }

        .catalogo-section-title h2 {
          font-size: 35px;
          margin-bottom: 10px;
        }

        .catalogo-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 40px;
          justify-content: center;
        }

        .catalogo-chip {
          padding: 8px 16px;
          border-radius: 20px;
          background-color: #e2e8f0;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .catalogo-chip:hover {
          background-color: #cbd5e0;
        }

        .catalogo-chip.active {
          background-color: #667eea;
          color: #fff;
          border-color: #667eea;
        }

        .catalogo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        /* Regra que corrige o layout unitário */
        .catalogo-grid:has(> .catalogo-card:only-child) {
          grid-template-columns: minmax(300px, 400px);
        }

        .catalogo-card {
          background: #ffffff;
          border-radius: 10px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #e2e8f0;
        }

        .catalogo-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
        }

        .catalogo-thumb {
          width: 100%;
          height: 200px;
          position: relative;
        }

        .catalogo-card-content {
          padding: 20px;
        }

        .catalogo-card-content h3 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
          color: #000c35;
        }

        .catalogo-card-content p {
          font-size: 14px;
          color: #7d859f;
          margin-bottom: 10px;
        }

        .catalogo-rating {
          color: gold;
        }

        .catalogo-buttons {
          display: flex;
          justify-content: space-between;
          margin-top: 15px;
          gap: 10px;
        }

        .catalogo-buttons .btn {
          font-size: 14px;
          font-weight: 500;
          padding: 10px 20px;
        }

        .catalogo-btn-primary {
          background-color: #667eea;
          color: #fff;
          border: 1px solid #667eea;
        }
        .catalogo-btn-primary:hover {
          background-color: #5a67d8;
        }

        .catalogo-btn-secondary {
          background-color: #fff;
          color: #667eea;
          border: 1px solid #667eea;
        }
        .catalogo-btn-secondary:hover {
          background-color: #667eea;
          color: #fff;
        }

        .catalogo-btn-buy {
          background-color: #2b96cc;
          color: #fff;
          border: 1px solid #2b96cc;
        }
        .catalogo-btn-buy:hover {
          background-color: #2279a3;
        }
      `}</style>
      <section className="catalogo-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="section-title mb-30 catalogo-section-title">
                <h2>Catálogo de Estilos</h2>
                <p>
                  Explore nossa curadoria de designs modernos, prontos para
                  serem adaptados à sua marca. Encontre a inspiração perfeita
                  para seu novo site!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="catalogo-chips">
                {(["Todos", ...CATEGORIES] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat as string)}
                    className={`catalogo-chip ${
                      activeCategory === cat ? "active" : ""
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="catalogo-grid">
            {filteredTemplates.map((template) => (
              <div
                key={template.id}
                className="catalogo-card wow fadeInUp animated"
              >
                <div className="catalogo-thumb">
                  <Image
                    src={template.thumb}
                    alt={template.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="catalogo-card-content">
                  <div className="catalogo-rating">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                  <h3>{template.title}</h3>
                  <p>{template.category}</p>
                  <div className="catalogo-buttons">
                    <a
                      href={`/demo/${template.slug}`}
                      className="btn catalogo-btn-secondary"
                      target="_blank"
                    >
                      Demo
                    </a>
                    <a
                      href={`/licensa/${template.slug}`}
                      className="btn catalogo-btn-buy"
                      target="_blank"
                    >
                      Licenciar
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
  };

export default CatalogoHomeOne;