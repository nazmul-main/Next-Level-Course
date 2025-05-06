{
    // Conditional Type 
    type a1 = string;
    type b1 = number;

    type x = a1 extends null ? true : false; //conditional
    type y = a1 extends null ? true : b1 extends undefined ? undefined : any; //conditional

    type Sheikh = {
        bike: string;
        board: string;
        car: string;
    }

    //car ase kina/ bike ase kina/ ship ase kina/ tracor ase ki na
    type ChekheckVehicle<T> = T extends keyof Sheikh ? true : false;
    type HasBike = ChekheckVehicle<'board'>
}