export class Star {
    public StarName: string;
    public NumberOfPlanets: number;
    public ElipticLongitude: number;
    public ElipticLatitude: number;

    constructor(starName: string, numberOfPlanets: number, elipticLongitude: number, elipticLatitude: number) {
        this.StarName = starName;
        this.NumberOfPlanets = numberOfPlanets;
        this.ElipticLongitude = elipticLongitude;
        this.ElipticLongitude = elipticLatitude;
    }
}