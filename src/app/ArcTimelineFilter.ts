import { HttpParams } from '@angular/common/http';

/* Timeline Filter Format & Object */
export type filterType = "activities" | "visits";
export type filterWeekdayStr = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export interface filterObj {
    type?: filterType[]
    weekday?: filterWeekdayStr[],
    weekdayBool?: boolean[],
    from?: Date,
    to?: Date,
    activityType?: string[] // TODO: Restrict to Arc Activity types?
    duration?: {
        from?: number,
        to?: number
    },
    place?: {
        class?: string,
        names?: string[],
        unassigned?: Boolean,
        from?: {
            names?: string[],
            class?: string
        },
        to?: {
            names?: string[],
            class?: string
        }
    }
}

export function filterObjToHttpParams(filterObj: filterObj) {    
    // Create an object with only string or string[] as values
    let stringsOnly = {};

    // First assign everything
    stringsOnly = filterObj;

    // This is weird, because it's enough to prevent the parsing filterObj to HttpParams error
    return stringsOnly;

    // // Convert the non-string values to string
    // if(stringsOnly["weekdayBool"] !== undefined) {
    //     stringsOnly["weekdayBool"] = String(stringsOnly["weekdayBool"]);
    // }

    // if(stringsOnly["from"] !== undefined) {
    //     stringsOnly["from"] = String(stringsOnly["from"]);
    // }
}