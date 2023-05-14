"use client";
import './globals.css'
import { Inter } from 'next/font/google'
import { ThirdwebProvider, localWallet, metamaskWallet } from '@thirdweb-dev/react';

const inter = Inter({ subsets: ['latin'] })

const activeChain = "mumbai";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThirdwebProvider
      activeChain={activeChain}
      supportedWallets={[
        metamaskWallet(),
        localWallet()
      ]}
    >
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ThirdwebProvider>
  )
}
