import {CrossEventsQuery} from "./graphql/gen-types";


export function createTeamImg(id: string): string{
    return `https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/teams/${id}.png`
}

export function createPlayerImg(id: string): string{
    return `https://mygameplan-assets.s3.eu-west-3.amazonaws.com/images/players/${id}.png`
}

// Returns cross data of the topN players with the most crosses
export function aggregateAndFilterCrossEventsByPlayer(data: CrossEventsQuery, topN: number = 3) {
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
            if (cross.pass.result === "successful") crossesByPlayer[cross.player._id].earlyCrossSuccessQty += 1;
            else crossesByPlayer[cross.player._id].earlyCrossFailQty += 1;
        } else if (cross.coordinate_y > 70 && cross.coordinate_y < 90) {
            if (cross.pass.result === "successful") crossesByPlayer[cross.player._id].midCrossSuccessQty += 1;
            else crossesByPlayer[cross.player._id].midCrossFailQty += 1;
        } else {
            if (cross.pass.result === "successful") crossesByPlayer[cross.player._id].lateCrossSuccessQty += 1;
            else crossesByPlayer[cross.player._id].lateCrossFailQty += 1;
        }

    }


    return Object.values(crossesByPlayer).sort(function (a, b) {
        return a["crossQty"] - b["crossQty"];
    }).reverse().slice(0, topN)

}

export function groupCrossesByLocation(data: CrossEventsQuery) {
    const groups = {left: [], right: []};

    for (const cross of data.crossesByTeamAndFormation) {
        if (cross.coordinate_x <= 50) groups.left.push(cross)
        else groups.right.push(cross)
    }

    return groups
}