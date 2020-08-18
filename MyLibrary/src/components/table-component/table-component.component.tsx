import React from 'react'
import Table from 'terra-table'
const PaddingTable = () => (
  <Table
    summaryId='compact-table'
    summary='This table has compact row padding.'
    cellPaddingStyle='compact'
    numberOfColumns={1}
    dividerStyle='horizontal'
    headerData={{
      cells: [
        { id: 'header-name', key: 'name', children: 'Name' },
        { id: 'header-address', key: 'address', children: 'Address' },
        {
          id: 'header-phone_number',
          key: 'phone_number',
          children: 'Phone Number'
        }
      ]
    }}
    bodyData={[
      {
        rows: [
          {
            key: 'row-0',
            cells: [
              { key: 'cell-0', children: 'Catalin' },
              { key: 'cell-1', children: 'Brasov' },
              { key: 'cell-2', children: '111-222-3333' }
            ]
          },
          {
            key: 'row-1',
            cells: [
              { key: 'cell-0', children: 'Cezar' },
              { key: 'cell-1', children: 'Brasov' },
              { key: 'cell-2', children: '444-555-6666' }
            ]
          },
          {
            key: 'row-2',
            cells: [
              { key: 'cell-0', children: 'Razvan' },
              { key: 'cell-1', children: 'Brasov' },
              { key: 'cell-2', children: '777-888-9999' }
            ]
          }
        ]
      }
    ]}
  />
)
export default PaddingTable
