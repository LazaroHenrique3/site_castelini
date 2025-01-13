import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"

interface IPublicLayoutProps {
    children: React.ReactNode
}

const PublicLayout = ({ children }: IPublicLayoutProps) => {
    return (
        <div>
            <Navbar />
            <main>
                <>{children}</>
            </main>
            <Footer />
        </div>
    )
}

export default PublicLayout; 