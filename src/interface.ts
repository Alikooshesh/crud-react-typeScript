export interface Iinput{
    name : string;
    id? : string;
    label : string;
    fullValue : IinputData;
    setValue : Function;
    value : string
}

export interface IinputData{
    Fname : string;
    Lname : string
}

export interface Ihuman{
    Fname : string;
    Lname : string;
    id : number
}

export interface ItableData {
    data: Ihuman[],
    delete: Function,
    edit: Function,
}
