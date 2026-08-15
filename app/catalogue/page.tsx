"use client"
import Navbar from "../components/Navbar"

const brands = [
  "Nike", "Adidas", "New Balance", "Puma", "Converse",
  "Vans", "Asics", "Salomon", "Timberland", "Saucony",
  "UGG", "Birkenstock", "Golden Goose", "Off-White",
  "BAPE", "Reebok", "On"
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
  { brand: "Converse", name: "Chuck Taylor All Star", price: "85 €", tag: "New" },
  { brand: "Salomon", name: "XT-6", price: "165 €", tag: "" },
  { brand: "Timberland", name: "6-Inch Premium", price: "210 €", tag: "" },
  { brand: "Saucony", name: "Jazz Original", price: "95 €", oldPrice: "120 €", tag: "Sale" },
]

export default function Catalogue() {
  return (
    <>
      <Navbar />
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
          }}>Collection</p>
          <h1 style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "clamp(2rem, 5vw, 4rem)",
            textTransform: "uppercase"
          }}>Sneakers</h1>
        </div>

        {/* ── FILTRES MARQUES ── */}
        <div className="brands-filter" style={{
          padding: "16px 48px 12px",
          borderBottom: "1px solid #e8e8e6",
          display: "flex", gap: "8px",
          overflowX: "auto",
          flexWrap: "nowrap",
        }}>
          <button style={{
            background: "#0a0a0a", color: "#fff",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 700, fontSize: "0.78rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            padding: "6px 16px", borderRadius: "30px",
            border: "none", cursor: "pointer",
            whiteSpace: "nowrap" as const
          }}>Toutes</button>
          {brands.map(brand => (
            <button key={brand} style={{
              background: "transparent", color: "#0a0a0a",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "0.78rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              padding: "6px 16px", borderRadius: "30px",
              border: "1px solid #e8e8e6", cursor: "pointer",
              whiteSpace: "nowrap" as const
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = "#0a0a0a"
              ;(e.target as HTMLElement).style.color = "#fff"
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = "transparent"
              ;(e.target as HTMLElement).style.color = "#0a0a0a"
            }}
            >{brand}</button>
          ))}
        </div>

        {/* ── GRILLE PRODUITS ── */}
        <section style={{ padding: "40px 48px" }}>
          <p style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: "0.82rem", color: "#999",
            letterSpacing: "0.08em", marginBottom: "24px"
          }}>{products.length} produits</p>
          <div className="products-grid" style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px", background: "#e8e8e6"
          }}>
            {products.map((product) => (
              <div key={product.name}
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
            ))}
          </div>
        </section>

      </main>
    </>
  )
}