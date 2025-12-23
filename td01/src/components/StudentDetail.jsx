import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
import { useMemo } from 'react';

function StudentDetail() {
    const { id } = useParams();

    const studentData = useMemo(() => {
        const grades = data.filter(d => d.student.id.toString() === id);
        if (grades.length === 0) return null;

        const student = grades[0].student;

        // Calculate stats
        const totalGrades = grades.length;
        const average = (grades.reduce((acc, curr) => acc + curr.grade, 0) / totalGrades).toFixed(1);

        return { info: student, grades, stats: { totalGrades, average } };
    }, [id]);

    if (!studentData) {
        return <div className="container" style={{ textAlign: 'center' }}>Student not found.</div>;
    }

    return (
        <div className="container">
            <Link to="/students" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>&larr; Back to Students</Link>

            <div className="page-header">
                <div>
                    <h1 className="page-title">{studentData.info.firstname} {studentData.info.lastname}</h1>
                    <p className="page-subtitle">Student ID: {studentData.info.id}</p>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-xl)' }}>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3>Average Grade</h3>
                    <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold' }}>{studentData.stats.average}</p>
                </div>
                <div className="card" style={{ textAlign: 'center' }}>
                    <h3>Total Grades</h3>
                    <p style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold' }}>{studentData.stats.totalGrades}</p>
                </div>
            </div>

            <h2>Grades History</h2>
            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Grade</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {studentData.grades.map(grade => (
                            <tr key={grade.unique_id}>
                                <td>{grade.course}</td>
                                <td>{grade.date}</td>
                                <td>{grade.grade}</td>
                                <td>
                                    <Link to={`/grades/${grade.unique_id}`} style={{ color: 'var(--text-muted)', textDecoration: 'underline' }}>View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentDetail;
