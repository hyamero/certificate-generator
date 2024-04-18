"use client";

import { db } from "@/config/firebase";
import { doc } from "firebase/firestore";
import { usePathname, useSearchParams } from "next/navigation";
import { useDocumentOnce } from "react-firebase-hooks/firestore";

import { Card, CardContent } from "@/components/ui/card";
import Loading from "../[name]/cert/loading";
import Tilt from "react-parallax-tilt";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Event = {
  id: string;
  title: string;
  fullTitle: string;
  organizer: string;
  date: string;
};

type Attendee = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export function Certificate() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const certId = searchParams.get("id");

  const [attendeeValue, attendeeLoading] = useDocumentOnce(
    doc(db, `${pathname.split("/")[2]}/data/certificates/${certId}`)
  );

  const attendee = {
    ...attendeeValue?.data(),
    id: attendeeValue?.id,
  } as Attendee;

  const [eventValue, eventLoading] = useDocumentOnce(
    doc(db, `${pathname.split("/")[2]}/data`)
  );

  const event = { ...eventValue?.data(), id: eventValue?.id } as Event;

  if (attendeeLoading || eventLoading) return <Loading />;

  if (!attendee.email)
    return (
      <div className="text-center pt-40">
        <h3 className="capitalize font-bold text-6xl">Certificate not found</h3>
      </div>
    );

  return (
    <div className="h-screen grid place-items-center container">
      <Tilt>
        <Card className="relative max-w-screen-sm overflow-x-hidden border-none text-background bg-foreground">
          <div className="h-16 w-16 bg-background absolute -left-10 top-1/2 -translate-y-1/2 rounded-full" />
          <div className="h-16 w-16 bg-background absolute -right-10 top-1/2 -translate-y-1/2 rounded-full" />
          <CardContent className="px-16 py-0 flex">
            <div className="py-10 gap-12 flex flex-col">
              <h3 className="text-4xl font-bold tracking-tighter">
                {attendee.firstName} {attendee.lastName}
              </h3>
              <div>
                <p>
                  Has successfully participated in{" "}
                  <span className="font-medium">{event.fullTitle}</span> by{" "}
                  {event.organizer} held on {event.date}.
                </p>
                <p className="text-xs mt-7 text-muted-foreground">
                  Powered by <span className="font-medium">OMSIMOS</span>
                </p>
              </div>
            </div>
            <div className="border-dotted border-l-2 pl-10 ml-10 flex justify-center text-xl">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <p className="[writingMode:vertical-rl] cursor-pointer rotate-270 transform text-center">
                      {attendee.id}
                    </p>
                  </TooltipTrigger>
                  <TooltipContent className="relative top-16">
                    <p>🔗 Copy URL to clipboard</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </CardContent>
        </Card>
      </Tilt>
    </div>
  );
}
