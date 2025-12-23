import data from '../data/data.json';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import DataTable from './DataTable';

function Etudiants() {
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

    const columns = [
        { id: 'id', label: 'ID' },
        { id: 'firstname', label: 'First Name' },
        { id: 'lastname', label: 'Last Name' },
        {
            id: 'actions',
            label: 'Actions',
            disableSort: true,
            render: (row) => (
                <Link to={`/students/${row.id}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                    View
                </Link>
            )
        }
    ];

    return (
        <div className="etudiants-container">
            <div className="page-header">
                <h1 className="page-title">Students</h1>
            </div>

            <DataTable
                rows={students}
                columns={columns}
                searchPlaceholder="Search students..."
            />
        </div>
    );
}

export default Etudiants;
