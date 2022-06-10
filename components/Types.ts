import { ImageConfig } from "next/dist/shared/lib/image-config";
import { ImageLoader, ImageLoaderProps, ImageProps } from "next/image";
import { HTMLAttributes, HtmlHTMLAttributes, PropsWithChildren, ReactNode } from "react";

//Tailwind component types

export type twd<P={}>=(prop:HtmlHTMLAttributes<HTMLDivElement>&P)=> JSX.Element;

export type twa<P={}>=(prop:HtmlHTMLAttributes<HTMLAnchorElement>&P)=> JSX.Element

export type twi<P={}>=(prop:ImageProps &P)=> JSX.Element

export type twp<P={}>=(prop:HTMLAttributes<HTMLParagraphElement> &P)=> JSX.Element
