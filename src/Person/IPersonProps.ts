import { ReactNode } from "react";

export interface IPerson {
    name: string; 
    age: number; 
    children: ReactNode; 
    switchNameHandler(): void; 
}