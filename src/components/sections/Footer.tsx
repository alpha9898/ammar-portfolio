export default function Footer() {
  return (
    <footer style={footerStyle}>
      <p style={msgStyle}>The future isn&apos;t built yet.</p>
      <p style={subStyle}>AWS SAA-C03 · CKA · Terraform Associate · and the rest is coming</p>
      <p style={copyStyle}>© 2026 AMAR YASSER MOHAMED SAYED · CAIRO, EGYPT</p>
    </footer>
  );
}

const footerStyle: React.CSSProperties = {
  position:"relative", zIndex:10,
  padding:"4rem 1.5rem 2.5rem", textAlign:"center",
  borderTop:"1px solid rgba(255,255,255,.04)",
};
const msgStyle: React.CSSProperties = {
  fontSize:"clamp(1.8rem,5vw,3.2rem)", fontWeight:900,
  background:"linear-gradient(to right,var(--ember),var(--gold))",
  WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text",
  marginBottom:"1rem",
};
const subStyle: React.CSSProperties  = { fontSize:".85rem", color:"rgba(232,237,247,.28)", fontWeight:300, letterSpacing:".05em" };
const copyStyle: React.CSSProperties = { marginTop:"2.5rem", fontFamily:"Space Mono,monospace", fontSize:".58rem", letterSpacing:".15em", color:"rgba(232,237,247,.14)" };
