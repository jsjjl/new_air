export const table1Columns = [
    {
        title: '序号',
        type: 'index',
        width: 80,
        align: 'center'
    },
    {
        title: '日期',
        align: 'center',
        key: 'add_str',
        editable: true
    },
    {
        title: '用户吗',
        align: 'center',
        key: 'login_name'
    },
    {
        title: '心率',
        align: 'center',
        key: 'step',
        editable: true
    }
];




   


// export const table1Data = [
//     {
//         name: 'Aresn',
//         step: '55',
//         heart: '90'
//     },
//     {
//         name: 'Lison',
//         step: '20',
//         heart: '100'
//     },
//     {
//         name: 'lisa',
//         step: '9',
//         heart: '98'
//     }
// ];


const tableData = {
    table1Columns: table1Columns,
   // table1Data: table1Data,
    
};

export default tableData;
