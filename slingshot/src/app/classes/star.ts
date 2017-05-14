export class Star {
    public StarName: string;
    public NumberOfPlanets: number;
    public ElipticLongitude: number;
    public ElipticLatitude: number;
    public Brightness: number;
    public DistanceParsecs: number;

    constructor(starName: string, numberOfPlanets: number, elipticLongitude: number, elipticLatitude: number, brightness: number, distanceParsecs) {
        this.StarName = starName;
        this.NumberOfPlanets = numberOfPlanets;
        this.ElipticLongitude = elipticLongitude;
        this.ElipticLatitude = elipticLatitude;
        this.Brightness = brightness;
        this.DistanceParsecs = distanceParsecs;
    }
}