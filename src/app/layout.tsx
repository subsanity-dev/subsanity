// src/app/layout.tsx
export const metadata = {
  title: 'PestComply',
  description: 'Never miss another license expiry date.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
