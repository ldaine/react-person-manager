import { IPerson } from "../../models/IPerson";

export interface IPersonmanagerState {
    isVisible:boolean; 
    persons: IPerson[]; 
}