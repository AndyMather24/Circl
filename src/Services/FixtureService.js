export async function getFixturesOverview() {
    const response = await fetch('http://localhost:8082/fixturesOverview');  
    const jsonResponse = await response.json();
 
    return jsonResponse;

}


export async function getUpcomingFixtures() {
    const response = await fetch('http://localhost:8082/upcomingFixtures');  
    const jsonResponse = await response.json();
 
    return jsonResponse;
}
