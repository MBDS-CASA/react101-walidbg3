import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar.jsx";
import MainContent from "./MainContent.jsx";
import Notes from "./Notes.jsx";
import Etudiants from "./Etudiants.jsx";
import Matieres from "./Matieres.jsx";
import Apropos from "./Apropos.jsx";
import Footer from "./Footer.jsx";
import StudentDetail from "./StudentDetail.jsx";
import CourseDetail from "./CourseDetail.jsx";
import GradeDetail from "./GradeDetail.jsx";

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

                    {/* Students Routes */}
                    <Route path="/students" element={<Etudiants />} />
                    <Route path="/students/:id" element={<StudentDetail />} />

                    {/* Courses Routes */}
                    <Route path="/courses" element={<Matieres />} />
                    <Route path="/courses/:id" element={<CourseDetail />} />

                    {/* Grades Routes */}
                    <Route path="/grades" element={<Notes />} />
                    <Route path="/grades/:id" element={<GradeDetail />} />

                    <Route path="/apropos" element={<Apropos />} />

                    {/* Legacy redirects can be handled here if needed, or we just cut over cleanly */}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default AppRouter;
