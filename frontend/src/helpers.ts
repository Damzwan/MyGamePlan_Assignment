import {CrossEventsQuery} from "./graphql/gen-types";


export function createTeamImg(id: string): string {
    return `https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/teams/${id}.png`
}

export function createPlayerImg(id: string): string {
    return `https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/players/${id}.png`
}

// Returns cross data of the topN players with the most crosses
export function aggregateCrossEvents(data: CrossEventsQuery, topN: number = 3) {
    const crossesByType = {early: {fail: 0, success: 0}, mid: {fail: 0, success: 0}, late: {fail: 0, success: 0}};
    const crossesByPlayer = {}

    for (const cross of data.crossesByTeamAndFormation) {
        if (crossesByPlayer[cross.player._id] == null) crossesByPlayer[cross.player._id] = {
            earlyCrossSuccessQty: 0,
            earlyCrossFailQty: 0,
            midCrossSuccessQty: 0,
            midCrossFailQty: 0,
            lateCrossSuccessQty: 0,
            lateCrossFailQty: 0,
            crossQty: 0,
            player_id: cross.player._id.toString()
        }

        crossesByPlayer[cross.player._id].crossQty += 1;

        if (cross.coordinate_y <= 70) {
            if (cross.pass.result === "successful") {
                crossesByPlayer[cross.player._id].earlyCrossSuccessQty += 1;
                crossesByType.early.success += 1;
            } else {
                crossesByPlayer[cross.player._id].earlyCrossFailQty += 1;
                crossesByType.early.fail += 1;
            }
        } else if (cross.coordinate_y > 70 && cross.coordinate_y < 90) {
            if (cross.pass.result === "successful") {
                crossesByPlayer[cross.player._id].midCrossSuccessQty += 1;
                crossesByType.mid.success += 1;
            } else {
                crossesByPlayer[cross.player._id].midCrossFailQty += 1;
                crossesByType.mid.fail += 1;
            }
        } else {
            if (cross.pass.result === "successful") {
                crossesByPlayer[cross.player._id].lateCrossSuccessQty += 1;
                crossesByType.late.success += 1;
            } else {
                crossesByPlayer[cross.player._id].lateCrossFailQty += 1;
                crossesByType.late.fail += 1;
            }
        }

    }

    return {
        crossesByType: crossesByType, topNPlayers: Object.values(crossesByPlayer).sort(function (a, b) {
            return a["crossQty"] - b["crossQty"];
        }).reverse().slice(0, topN) as any[]
    }

}

export function groupCrossesByLocation(data: CrossEventsQuery) {
    const groups = {left: [], right: [], all: []};

    for (const cross of data.crossesByTeamAndFormation) {
        groups.all.push(cross) // TODO this is unnecessary since left and right contain all the information but I'm lazy :)
        if (cross.coordinate_x <= 50) groups.left.push(cross)
        else groups.right.push(cross)
    }

    return groups
}