import data from '../data/data.json';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable';

function Matieres() {
    // Extract unique courses from data
    const courses = useMemo(() => {
        const uniqueCourses = new Map();
        data.forEach(item => {
            if (!uniqueCourses.has(item.course)) {
                // Calculate average grade for the course
                const courseGrades = data.filter(d => d.course === item.course).map(d => d.grade);
                const avg = (courseGrades.reduce((a, b) => a + b, 0) / courseGrades.length).toFixed(1);

                uniqueCourses.set(item.course, {
                    name: item.course,
                    count: courseGrades.length,
                    average: avg
                });
            }
        });
        return Array.from(uniqueCourses.values());
    }, []);

    const columns = [
        { id: 'name', label: 'Subject Name' },
        { id: 'count', label: 'Student Count' },
        {
            id: 'actions',
            label: 'Actions',
            disableSort: true,
            render: (row) => (
                <Link to={`/courses/${row.name}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                    View
                </Link>
            )
        }
    ];

    return (
        <div className="matieres-container">
            <div className="page-header">
                <h1 className="page-title">Subjects</h1>
            </div>

            <DataTable
                rows={courses}
                columns={columns}
                searchPlaceholder="Search subjects..."
            />
        </div>
    );
}

export default Matieres;
