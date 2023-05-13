import React from 'react'
import { Link } from 'react-router-dom'

function Student() {
  const Studentdata = ()=>{
    
  }

  return (
    <div >
      <div className='mystudent'>
      <h1 className='mystd'>Student Details</h1>
      <button className='mybtn' onClick={Studentdata}>Add New Student</button>
      </div>
      <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Course</th>
                    <th>Batch</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Ram</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Lakshman</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Bharat</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Shatrughan</td>
                    <td>22</td>
                    <td>MERN</td>
                    <td>September</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Hanuman</td>
                    <td>23</td>
                    <td>MERN</td>
                    <td>October</td>
                    <td><Link>Edit</Link></td>
                </tr>
                <tr>
                    <td>Luvkush</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td><Link>Edit</Link></td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}
export default Student
