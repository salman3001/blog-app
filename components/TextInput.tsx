import React, { ChangeEvent } from 'react'
import { twd, twin, twl } from './Types'

interface ItextInput{
    label:string
    value:string
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void

}

export default function TextInput(prop:ItextInput) {
    return (
        <Container>
            <Label>
                {prop.label}
                <InputText value={prop.value} onChange={prop.onChange} />
            </Label>
        </Container>
    )
}

const Container:twd=(prop)=><div
{...prop}
className={``}/>

const Label: twl = (prop) => <label
    {...prop}
    className={``} />

const InputText: twin = (prop) => <input
    {...prop}
    type="text"
    className={`block input input-sm input-bordered w-full max-w-xs`} />