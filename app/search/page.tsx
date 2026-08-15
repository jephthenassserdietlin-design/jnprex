"use client"
import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Navbar from "../components/Navbar"

const allProducts = [
  { brand: "Nike", name: "Air Max 97 OG", price: "189 €", tag: "New" },
  { brand: "Nike", name: "Air Force 1", price: "110 €", tag: "" },
  { brand: "Nike", name: "Dunk Low", price: "120 €", tag: "Hot" },
  { brand: "Nike", name: "Air Jordan 1 Retro", price: "165 €", tag: "Sale" },
  { brand: "Adidas", name: "Yeezy 350 V2", price: "245 €", oldPrice: "320 €", tag: "Hot" },
  { brand: "Adidas", name: "Samba OG", price: "100 €", tag: "New" },
  { brand: "New Balance", name: "990v5 Made USA", price: "220 €", tag: "" },
  { brand: "New Balance", name: "574 Core", price: "89 €", tag: "" },
  { brand: "Jordan", name: "Air Jordan 4", price: "210 €", tag: "" },
  { brand: "Puma", name: "Suede Classic XXI", price: "95 €", tag: "New" },
  { brand: "Asics", name: "Gel-Kayano 14", price: "130 €", tag: "" },
  { brand: "Reebok", name: "Club C 85", price: "89 €", oldPrice: "110 €", tag: "Sale" },
  { brand: "Vans", name: "Old Skool Pro", price: "75 €", tag: "" },
  { brand: "Converse", name: "Chuck Taylor All Star", price: "85 €", tag: "New" },
  { brand: "Salomon", name: "XT-6", price: "165 €", tag: "" },
  { brand: "Timberland", name: "6-Inch Premium", price: "210 €", tag: "" },
  { brand: "Saucony", name: "Jazz Original", price: "95 €", oldPrice: "120 €", tag: "Sale" },
  { brand: "On", name: "Cloud 5", price: "145 €", tag: "New" },
  { brand: "Golden Goose", name: "Superstar", price: "450 €", tag: "" },
  { brand: "Off-White", name: "Out Of Office", price: "380 €", tag: "" },
]

function ProductCard({ product }: { product: typeof allProducts[0] }) {
  return (
    <div
      style={{ background: "#fff", cursor: "pointer", overflow: "hidden" }}
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
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
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
  )
}

function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q") || ""

  const results = allProducts.filter(p =>
    p.name.toLowerCase().includes(query.toLowerCase()) ||
    p.brand.toLowerCase().includes(query.toLowerCase())
  )

  const suggestions = results.length === 0
    ? allProducts.filter(p =>
        p.brand.toLowerCase().includes(query.split(" ")[0].toLowerCase())
      ).slice(0, 8)
    : []

  return (
    <main style={{ paddingTop: "172px" }}>
      {/* ── HEADER ── */}
      <div style={{
        padding: "40px 48px 24px",
        borderBottom: "1px solid #e8e8e6"
      }}>
        <p style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontSize: "0.75rem", fontWeight: 600,
          letterSpacing: "0.2em", textTransform: "uppercase",
          color: "#999", marginBottom: "8px"
        }}>Résultats de recherche</p>
        <h1 style={{
          fontFamily: "'Barlow Condensed', sans-serif",
          fontWeight: 900, fontSize: "clamp(1.5rem, 4vw, 3rem)",
          textTransform: "uppercase"
        }}>{query}</h1>
      </div>

      {results.length > 0 ? (
        <section style={{ padding: "24px 48px 64px" }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.82rem", color: "#999",
            letterSpacing: "0.08em", marginBottom: "24px"
          }}>{results.length} produits</p>
          <div className="products-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "#e8e8e6"
          }}>
            {results.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </section>
      ) : (
        <section style={{ padding: "24px 48px 64px" }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "1rem", color: "#999",
            marginBottom: "48px"
          }}>Aucun résultat pour <strong>"{query}"</strong>. Voici des produits similaires :</p>

          {suggestions.length > 0 ? (
            <div className="products-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px", background: "#e8e8e6"
            }}>
              {suggestions.map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          ) : (
            <div className="products-grid" style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "1px", background: "#e8e8e6"
            }}>
              {allProducts.slice(0, 8).map((product, i) => (
                <ProductCard key={i} product={product} />
              ))}
            </div>
          )}
        </section>
      )}
    </main>
  )
}

export default function SearchPage() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div style={{ paddingTop: "200px", textAlign: "center" }}>Chargement...</div>}>
        <SearchResults />
      </Suspense>
    </>
  )
}