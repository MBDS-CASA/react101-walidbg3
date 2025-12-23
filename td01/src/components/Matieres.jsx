import data from '../assets/data.json';
import { useMemo } from 'react';


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

    return (
        <div className="matieres-container">
            <div className="page-header">
                <h1 className="page-title">Subjects</h1>
            </div>

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>Subject Name</th>
                            <th>Student Count</th>
                        </tr>
                    </thead>
                    <tbody>
                        {courses.map(course => (
                            <tr key={course.name}>
                                <td>{course.name}</td>
                                <td>{course.count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Matieres;
