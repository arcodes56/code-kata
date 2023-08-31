import React from "react";
import { DataGrid } from "@mui/x-data-grid";

class BalanceSheetTableView extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
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
