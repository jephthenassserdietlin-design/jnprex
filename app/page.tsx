"use client"
import { useState } from "react"
import Navbar from "./components/Navbar"

const slides = [
  {
    eyebrow: "Sneakers",
    title: "ENTRE\nDANS\nLE JEU",
    sub: "Les icônes d'aujourd'hui. Les classiques de demain.",
  },
]

const products = [
  { brand: "Nike", name: "Air Max 97 OG", price: "189 €", tag: "New" },
  { brand: "Adidas", name: "Yeezy 350 V2", price: "245 €", oldPrice: "320 €", tag: "Hot" },
  { brand: "New Balance", name: "990v5 Made USA", price: "220 €", tag: "" },
  { brand: "Jordan", name: "Air Jordan 1 Retro", price: "165 €", oldPrice: "210 €", tag: "Sale" },
  { brand: "Puma", name: "Suede Classic XXI", price: "95 €", tag: "New" },
  { brand: "Asics", name: "Gel-Kayano 14", price: "130 €", tag: "" },
  { brand: "Reebok", name: "Club C 85", price: "89 €", oldPrice: "110 €", tag: "Sale" },
  { brand: "Vans", name: "Old Skool Pro", price: "75 €", tag: "" },
]

const categories = [
  { name: "Sneakers", label: "Collection", count: "200+ modèles" },
  { name: "Vêtements", label: "Style", count: "150+ pièces" },
  { name: "Accessoires", label: "Finish", count: "80+ refs" },
]

const brands = [
  "Nike", "Adidas", "New Balance", "Puma", "Converse",
  "Vans", "Asics", "Salomon", "Timberland", "Saucony",
  "UGG", "Birkenstock", "Golden Goose", "Off-White",
  "BAPE", "Reebok", "On"
]

