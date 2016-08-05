import { Injectable } from '@angular/core';
import {info} from './mockData'
import {Data} from './data'
@Injectable()
export class DataService {
    getData(part: number,id:string){
        return Promise.resolve(info[part].id);
    }
    returnData(info: Data){
        //pass data to server somehow
        alert(info.id+','+info.name);
    }
}