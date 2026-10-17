import "./globals.css";

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="scheme-light-dark">
      <body className="bg-background font-sans antialiased">{children}</body>
    </html>
  );
}
