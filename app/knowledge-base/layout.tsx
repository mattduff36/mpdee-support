export default function KnowledgeBaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="kb-shell">{children}</div>;
}
