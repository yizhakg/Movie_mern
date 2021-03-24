import React, { useEffect, useState } from 'react'
import MUIDataTable from "mui-datatables";
import axios from 'axios';

export default function SmartTable(props) {
  const [tableData, setTableData] = useState([])
  console.log(tableData)
  useEffect(() => {
    axios.get('http://localhost:8080/movies/all',).then((res) => {
      setTableData(res.data.data)
    })
  }, [])
  const columns = ["movieName", "rating", "year"];


  const options = {
    filterType: 'checkbox',
  };

  return <MUIDataTable
    title={"Employee List"}
    data={tableData}
    columns={columns}
    options={options}
  />
}
