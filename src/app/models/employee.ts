export interface Employee {
    key?: string;
    firstName?: string;
    lastName?: string;
    title?: string;
    email?: string;
    phone?: string;
    addressLineOne?: string;
    addressLineTwo?: string;
    city?: string;
    state?: string;
    zipCode?: number;
    gender?: string;
    startDate?: string;
    notes: string;
    vacationAllotment: number;
    vacations: Vacation[];
}

export class Vacation {
    startDate: any;
    endDate: any;
    length: number;
}
