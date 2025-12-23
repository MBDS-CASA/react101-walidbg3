import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import MainContent from "./MainContent.jsx";
import Notes from "./Notes.jsx";
import Etudiants from "./Etudiants.jsx";
import Matieres from "./Matieres.jsx";
import Apropos from "./Apropos.jsx";
import Footer from "./Footer.jsx";

// Minimal Layout Wrapper
const Layout = ({ children }) => (
    <div style={{ display: 'flex', minHeight: '100vh', paddingLeft: '260px' }}>
        <Sidebar />
        <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
            <main style={{ flex: 1, padding: '2rem' }}>
                {children}
            </main>
            <Footer />
        </div>
    </div>
);

function AppRouter() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<MainContent />} />
                    <Route path="/note" element={<Notes />} />
                    <Route path="/etudiants" element={<Etudiants />} />
                    <Route path="/matieres" element={<Matieres />} />
                    <Route path="/apropos" element={<Apropos />} />
                </Routes>
            </Layout>
        </BrowserRouter>


    );
}

export default AppRouter;
