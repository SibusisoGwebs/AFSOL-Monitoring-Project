import { environment } from "src/environments/environment";

const BASE_URL = environment.production? ""+"/bureau/" : "http://localhost:5000/bureau/";

export const POST_FLEET = BASE_URL + 'fleet/post';
export const FETCH_ALL_FLEET = BASE_URL + 'fleet/fetchall';
export const FETCH_ONE_FLEET = BASE_URL + 'fleet/fetchone';
export const DELETE_ONE_FLEET = BASE_URL + 'maintainance/delete';

export const POST_FLEET_TICKET = BASE_URL + 'ticket/post';
export const FETCH_MAINTAINANCE_COUNT = BASE_URL + 'maintainance/count';

export const FETCH_ALL_HIST_MAINTAINANCE = BASE_URL + 'maintainanceHistory/fetchallFleet';
export const FETCH_ONE_HIST_MAINTAINANCE = BASE_URL + 'maintainanceHistory/fetchoneFleet';

export const FETCH_ALL_MAINTAINANCE_FLEET = BASE_URL + 'maintainance/fetchall';
export const FETCH_MAINTAINANCE_LIST = BASE_URL + 'maintainance/fetchallFleet';
export const FETCH_ONE_MAINTAINANCE_FLEET = BASE_URL + 'maintainance/fetchoneFleet';
export const FETCH_ALL_SCHEDULE_FLEET = BASE_URL + 'maintainance/fetchAll-scheduledFleet';
export const FETCH_ONE_SCHEDULE_FLEET = BASE_URL + 'maintainance/fetchone-scheduledFleet';
export const FETCH_ONE_MAINTAINANCE = BASE_URL + 'maintainance/fetchone';
export const POST_MAINTAINANCE_FLEET = BASE_URL + 'monitoring/post';
export const DELETE_MAINTAINANCE_FLEET = BASE_URL + 'maintainance/delete';

export const FETCH_ALL_MONITORING_FLEETS = BASE_URL + 'monitoring/fetchall';
export const FETCH_ONE_MONITORING_FLEET = BASE_URL + 'monitoring/fetchone';

export const POST_SCHEDULED_FLEET = BASE_URL + 'schedule/post';
export const DELETE_SCHEDULED_FLEET = BASE_URL + 'schedule/delete';
export const FETCH_ALL_SCHEDULED_FLEETS = BASE_URL + 'schedule/fetchallSchedules';

export const POST_MAINTAINANCE_HISTORY = BASE_URL + 'maintainanceHistory/post';
export const FETCH_ALL_HIST_MAINTAINANCE2 = BASE_URL + 'maintainanceHistory/fetchallFleet';
export const FETCH_ONE_HIST_MAINTAINANCE2 = BASE_URL + 'maintainanceHistory/fetchoneFleet';

export const POST_TECHNICIAN = BASE_URL + 'technician-data/post';

export const LOGIN_URL = BASE_URL + 'login-page';
export const POST_USER_DETAILS = BASE_URL + 'user/post';
export const HIST_MAINTAINANCE_FLEET_TECH = BASE_URL + 'maintainanceHistory/fetchallFleet';


export const ADD_VIDEO_FOOTAGE = BASE_URL + 'video-footage/post';
export const FETCH_ALL_VIDEO_FOOTAGE = BASE_URL + 'video-footage/fetchall';
export const GENERATE_VIDEOFOOTAGE_TICKET = BASE_URL + 'videofootage/ticket';
export const POST_VIDEOFOOTAGE_TICKET = BASE_URL + 'videoTicket/post';
export const DELETE_VIDEOFOOTAGE_TICKET = BASE_URL + 'video-footage/delete/';   // /video-footage/delete/:ticket => /video-footage/fetchone/param
export const FETCH_ONE_VIDEO_FOOTAGE = BASE_URL + 'video-footage/fetchone/';
export const DELETE_ONE_VIDEOFOOTAGE = BASE_URL + 'video-footage/delete/';
export const DELETE_VIDEOFOOTAGE = BASE_URL + 'video-footage/delete';

export const ADD_TECH_ON_VIDEOFOOTAGE = BASE_URL + 'technician-Video-data/post';
export const ADD_VIDEOFOOTAGE_TO_HISTORY = BASE_URL + 'VideofootageHistory/post';
