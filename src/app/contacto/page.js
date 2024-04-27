import { Montserrat } from 'next/font/google'
export const montserrat = Montserrat({ subsets:['latin'] })


export default function ContactPage(){
    return (
        <main className="flex items-center justify-center h-screen">
            <p className={`${montserrat.className}`}>Contacto</p>
        </main>
    )
}

