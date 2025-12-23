import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
import { useMemo } from 'react';

function CourseDetail() {
    const { id } = useParams(); // 'id' contains the course name based on our routing
    const courseName = decodeURIComponent(id);

    const courseData = useMemo(() => {
        const grades = data.filter(d => d.course === courseName);

        if (grades.length === 0) return null;

        // Calculate stats
        const totalStudents = new Set(grades.map(g => g.student.id)).size;
        const average = (grades.reduce((acc, curr) => acc + curr.grade, 0) / grades.length).toFixed(1);

        return { grades, stats: { totalStudents, average } };
    }, [courseName]);

    if (!courseData) {
        return <div className="container" style={{ textAlign: 'center' }}>Course not found.</div>;
    }

    return (
        <div className="container">
            <Link to="/courses" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>&larr; Back to Subjects</Link>

            <div className="page-header">
                <h1 className="page-title">{courseName}</h1>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3>Average Performance</h3>
                    <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold' }}>{courseData.stats.average}</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3>Enrolled Students</h3>
                    <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold' }}>{courseData.stats.totalStudents}</p>
                </div>
            </div>

            <h2>Student Performance</h2>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Student</th>
                            <th>Date</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courseData.grades.map(grade => (
                            <tr key={grade.unique_id}>
                                <td>{grade.student.firstname} {grade.student.lastname}</td>
                                <td>{grade.date}</td>
                                <td>{grade.grade}</td>
                                <td>
                                    <Link to={`/grades/${grade.unique_id}`} style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>View Grade</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default CourseDetail;
