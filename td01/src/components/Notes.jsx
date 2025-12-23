import data from '../data/data.json';
import { Link } from 'react-router-dom';
import { useMemo } from 'react';
import DataTable from './DataTable';

function Notes() {
    // Prepare data for table, flattening the object where necessary
    const rows = useMemo(() => {
        return data.map(item => ({
            unique_id: item.unique_id,
            studentName: `${item.student.firstname} ${item.student.lastname}`,
            course: item.course,
            date: item.date,
            grade: item.grade
        }));
    }, []);

    const columns = [
        { id: 'unique_id', label: 'ID' },
        { id: 'studentName', label: 'Student Name' },
        { id: 'course', label: 'Course' },
        { id: 'date', label: 'Date' },
        { id: 'grade', label: 'Grade' },
        {
            id: 'actions',
            label: 'Actions',
            disableSort: true,
            render: (row) => (
                <Link to={`/grades/${row.unique_id}`} style={{ color: 'inherit', textDecoration: 'underline' }}>
                    View
                </Link>
            )
        }
    ];

    return (
        <div className="notes-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Grades</h1>
                    <p className="page-subtitle">Detailed record of student performance.</p>
                </div>
            </div>

            <DataTable
                rows={rows}
                columns={columns}
                searchPlaceholder="Search grades..."
            />
        </div>
    );
}

export default Notes;
