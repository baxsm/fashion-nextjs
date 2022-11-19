import React from 'react'
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
    </>
  )
}
