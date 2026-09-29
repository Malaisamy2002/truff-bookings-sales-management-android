/** Minimal booking shape the court helpers read (avoids importing TurfBooking). */
export type CourtBooking = {
  id?: string;
  booking_date?: string;
  start_time: string | null;
  end_time?: string | null;
  hours?: number;
  courts?: number | null;
  status?: string | null;
};
