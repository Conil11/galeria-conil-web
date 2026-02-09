export const metadata = {
  title: "Galería Conil",
  description: "Arte contemporáneo"
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, fontFamily: "serif" }}>
        {children}
      </body>
    </html>
  );
}
