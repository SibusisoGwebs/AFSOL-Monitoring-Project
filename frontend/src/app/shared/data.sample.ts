import { Fleet } from "./fleet.model";
import { MaintainModel } from "./maintain.model";



export const sample_data: Fleet[] = [
    {
        fleetNumber: '5023',
        depot: 'AG',
        dateCheck: '3/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 5
    },
    {
        fleetNumber: '5121',
        depot: 'SG',
        dateCheck: '3/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 8
    },
    {
        fleetNumber: '5005',
        depot: 'AG',
        dateCheck: '3/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 4
    },
    {
        fleetNumber: '5166',
        depot: 'TG',
        dateCheck: '2/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 3
    },
    {
        fleetNumber: '4801',
        depot: 'AG',
        dateCheck: '5/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 1
    },
    {
        fleetNumber: '4801',
        depot: 'AG',
        dateCheck: '6/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 1
    },
    {
        fleetNumber: '5052',
        depot: 'PH',
        dateCheck: '6/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 2
    },
    {
        fleetNumber: '4855',
        depot: 'AG',
        dateCheck: '2/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 6
    },
    {
        fleetNumber: '5003',
        depot: 'AG',
        dateCheck: '7/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 5
    },
    {
        fleetNumber: '5148',
        depot: 'SG',
        dateCheck: '7/8/2022',
        image: 'assets/GABS_Bus.jpg',
        numberOfMaintaince: 10
    },
]; 

export const sample_monitor_data: MaintainModel[] = [
    {
        id: 59,
        name: 'GABS BUS',
        fleetFleetNumber: '5023',
        status: 'Maintainance',
        priority: 'High',
        description: 'SH2(SH reinstall-Offline>5days)',
        datecheck: '3/8/2022',
        depot: 'AG',
        comment: 'Must be done before friday' 
    }
];