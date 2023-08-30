import React from "react";
import { DataGrid } from "@mui/x-data-grid";
class BalanceSheetTableView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const sheet = [
      {
        id: 1,
        year: 2020,
        month: 12,
        profitOrLoss: 250000,
        assetsValue: 1234,
      },
      {
        id: 2,
        year: 2020,
        month: 11,
        profitOrLoss: 1150,
        assetsValue: 5789,
      },
      {
        id: 3,
        year: 2020,
        month: 10,
        profitOrLoss: 2500,
        assetsValue: 22345,
      },
      {
        id: 4,
        year: 2020,
        month: 9,
        profitOrLoss: -187000,
        assetsValue: 223452,
      },
    ];
    console.log(this.props.rows);

    const columns = [
      { field: "year", headerName: "Year", width: 130 },
      { field: "month", headerName: "Month", width: 130, sortable: true },
      { field: "profitOrLoss", headerName: "Profit/Loss", width: 130 },
      { field: "assetsValue", headerName: "Assets Value", width: 130 },
    ];
    return (
      <>
        <DataGrid
          rows={this.props.rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </>
    );
  }
}
export default BalanceSheetTableView;
