export interface Iinput{
    name : string;
    id? : string;
    label : string;
    value : IinputData;
    setValue : Function;
}

export interface IinputData{
    Fname : string;
    Lname : string
}

export interface IdataList{
    data : IinputData[]
}