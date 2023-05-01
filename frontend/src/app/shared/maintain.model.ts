export class MaintainModel{
    id!: number;
    name!: string;
    status!: string;
    priority!: string;
    description!: string;
    datecheck!: string;
    depot!: string;
    comment!: string;
    fleetFleetNumber!: string;
}

export class MaintainanceModel{
    id!: number;
    name!: string;
    status!: string;
    priority!: string;
    description!: string;
    datecheck!: string;
    comment!: string;
    fleetFleetNumber!: string;
}

export class HistMaintainance{
    id!: number;
    name!: string;
    status!: string;
    priority!: string;
    description!: string;
    datecheck!: string;
    comment!: string;
    technicianTicket!: string;
    technician!: any
}