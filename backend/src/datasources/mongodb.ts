import {Db, MongoClient} from "mongodb";
import {Event, Player, Team} from "../gen-types";

enum DBCollections {
    Events = "events",
    Matches = "matches",
    Players = "players",
    Teams = "teams"
}

export class mongoDbClient {

    dbName: string;
    db: Db;

    constructor() {
        this.dbName = "assignment";
    }

    async connect() {
        try {
            const connection = await MongoClient.connect(process.env.MONGODB_CONNECTION);
            this.db = connection.db(this.dbName);
        } catch (ex) {
            console.log("Error caught,", ex)
        }
    }

    async getTeams(): Promise<Team[]> {
        return (await this.db.collection<Team>(DBCollections.Teams).find({}).toArray())
    }

    async getTeam(id: number): Promise<Team> {
        return await this.db.collection<Team>(DBCollections.Teams).findOne({_id: {$eq: id}})
    }

    async getPlayer(id: number): Promise<Player> {
        return await this.db.collection<Player>(DBCollections.Players).findOne({_id: {$eq: id}});
    }

    async getPlayersByTeam(teamId: number): Promise<Player[]> {
        return (await this.db.collection<Player>(DBCollections.Players).find({'team._id': teamId}).toArray())
    }

    async getEventsByTeamAndFormation(teamId: number, formation: string): Promise<Event[]> {
        return (await this.db.collection<Event>(DBCollections.Events).find({
            'team._id': teamId, "team.formation": formation
        }).toArray())
    }

    async getCrossEventsByTeam(teamId: number): Promise<Event[]> {
        return (await this.db.collection<Event>(DBCollections.Events).find(
            {
                $and: [{"team._id": {$eq: teamId}}, {pass: {$exists: true}},
                    {"pass.subtypes": {$exists: true}}, {"pass.subtypes": {$in: ["cross"]}}]
            }).toArray())
    }


    async getCrossEventsByTeamAndFormation(teamId: number, formation: string): Promise<Event[]> {
        return (await this.db.collection<Event>(DBCollections.Events).find(
            {
                $and: [{"team._id": {$eq: teamId}}, {"team.formation": {$eq: formation}}, {pass: {$exists: true}},
                    {"pass.subtypes": {$exists: true}}, {"pass.subtypes": {$in: ["cross"]}}]
            }).toArray())
    }

}