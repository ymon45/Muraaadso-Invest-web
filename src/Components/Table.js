import React from 'react'
import './Table.css'
import { DataGrid } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/styles';



    const columns = [
  {headerName: 'ID', width: 8 },
  {
    field: 'Year',
    headerName: 'Year',
    headerClassName: 'super-app-theme--header',
    sortable: true,
    width: 160,
    
  },
  
  {
    field: 'January',
    headerName: 'January',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'February',
    headerName: 'February',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'March',
    headerName: 'March',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'April',
    headerName: 'April',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'May',
    headerName: 'May',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'june',
    headerName: 'June',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'July',
    headerName: 'July',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'August',
    headerName: 'August',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'September',
    headerName: 'September',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'October',
    headerName: 'October',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'November',
    headerName: 'November',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'December',
    headerName: 'December',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  {
    field: 'Total',
    headerName: 'Total',
    headerClassName: 'super-app-theme--header',
    width: 150,
    editable: false,
    sortable: true,

  },
  
];

const rows = [
  { id: 1,  Year: '2021', January:'2.90%',December:'', February:'3.20%', March:'4.80%', April:'-0.01%', May:'-1.05%', june:'1.15%', July:'0.00%', August:'9.12%', September:'7.0%', October:'', November:'', Total:'' },
  { id: 2, Year: '2020', January:'1.46%',December:'1.91%', February:'1.23%', March:'7.81%', April:'6.44%', May:'15.38%', june:'11.06%', July:'10.89%', August:'7.90%', September:'10.61%', October:'6.92%', November:'3.68%', Total:'85.25%'  },
  { id: 3, Year: '2019', January:'1.14%',December:'5.99%', February:'-2.06%', March:'3.12%', April:'4.99%', May:'1.72%', june:'1.03%', July:'2.09%', August:'2.75%', September:'5.89%', October:'6.84%', November:'8.87%', Total:'42.64%'  },
  { id: 4, Year: '2018', January:'2.73%',December:'1.83%', February:'-4.01%', March:'-4.03%', April:'0.44%', May:'-6.94%', june:'-8.84%', July:'-0.89%', August:'-2.14%', September:'-2.86%', October:'3.03%', November:'3.04%', Total:'-18.64%' },
  { id: 5, Year: '2017', January:'2.89%',December:'7.19%', February:'1.50%', March:'4.95%', April:'-3.8%', May:'1.26%', june:'0.61%', July:'2.51%', August:'3.02%', September:'6.79%', October:'7.09%', November:'3.69%' , Total:'37.67%' },
  { id: 6, Year: '2016', January:'--',December:'11.33%', February:'--', March:'11.76%', April:'10.89%', May:'11.36%', june:'8.13%', July:'7.76%', August:'9.92%', September:'9.79%', October:'7.64%', November:'12.08' , Total:'100.66%' },

];


const useStyles = makeStyles({

  root: {
      border: '1px solid black',
      borderRadius:0,
      background: '#fff',
      color: 'black',
      fontWeight:'500',
      scrollBehavior:'smooth',
      scrollbarColor: '#ff0000',
    '& .super-app-theme--header': {
      backgroundColor: 'rgba(0,17,44,1)',
      color: 'rgba(255,255,255,1)'

    },
    '& .MuiSvgIcon-root':{
            color:'white'
        
    },
    '& .MuiDataGrid-sortIcon':{
        opacity:0,
        color:'#fff',
     }
     
  },
 
});


const Table = () => {
          const classes = useStyles();
    return (
      <div className="tb">

        <div   style={{ height: 400, width: '89%', margin: '20px auto', boxShadow: '12px 10px #ff0000' }} className={classes.root} id="tble" >
      <DataGrid 
      className={classes.root}
      rows={rows}
      columns={columns}
      pageSize={6}
      />
    </div>
      </div>
    )
}

export default Table
