import * as React from 'react'
import PaddingTable from './components/table-component/table-component.component'
import RadiosExample from './components/form-radio-component/form-radio-component.component'
import CardContentCentered from './components/card-component/card-component.component'

export const ExampleComponent = () => {
  return (
    <div>
      <CardContentCentered></CardContentCentered>
      <h3>How are you?</h3>
      <RadiosExample></RadiosExample>
      <h3>Look at this table</h3>
      <PaddingTable></PaddingTable>
    </div>
  )
}
