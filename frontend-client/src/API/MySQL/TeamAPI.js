const apiUrl = "http://localhost:5555";

export async function getTeamData(seasonYear, teamID) {    
    // Send a POST request to the 'query'
    // endpoint with the provided SQL query
    const teamScheduleResponse = await fetch(`${apiUrl}/api/team/teamSchedule`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ seasonYear: seasonYear, teamID: teamID }),
    });
    // Check if the response status is ok
    if (!teamScheduleResponse.ok) {
        throw new Error(`HTTP error! Status: ${teamScheduleResponse.status}`);
    }
    const teamSchedule = await teamScheduleResponse.json();



    const teamRosterResponse = await fetch(`${apiUrl}/api/team/teamRoster`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ seasonYear: seasonYear, teamID: teamID }),
    });
    // Check if the response status is ok
    if (!teamRosterResponse.ok) {
        throw new Error(`HTTP error! Status: ${teamRosterResponse.status}`);
    }
    const teamRoster = await teamRosterResponse.json();



    const teamStatsResponse = await fetch(`${apiUrl}/api/team/teamStats`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ seasonYear: seasonYear, teamID: teamID }),
    });
    // Check if the response status is ok
    if (!teamStatsResponse.ok) {
        throw new Error(`HTTP error! Status: ${teamStatsResponse.status}`);
    }
    const teamStats = await teamStatsResponse.json();


    const teamDetailsResponse = await fetch(`${apiUrl}/api/teams/teamDetails`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ seasonYear: seasonYear, teamID: teamID }),
    });
    console.log("request sent to TeamServer successfully, with " + seasonYear + " and " + teamID);

    // Check if the response status is ok
    if (!teamDetailsResponse.ok) {
        throw new Error(`HTTP error! Status: ${teamDetailsResponse.status}`);
    }
    const teamDetails = await teamDetailsResponse.json();

    
    return {
        teamSchedule: teamSchedule,
        teamRoster: teamRoster,
        teamStats: teamStats,
        teamDetails: teamDetails
    };
};


