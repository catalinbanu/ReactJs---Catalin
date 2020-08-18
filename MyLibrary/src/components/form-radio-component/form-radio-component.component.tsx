import React from 'react'
import Radio from 'terra-form-radio'
const RadiosExample = () => (
  <div>
    <Radio id='first' labelText='sad' name='multiple-group' defaultChecked />
    <Radio id='second' labelText='fine' name='multiple-group' />
    <Radio id='third' labelText='happy' name='multiple-group' />
  </div>
)
export default RadiosExample
