import data from '../assets/data.json'; 

function randompick() {
    const randomIndex = Math.floor(Math.random() * data.length);
    return data[randomIndex];
}

function DataDisplay() {
    const row = randompick();

    return (
        <div className="data-display">
            <h2>Détails de l'étudiant</h2>
            <table>
                <tbody>
                    <tr>
                        <td><strong>ID Unique :</strong></td>
                        <td>{row.unique_id}</td>
                    </tr>
                    <tr>
                        <td><strong>Cours :</strong></td>
                        <td>{row.course}</td>
                    </tr>
                    <tr>
                        <td><strong>Date :</strong></td>
                        <td>{row.date}</td>
                    </tr>
                    <tr>
                        <td><strong>Note :</strong></td>
                        <td>{row.grade}</td>
                    </tr>
                    <tr>
                        <td><strong>Étudiant :</strong></td>
                        <td>{row.student.firstname} {row.student.lastname} (ID: {row.student.id})</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DataDisplay;