export default function Home() {
  const [email, setEmail] = useState("")

  return (
    <>
      <Navbar />
      <main style={{ paddingTop: "172px" }}>

        {/* ── HERO ── */}
        <section style={{
          width: "100%", minHeight: "90vh",
          position: "relative", overflow: "hidden",
          display: "flex", alignItems: "center",
        }}>
          <img
            src="/hero.sneakers.png"
            alt="JNPREX Sneakers"
            className="hero-img"
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover"
            }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 60%)"
          }} />
          <div className="hero-content" style={{
            padding: "60px 48px", zIndex: 2, width: "100%",
            display: "flex", flexDirection: "column",
            alignItems: "flex-start", textAlign: "left",
          }}>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.8rem", fontWeight: 600,
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.7)", marginBottom: "16px"
            }}>{slides[0].eyebrow}</p>
            <h1 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: "clamp(3rem, 8vw, 7rem)",
              textTransform: "uppercase", color: "#fff",
              lineHeight: 0.95, marginBottom: "24px",
              whiteSpace: "pre-line"
            }}>{slides[0].title}</h1>
            <p style={{
              fontSize: "1rem", color: "rgba(255,255,255,0.8)",
              maxWidth: "400px", lineHeight: 1.6, marginBottom: "40px"
            }}>{slides[0].sub}</p>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
              <a href="/catalogue" style={{
                background: "#fff", color: "#0a0a0a",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: "0.9rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                padding: "16px 36px", borderRadius: "30px",
                textDecoration: "none"
              }}>Voir la collection</a>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div style={{
          background: "#0a0a0a", color: "#fff",
          height: "40px", overflow: "hidden",
          display: "flex", alignItems: "center"
        }}>
          <div style={{
            display: "flex", gap: "64px",
            animation: "ticker 20s linear infinite",
            whiteSpace: "nowrap"
          }}>
            {["Livraison offerte dès 100€", "New Arrivals chaque semaine", "Retours gratuits 30 jours", "Paiement 100% sécurisé",
              "Livraison offerte dès 100€", "New Arrivals chaque semaine", "Retours gratuits 30 jours", "Paiement 100% sécurisé"].map((t, i) => (
              <span key={i} style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 600, fontSize: "0.75rem",
                letterSpacing: "0.2em", textTransform: "uppercase"
              }}>✦ {t}</span>
            ))}
          </div>
        </div>

        {/* ── NOUVEAUTÉS ── */}
        <section className="section-pad" style={{ padding: "64px 48px" }}>
          <div style={{
            display: "flex", alignItems: "flex-end",
            justifyContent: "space-between", marginBottom: "40px"
          }}>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900, fontSize: "clamp(2rem, 4vw, 3.5rem)",
              textTransform: "uppercase"
            }}>Nouveautés</h2>
            <a href="/catalogue" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600, fontSize: "0.82rem",
              letterSpacing: "0.12em", textTransform: "uppercase",
              color: "#0a0a0a", textDecoration: "none",
              borderBottom: "1px solid #0a0a0a", paddingBottom: "2px"
            }}>Tout voir →</a>
          </div>
          <div className="products-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "#e8e8e6"
          }}>
            {products.map((product) => (
              <div key={product.name}
                style={{ background: "#fff", cursor: "pointer", overflow: "hidden", position: "relative" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.9"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                <div style={{
                  aspectRatio: "3/4", background: "#f2f2f2",
                  display: "flex", alignItems: "center",
                  justifyContent: "center", position: "relative"
                }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.7rem", color: "#ccc",
                    textTransform: "uppercase", letterSpacing: "0.1em"
                  }}>Photo produit</span>
                  {product.tag && (
                    <span style={{
                      position: "absolute", top: "12px", left: "12px",
                      background: "#0a0a0a", color: "#fff",
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700, fontSize: "0.65rem",
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "4px 8px"
                    }}>{product.tag}</span>
                  )}
                  <button style={{
                    position: "absolute", bottom: "0", left: "0", right: "0",
                    background: "#0a0a0a", color: "#fff",
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: "0.8rem",
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    padding: "14px", border: "none", cursor: "pointer"
                  }}>Ajouter au panier</button>
                </div>
                <div style={{ padding: "12px" }}>
                  <p style={{
                    fontSize: "0.72rem", fontWeight: 500,
                    letterSpacing: "0.08em", textTransform: "uppercase",
                    color: "#999", marginBottom: "4px"
                  }}>{product.brand}</p>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 700, fontSize: "0.95rem",
                    textTransform: "uppercase", marginBottom: "8px"
                  }}>{product.name}</p>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
                    <span style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontWeight: 700, fontSize: "1rem"
                    }}>{product.price}</span>
                    {product.oldPrice && (
                      <span style={{ fontSize: "0.82rem", color: "#999", textDecoration: "line-through" }}>{product.oldPrice}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CATÉGORIES ── */}
        <section className="section-pad" style={{ padding: "0 48px 64px" }}>
          <div className="categories-grid" style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "1px", background: "#e8e8e6"
          }}>
            {categories.map((cat, i) => (
              <div key={cat.name} style={{
                background: "#0a0a0a",
                minHeight: i === 0 ? "400px" : "300px",
                display: "flex", alignItems: "flex-end",
                padding: "32px", cursor: "pointer"
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.opacity = "0.85"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.opacity = "1"}
              >
                <div>
                  <p style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "0.7rem", fontWeight: 600,
                    letterSpacing: "0.2em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.5)", marginBottom: "6px"
                  }}>{cat.label}</p>
                  <h3 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 900,
                    fontSize: i === 0 ? "clamp(2rem, 4vw, 3.5rem)" : "clamp(1.5rem, 3vw, 2.5rem)",
                    textTransform: "uppercase", color: "#fff",
                    lineHeight: 1, marginBottom: "8px"
                  }}>{cat.name}</h3>
                  <p style={{
                    fontSize: "0.78rem", color: "rgba(255,255,255,0.4)",
                    marginBottom: "16px"
                  }}>{cat.count}</p>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontWeight: 600, fontSize: "0.78rem",
                    letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "rgba(255,255,255,0.7)"
                  }}>Explorer →</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── MARQUES ── */}
        <section className="brands-row" style={{
          padding: "64px 48px",
          borderTop: "1px solid #e8e8e6",
          borderBottom: "1px solid #e8e8e6"
        }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.7rem", fontWeight: 600,
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "#999", textAlign: "center", marginBottom: "40px"
          }}>Marques disponibles</p>
          <div style={{
            display: "flex", alignItems: "center",
            justifyContent: "center", gap: "32px", flexWrap: "wrap"
          }}>
            {brands.map(brand => (
              <span key={brand} style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(1rem, 2vw, 1.6rem)",
                letterSpacing: "0.06em", textTransform: "uppercase",
                color: "#e8e8e6", cursor: "pointer", transition: "color 0.2s"
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "#0a0a0a"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "#e8e8e6"}
              >{brand}</span>
            ))}
          </div>
        </section>

        {/* ── NEWSLETTER ── */}
        <section className="newsletter" style={{
          background: "#0a0a0a", color: "#fff",
          padding: "80px 48px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", gap: "48px",
          flexWrap: "wrap"
        }}>
          <div style={{ maxWidth: "480px" }}>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "0.72rem", fontWeight: 600,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.4)", marginBottom: "12px"
            }}>Rejoindre JNPREX</p>
            <h2 style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              textTransform: "uppercase", lineHeight: 1, marginBottom: "12px"
            }}>Avant tout<br />le monde.</h2>
            <p style={{
              fontSize: "0.9rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.6
            }}>Les nouveautés, les restocks, les drops exclusifs — directement dans ta boîte mail.</p>
          </div>
          <div className="nl-form" style={{ display: "flex", flex: 1, maxWidth: "480px", minWidth: "280px" }}>
            <input
              type="email"
              placeholder="ton@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              style={{
                flex: 1,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                borderRight: "none",
                color: "#fff", fontFamily: "'Barlow', sans-serif",
                fontSize: "0.9rem", padding: "16px 20px", outline: "none"
              }}
            />
            <button style={{
              background: "#fff", color: "#0a0a0a",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "0.82rem",
              letterSpacing: "0.14em", textTransform: "uppercase",
              padding: "16px 28px", border: "none", cursor: "pointer"
            }}>S'inscrire</button>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer" style={{
          background: "#0a0a0a",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "40px 48px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between", flexWrap: "wrap", gap: "20px"
        }}>
          <span style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "1.4rem",
            letterSpacing: "0.08em", textTransform: "uppercase", color: "#fff"
          }}>JNPREX</span>
          <div className="footer-links" style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            {["À propos", "Livraison", "Retours", "CGV", "Contact"].map(link => (
              <a key={link} href="#" style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "0.75rem", fontWeight: 600,
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.4)", textDecoration: "none"
              }}>{link}</a>
            ))}
          </div>
          <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.3)" }}>
            © 2026 JNPREX. Tous droits réservés.
          </span>
        </footer>

      </main>
    </>
  )
}