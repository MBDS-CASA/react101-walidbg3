import data from '../data/data.json';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Subject Name</TableCell>
                            <TableCell>Student Count</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {courses.map((course) => (
                            <TableRow
                                key={course.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {course.name}
                                </TableCell>
                                <TableCell>{course.count}</TableCell>
                                <TableCell>
                                    <Link to={`/courses/${course.name}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                                        View
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}

export default Matieres;
