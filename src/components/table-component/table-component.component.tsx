import React from "react";
import Table from "terra-table";

const UserTable = () => (
  <Table
    summaryId="striped-table"
    summary="This table displays striped rows."
    numberOfColumns={3}
    dividerStyle="horizontal"
    headerData={{
      cells: [
        { id: "header-id", key: "id", children: "ID" },
        { id: "header-name", key: "name", children: "Name" },
        { id: "header-username", key: "username", children: "Username" },
        { id: "header-mail", key: "mail", children: "Mail" },
        { id: "header-address", key: "address", children: "Address" },
        { id: "header-phone", key: "phone", children: "Phone" },
        { id: "header-website", key: "website", children: "Website" },
        { id: "header-company", key: "company", children: "Company" },
      ],
    }}
    bodyData={[]}
  />
);
export default UserTable;
