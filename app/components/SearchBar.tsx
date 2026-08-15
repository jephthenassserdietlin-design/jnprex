"use client"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"

const allProducts = [
  { name: "Air Max 97 OG", brand: "Nike" },
  { name: "Air Force 1", brand: "Nike" },
  { name: "Dunk Low", brand: "Nike" },
  { name: "Yeezy 350 V2", brand: "Adidas" },
  { name: "Samba OG", brand: "Adidas" },
  { name: "990v5 Made USA", brand: "New Balance" },
  { name: "574 Core", brand: "New Balance" },
  { name: "Air Jordan 1 Retro", brand: "Jordan" },
  { name: "Air Jordan 4", brand: "Jordan" },
  { name: "Suede Classic XXI", brand: "Puma" },
  { name: "Gel-Kayano 14", brand: "Asics" },
  { name: "Club C 85", brand: "Reebok" },
  { name: "Old Skool Pro", brand: "Vans" },
  { name: "Chuck Taylor All Star", brand: "Converse" },
  { name: "XT-6", brand: "Salomon" },
  { name: "6-Inch Premium", brand: "Timberland" },
  { name: "Jazz Original", brand: "Saucony" },
  { name: "Cloud 5", brand: "On" },
  { name: "Superstar", brand: "Golden Goose" },
  { name: "Out Of Office", brand: "Off-White" },
]

export default function SearchBar({ placeholder = "Rechercher un produit...", mobile = false }: { placeholder?: string, mobile?: boolean }) {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<typeof allProducts>([])
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClick)
    return () => document.removeEventListener("mousedown", handleClick)
  }, [])

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setQuery(val)
    if (val.length > 0) {
      const filtered = allProducts.filter(p =>
        p.name.toLowerCase().includes(val.toLowerCase()) ||
        p.brand.toLowerCase().includes(val.toLowerCase())
      )
      setSuggestions(filtered.slice(0, 6))
      setOpen(true)
    } else {
      setSuggestions([])
      setOpen(false)
    }
  }

  function handleSelect(product: typeof allProducts[0]) {
    setQuery(product.name)
    setOpen(false)
    router.push(`/search?q=${encodeURIComponent(product.name)}`)
  }

  function handleEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && query.length > 0) {
      setOpen(false)
      router.push(`/search?q=${encodeURIComponent(query)}`)
    }
  }

  return (
    <div ref={ref} style={{ position: "relative", width: mobile ? "100%" : "42%" }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "10px",
        background: "#f2f2f2", borderRadius: "30px",
        padding: "11px 22px"
      }}>
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <input
          type="text"
          value={query}
          onChange={handleChange}
          onKeyDown={handleEnter}
          placeholder={placeholder}
          style={{
            background: "none", border: "none", outline: "none",
            fontFamily: "'Barlow', sans-serif",
            fontSize: "0.88rem", color: "#333",
            width: "100%"
          }}
        />
        {query && (
          <button onClick={() => { setQuery(""); setSuggestions([]); setOpen(false) }}
            style={{ background: "none", border: "none", cursor: "pointer", color: "#999", fontSize: "1rem" }}>
            ✕
          </button>
        )}
      </div>

      {/* Suggestions */}
      {open && suggestions.length > 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
          background: "#fff", borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          zIndex: 200, overflow: "hidden"
        }}>
          {suggestions.map((product, i) => (
            <div key={i}
              onClick={() => handleSelect(product)}
              style={{
                padding: "12px 20px", cursor: "pointer",
                display: "flex", alignItems: "center", gap: "12px",
                borderBottom: i < suggestions.length - 1 ? "1px solid #f2f2f2" : "none"
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f9f9f9"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <div>
                <p style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontWeight: 700, fontSize: "0.9rem",
                  textTransform: "uppercase", color: "#0a0a0a"
                }}>{product.name}</p>
                <p style={{
                  fontSize: "0.75rem", color: "#999",
                  fontFamily: "'Barlow', sans-serif"
                }}>{product.brand}</p>
              </div>
            </div>
          ))}

          {/* Rechercher tout */}
          <div
            onClick={() => {
              setOpen(false)
              router.push(`/search?q=${encodeURIComponent(query)}`)
            }}
            style={{
              padding: "12px 20px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "12px",
              background: "#f9f9f9", borderTop: "1px solid #f2f2f2"
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f2f2f2"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#f9f9f9"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "0.9rem",
              textTransform: "uppercase", color: "#0a0a0a"
            }}>Rechercher "{query}"</p>
          </div>
        </div>
      )}

      {/* Pas de résultats */}
      {open && query.length > 0 && suggestions.length === 0 && (
        <div style={{
          position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0,
          background: "#fff", borderRadius: "12px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          zIndex: 200, overflow: "hidden"
        }}>
          <div
            onClick={() => {
              setOpen(false)
              router.push(`/search?q=${encodeURIComponent(query)}`)
            }}
            style={{
              padding: "12px 20px", cursor: "pointer",
              display: "flex", alignItems: "center", gap: "12px"
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "#f9f9f9"}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "#fff"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <p style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "0.9rem",
              textTransform: "uppercase", color: "#0a0a0a"
            }}>Rechercher "{query}"</p>
          </div>
        </div>
      )}
    </div>
  )
}