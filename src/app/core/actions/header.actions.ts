import { Tatorial } from "@aqua/models/header.model";

export class AddTatorial{
    static readonly type = '[TUTORIAL] Add' ;
    constructor (public payload: Tatorial){}
}
export class RemoveTatorial{
    static readonly type = '[TUTORIAL] Remove' ;
    constructor (public payload: string ){}
}
