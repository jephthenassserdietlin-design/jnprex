"use client"
import { useState } from "react"
import Image from "next/image"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)

  return (
    <>
      {/* ── DESKTOP ── */}
      <header className="desktop-only" style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100, background: "#fff",
        boxShadow: "0 1px 0 #e8e8e6"
      }}>
        {/* Rangée 1 */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 48px", height: "68px",
          position: "relative"
        }}>
          <a href="/">
            <Image src="/logo.png" alt="JNPREX" width={75} height={40} style={{ display: "block", marginLeft: "-25px" }} />
          </a>
          <a href="/" style={{
            position: "absolute", left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 900, fontSize: "1.44rem",
            letterSpacing: "0.12em", textTransform: "uppercase",
            color: "#0a0a0a", textDecoration: "none"
          }}>JNPREX</a>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
              </svg>
            </button>
            {isConnected && (
              <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                </svg>
              </button>
            )}
            <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, position: "relative" }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                <line x1="3" y1="6" x2="21" y2="6"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
              <span style={{
                position: "absolute", top: "-5px", right: "-7px",
                width: "15px", height: "15px", background: "#0a0a0a",
                color: "#fff", fontSize: "0.48rem", fontWeight: 800,
                borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"
              }}>0</span>
            </button>
          </div>
        </div>

        {/* Rangée 2 */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 48px 10px 28px",
          borderTop: "1px solid #efefef"
        }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#f2f2f2", borderRadius: "30px",
            padding: "11px 22px", cursor: "pointer", width: "42%"
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.88rem", color: "#999" }}>Rechercher un produit...</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>
            <a href="#" style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 600, fontSize: "0.82rem",
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "#444", textDecoration: "none"
            }}>Aide</a>
            {!isConnected && (
              <a href="/connexion" style={{
                background: "#0a0a0a", color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: "0.82rem",
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "9px 30px", borderRadius: "30px",
                textDecoration: "none", whiteSpace: "nowrap"
              }}>S'identifier</a>
            )}
          </div>
        </div>

        {/* Rangée 3 - Catégories */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "center",
          gap: "8px", padding: "0 48px",
          height: "46px", borderTop: "1px solid #efefef"
        }}>
          {["Sneakers", "Sacs", "Accessoires", "Vêtements", "Sports"].map((cat) => (
            <a key={cat} href="#"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: "0.85rem",
                letterSpacing: "0.1em", textTransform: "uppercase",
                color: "#0a0a0a", textDecoration: "none",
                whiteSpace: "nowrap", padding: "6px 16px",
                borderRadius: "30px", transition: "background 0.2s, color 0.2s"
              }}
              onMouseEnter={e => {
                (e.target as HTMLElement).style.background = "#0a0a0a"
                ;(e.target as HTMLElement).style.color = "#fff"
              }}
              onMouseLeave={e => {
                (e.target as HTMLElement).style.background = "transparent"
                ;(e.target as HTMLElement).style.color = "#0a0a0a"
              }}
            >{cat}</a>
          ))}
        </div>
      </header>

      {/* ── MOBILE ── */}
      <header className="mobile-only" style={{
        position: "fixed", top: 0, left: 0, right: 0,
        zIndex: 100, background: "#fff",
        boxShadow: "0 1px 0 #e8e8e6"
      }}>
        {/* Rangée 1 */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          padding: "0 16px", height: "56px"
        }}>
          <a href="/">
            <Image src="/logo.png" alt="JNPREX" width={75} height={40} style={{ display: "block", marginLeft: "-3px" }} />
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
            {isConnected ? (
              <>
                <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                  </svg>
                </button>
                <button style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", alignItems: "center", position: "relative" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="1.6">
                    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                    <line x1="3" y1="6" x2="21" y2="6"/>
                    <path d="M16 10a4 4 0 0 1-8 0"/>
                  </svg>
                  <span style={{
                    position: "absolute", top: "-5px", right: "-7px",
                    width: "14px", height: "14px", background: "#0a0a0a",
                    color: "#fff", fontSize: "0.45rem", fontWeight: 800,
                    borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center"
                  }}>0</span>
                </button>
              </>
            ) : (
              <a href="/connexion" style={{
                background: "#0a0a0a", color: "#fff",
                fontFamily: "'Barlow Condensed', sans-serif",
                fontWeight: 700, fontSize: "0.82rem",
                letterSpacing: "0.08em", textTransform: "uppercase",
                padding: "9px 18px", borderRadius: "30px",
                textDecoration: "none", whiteSpace: "nowrap"
              }}>S'identifier</a>
            )}
            <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", cursor: "pointer", padding: 0, display: "flex", flexDirection: "column", gap: "5px" }}>
              <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a" }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a" }}></span>
              <span style={{ display: "block", width: "22px", height: "2px", background: "#0a0a0a" }}></span>
            </button>
          </div>
        </div>

        {/* Rangée 2 - Barre recherche */}
        <div style={{ padding: "8px 16px 12px" }}>
          <div style={{
            display: "flex", alignItems: "center", gap: "10px",
            background: "#f2f2f2", borderRadius: "30px",
            padding: "10px 18px", cursor: "pointer"
          }}>
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#999" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: "0.88rem", color: "#999" }}>Rechercher un produit...</span>
          </div>
        </div>
      </header>

      {/* Menu mobile déroulant */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "112px", left: 0, right: 0,
          background: "#fff", zIndex: 99,
          borderBottom: "1px solid #efefef",
          padding: "24px 20px"
        }}>
          {["Sneakers", "Sacs", "Accessoires", "Vêtements", "Sports"].map(link => (
            <a key={link} href="#" style={{
              display: "block", padding: "14px 0",
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 700, fontSize: "1.6rem",
              letterSpacing: "0.08em", textTransform: "uppercase",
              color: "#0a0a0a", textDecoration: "none",
              borderBottom: "1px solid #f0f0f0"
            }}>{link}</a>
          ))}
        </div>
      )}
    </>
  )
}