import data from '../data/data.json';
import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

function Etudiants() {
    const [searchTerm, setSearchTerm] = useState('');

    // Extract unique students from data
    const students = useMemo(() => {
        const uniqueStudents = new Map();
        data.forEach(item => {
            if (!uniqueStudents.has(item.student.id)) {
                uniqueStudents.set(item.student.id, item.student);
            }
        });
        return Array.from(uniqueStudents.values());
    }, []);

    const filteredStudents = students.filter(student =>
        student.firstname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.lastname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.id.toString().includes(searchTerm)
    );

    return (
        <div className="etudiants-container">
            <div className="page-header">
                <h1 className="page-title">Students</h1>
            </div>

            <Box sx={{ mb: 2 }}>
                <TextField
                    label="Search Students"
                    variant="outlined"
                    size="small"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    fullWidth
                />
            </Box>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>First Name</TableCell>
                            <TableCell>Last Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {filteredStudents.map((student) => (
                            <TableRow
                                key={student.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {student.id}
                                </TableCell>
                                <TableCell>{student.firstname}</TableCell>
                                <TableCell>{student.lastname}</TableCell>
                                <TableCell>
                                    <Link to={`/students/${student.id}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
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

export default Etudiants;
