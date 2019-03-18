export class TimelineItem {
  id?: number;
  name?: string;
  startDate?;
  endDate?;
  duration?;
  center?: {
    longitude?;
    latitude
  };
  radius?;
  placeCenter?: {
    longitude?;
    latitude?
  };
  distance?;
  bearing?;
  streetAddress?;
  isVisit?;
}