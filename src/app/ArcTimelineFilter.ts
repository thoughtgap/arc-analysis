/* Timeline Filter Format & Object */
export type filterType = "activities" | "visits";
export type filterWeekdayStr = "Mo" | "Tu" | "We" | "Th" | "Fr" | "Sa" | "Su";

export interface filterObj {
    type?: filterType[]
    weekday?: filterWeekdayStr[],
    weekdayBool?: Boolean[],
    from?: Date,
    to?: Date,
    activityType?: String[] // TODO: Restrict to Arc Activity types?
    duration?: {
        from?: Number,
        to?: Number
    },
    place?: {
        class?: String,
        names?: String[],
        unassigned?: Boolean,
        from?: {
            names?: String[],
            class?: String
        },
        to?: {
            names?: String[],
            class?: String
        }
    }
}