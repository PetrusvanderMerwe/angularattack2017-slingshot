export class Star {
    public StarName: string;
    public NumberOfPlanets: number;
    public ElipticLongitude: number;
    public ElipticLatitude: number;
    public Brightness: number;

    constructor(starName: string, numberOfPlanets: number, elipticLongitude: number, elipticLatitude: number, brightness: number) {
        this.StarName = starName;
        this.NumberOfPlanets = numberOfPlanets;
        this.ElipticLongitude = elipticLongitude;
        this.ElipticLatitude = elipticLatitude;
        this.Brightness = brightness;
    }
}