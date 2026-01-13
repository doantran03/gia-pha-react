import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import type { ReactNode } from "react";

interface MainLayoutProps {
    children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
    return (
        <>
            <Header />
            <main id="main">{children}</main>
            <Footer />
        </>
    );
}

export default MainLayout;