import { createTRPCRouter } from "@/server/api/trpc";
import { eventsRouter } from "./routers/events";
import { teamsRouter } from "./routers/teams";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  events: eventsRouter,
  teams: teamsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
