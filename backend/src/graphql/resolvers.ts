import {mongoDbClient} from "../datasources/mongodb";


const db = await new mongoDbClient();
await db.connect();

export const resolvers = {
    Query: {
        teams: async () => await db.getTeams(),
        team: async (_: any, args) => args.id != null ? await db.getTeam(args.id) : null,
        player: async (_: any, args) => args.id != null ? await db.getPlayer(args.id) : null,
        playersByTeam: async (_: any, args) => args.teamId != null ? await db.getPlayersByTeam(args.teamId) : null,
        eventsByTeamAndFormation: async (_: any, args) => args.teamId != null ?
            await db.getEventsByTeamAndFormation(args.teamId, args.formation) : null,
        crossesByTeamAndFormation: async (_: any, args) => {
            if (args.teamId == null) return null
            return args.formation == '' ? await db.getCrossEventsByTeam(args.teamId) :
                await db.getCrossEventsByTeamAndFormation(args.teamId, args.formation);
        }
    },
};