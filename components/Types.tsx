import { ImageProps } from "next/image";
import React, { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";

//Tailwind component types

export interface twd<P={}>{(prop:HtmlHTMLAttributes<HTMLDivElement>&P):JSX.Element}

export interface twa<P={}>{(prop:HtmlHTMLAttributes<HTMLAnchorElement>&P): JSX.Element}

export interface twi<P={}>{(prop:ImageProps &P): JSX.Element}

export interface twp<P={}>{(prop:HTMLAttributes<HTMLParagraphElement> &P): JSX.Element}

export interface twl<P={}>{(prop:HTMLAttributes<HTMLLabelElement> &P): JSX.Element}

export interface twin<P={}>{(prop:InputHTMLAttributes<HTMLInputElement>&P): JSX.Element}

export interface twh<P={}>{(prop:HTMLAttributes<HTMLHeadingElement>&P): JSX.Element}

export interface twb<P={}>{(prop:HTMLAttributes<HTMLButtonElement>&P): JSX.Element}

export interface tws<P={}>{(prop:SelectHTMLAttributes<HTMLSelectElement>&P): JSX.Element}

class styles {
    div(){
        return (
         ()=>{return (
             <div></div>
         ) } 
        )
    }
}

const styled =new styles()

const C= styled.div()
const F:React.FC = ()=>{
    return <div></div>
}

const D=()=>{
    return(
        <F  ></F>
    )
}