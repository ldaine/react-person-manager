import { ReactNode, ChangeEvent } from "react";
import { IPerson } from "../../models/IPerson";

export interface IPersonProps {
    person: IPerson; 
    children: ReactNode; 
    switchNameHandler: (id: number)=>void; 
    onChangeNameHandler: (event: ChangeEvent<HTMLInputElement>, id: number)=>void; 
}