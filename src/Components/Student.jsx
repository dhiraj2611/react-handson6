import React, { useContext } from "react";
import "./Style.css";
import { Link } from "react-router-dom";
import { add } from './Details'


const Student = () => {
  const [student] = useContext(add);
    return ( <>

    <h1>Student Details</h1>

        <div className='tab'>
        <table class="table table-hover">
        <thead>
        <br />
       
        <Link to="/NewStudents">
    <button className='btn'>Add Students</button>
    </Link>
        

        <tr>
          <th scope="col">NAME</th>
          <th scope="col">AGE</th>
          <th scope="col">COURSE</th>
          <th scope="col">BATCH</th>
          <th scope="col">CHANGE</th>
        </tr>
      </thead>
      <tbody>
        {student.map((student) => (
          <tr key={student.id}>
            <td>{student.Name}</td>
            <td>{student.Age}</td>
            <td>{student.Course}</td>
            <td>{student.Batch}</td>
            <td>
              <Link to={`/EditStudent/${student.id}`}>Edit</Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
</div>


</>

     );
}
 
export default Student;