import data from '../assets/data.json';


function Notes() {
    return (
        <div className="notes-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Grades</h1>
                    <p className="page-subtitle">Detailed record of student performance.</p>
                </div>
            </div>

            <div className="table-container">
                <table className="custom-table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Student Name</th>
                            <th>Course</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(item => (
                            <tr key={item.unique_id}>
                                <td className="id-col">#{item.unique_id}</td>
                                <td>
                                    <div className="student-cell">
                                        <div className="avatar-small">{item.student.firstname[0]}{item.student.lastname[0]}</div>
                                        {item.student.firstname} {item.student.lastname}
                                    </div>
                                </td>
                                <td>{item.course}</td>
                                <td className="date-col">{item.date}</td>
                                <td className="grade-col">{item.grade}</td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Notes;
