import './globals.css'
import 'aos/dist/aos.css';

import { Montserrat } from 'next/font/google'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const montserrat = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Grupo Castelini - Moda dos pés à cabeça',
  description: 'Moda dos pés a cabeça',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>
        {children}
        <ToastContainer position='bottom-right' autoClose={5000} />
      </body>
    </html>
  )
}
