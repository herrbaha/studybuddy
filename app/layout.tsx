import Header from "../app/_components/Header";
import Footer from "./_components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
