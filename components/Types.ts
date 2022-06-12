import { ImageProps } from "next/image";
import { HTMLAttributes, HtmlHTMLAttributes, InputHTMLAttributes, SelectHTMLAttributes } from "react";

//Tailwind component types

export type twd<P={}>=(prop:HtmlHTMLAttributes<HTMLDivElement>&P)=> JSX.Element;

export type twa<P={}>=(prop:HtmlHTMLAttributes<HTMLAnchorElement>&P)=> JSX.Element

export type twi<P={}>=(prop:ImageProps &P)=> JSX.Element

export type twp<P={}>=(prop:HTMLAttributes<HTMLParagraphElement> &P)=> JSX.Element

export type twl<P={}>=(prop:HTMLAttributes<HTMLLabelElement> &P)=> JSX.Element

export type twin<P={}>=(prop:InputHTMLAttributes<HTMLInputElement>&P)=> JSX.Element

export type twh<P={}>=(prop:HTMLAttributes<HTMLHeadingElement>&P)=> JSX.Element

export type twb<P={}>=(prop:HTMLAttributes<HTMLButtonElement>&P)=> JSX.Element

export type tws<P={}>=(prop:SelectHTMLAttributes<HTMLSelectElement>&P)=> JSX.Element