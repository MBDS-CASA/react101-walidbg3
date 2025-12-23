import data from '../assets/data.json';
import { useMemo, useState } from 'react';


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

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map(student => (
                            <tr key={student.id}>
                                <td className="id-col">{student.id}</td>
                                <td>{student.firstname}</td>
                                <td>{student.lastname}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Etudiants;
