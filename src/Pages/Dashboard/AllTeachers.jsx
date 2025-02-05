import React from 'react'
// import Dashboard from "../Dashboard"
import SideNav from '../../Components/SideNav'
import DasboardHeader from './DasboardHeader'
import DataTable from "react-data-table-component"

const AllTeachers = () => {

    const data = [
        { id: 1, name: "Cambuulo", age: 25, city: "New York" },
        { id: 2, name: "Bob", age: 30, city: "Los Angeles" },
        { id: 3, name: "Charlie", age: 28, city: "Chicago" },
      ];

  return (
    <div>
    <div className=' bg-fixed'>
<DasboardHeader/>
      <SideNav/>
    </div>

      <div className='bg-gray-200 w-full h-screen mt-0 '>

<div>

      <div className='bg-white rounded-lg w-[1040px] h-[490px] shadow-2xl ml-[215px] absolute top-[60px]  '>

      <table className='items-center' border="1" style={{ width: "100%", textAlign: "left" }}>
      <thead className=''>
        <tr className='bg-black text-white'>
          <th className='bg-red-500'>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody className='bg-gray-200'>
        {data.map((item) => (
          <tr className='' key={item.id}>
            <td className=''>{item.id}</td>
            <td>{item.name}</td>
            <td>{item.age}</td>
            <td>{item.city}</td>
          </tr>
        ))}
      </tbody>
    </table>

</div>
      </div>

      </div>
    </div>
  )
}

export default AllTeachers

