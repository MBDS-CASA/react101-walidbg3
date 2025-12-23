import { useParams, Link } from 'react-router-dom';
import data from '../data/data.json';
import { useMemo } from 'react';

function GradeDetail() {
    const { id } = useParams();

    const grade = useMemo(() => {
        return data.find(d => d.unique_id.toString() === id);
    }, [id]);

    if (!grade) {
        return <div className="container" style={{ textAlign: 'center' }}>Grade not found.</div>;
    }

    return (
        <div className="container">
            <Link to="/grades" style={{ color: 'var(--text-muted)', marginBottom: 'var(--spacing-md)', display: 'inline-block' }}>&larr; Back to Grades</Link>

            <div className="page-header">
                <h1 className="page-title">Grade Detail #{grade.unique_id}</h1>
            </div>

            <div className="card" style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--spacing-lg)' }}>
                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>Student</label>
                        <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: '500' }}>
                            <Link to={`/students/${grade.student.id}`} style={{ textDecoration: 'underline' }}>
                                {grade.student.firstname} {grade.student.lastname}
                            </Link>
                        </div>
                        <div style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>ID: {grade.student.id}</div>
                    </div>

                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>Course</label>
                        <div style={{ fontSize: 'var(--font-size-lg)', fontWeight: '500' }}>
                            <Link to={`/courses/${grade.course}`} style={{ textDecoration: 'underline' }}>
                                {grade.course}
                            </Link>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>Grade</label>
                        <div style={{ fontSize: 'var(--font-size-3xl)', fontWeight: 'bold', color: grade.grade >= 10 ? 'var(--success-color)' : 'var(--danger-color)' }}>
                            {grade.grade}
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>Date</label>
                        <div style={{ fontSize: 'var(--font-size-lg)' }}>{grade.date}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GradeDetail;
