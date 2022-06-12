import React from 'react'
import { tws } from './Types'

interface ISelectOptions {
    options: string[],
    label: string
}

const SelectOptions:tws<ISelectOptions>=(prop)=> {
    return (
        <select {...prop} className="select select-sm w-full max-w-xs">
            <option >{prop.label}</option>
            {prop.options.map(option => <option>{option}</option>)}
        </select>
    )
}
export default SelectOptions
