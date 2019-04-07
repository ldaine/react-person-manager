import { ReactNode, ChangeEvent } from "react";

export interface IPerson {
    name: string; 
    age: number; 
    children: ReactNode; 
    switchNameHandler(name: string):void; 
    onChangeNameHandler(event: ChangeEvent<HTMLInputElement>):void; 
}