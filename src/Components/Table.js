import React from 'react'
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
  
];

const rows = [
  { id: 1,  Year: '2021', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20' },
  { id: 2, Year: '2020', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20'  },
  { id: 3, Year: '2019', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20'  },
  { id: 4, Year: '2018', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20' },
  { id: 5, Year: '2017', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20' },
  { id: 6, Year: '2016', January:'20',December:'120', February:'20', March:'20', April:'20', May:'20', june:'20', July:'20', August:'20', September:'20', October:'20', November:'20'},

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
        <div  style={{ height: 400, width: '78%', margin: '20px auto', boxShadow: '12px 10px #ff0000' }} className={classes.root} >
      <DataGrid 
      className={classes.root}
        rows={rows}
        columns={columns}
        pageSize={6}
      />
    </div>
    )
}

export default Table
