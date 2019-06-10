import { ReactNode, ChangeEvent } from "react";

export interface IPersonProps {
    name: string; 
    age: number; 
    children: ReactNode; 
    switchNameHandler(name: string):void; 
    onChangeNameHandler(event: ChangeEvent<HTMLInputElement>):void; 
}