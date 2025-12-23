import data from '../data/data.json';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Notes() {
    return (
        <div className="notes-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Grades</h1>
                    <p className="page-subtitle">Detailed record of student performance.</p>
                </div>
            </div>

            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Student Name</TableCell>
                            <TableCell>Course</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>Grade</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((item) => (
                            <TableRow
                                key={item.unique_id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    #{item.unique_id}
                                </TableCell>
                                <TableCell>
                                    {item.student.firstname} {item.student.lastname}
                                </TableCell>
                                <TableCell>{item.course}</TableCell>
                                <TableCell>{item.date}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold' }}>{item.grade}</TableCell>
                                <TableCell>
                                    <Link to={`/grades/${item.unique_id}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
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

export default Notes;
