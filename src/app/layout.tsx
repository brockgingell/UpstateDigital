'use client'
import '@/styles/globals.css'
import { ThemeProvider } from "@/components/navbar/theme-provider"
import NavBar from '@/components/navbar/navbar'
import SiteFooter from '@/components/site-footer'
import { motion, AnimatePresence } from 'framer-motion'
import { fontSans } from '@/lib/fonts'


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={fontSans.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AnimatePresence>
          <NavBar />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 2 }}
            transition={{ delay: .25 }}
          >
            {children}
          </motion.div>
          <SiteFooter />
        </AnimatePresence>
      </ThemeProvider>
      </body>
    </html>
  )
}
