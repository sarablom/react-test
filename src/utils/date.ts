export function getCurrentYear():number {
    let yearString = (new Date().toISOString().substring(0,4));
    return Number(yearString);
    //Går även att använda parseInt eller + för att konvertera till nummer
}