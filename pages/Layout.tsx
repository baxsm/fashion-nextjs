import React from 'react'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header'

type AllProps = {
  children: React.ReactNode,
};

export default function Layout({ children }: AllProps) {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}
