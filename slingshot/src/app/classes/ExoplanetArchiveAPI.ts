export class ExoplanetArchiveAPI {
    private static readonly API_BASE_URL = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?';

    private static readonly ARGUMENT_TABLE = 'table';
    private static readonly ARGUMENT_SELECT = 'select';
    private static readonly ARGUMENT_FORMAT = 'format';
    private static readonly VALUE_PIPED = 'pipe';
    private static readonly PREDICATE_DISTINCT = 'distinct';

    private static readonly TABLE_CONFIRMED_PLANETS = 'exoplanets';

    private static readonly FIELD_STAR_NAME = 'pl_hostname';
    private static readonly FIELD_NUMBER_OF_PLANETS = 'pl_pnum';
    private static readonly FIELD_ELIPTIC_LONGITUDE = 'st_elon';
    private static readonly FIELD_ELIPTIC_LATITUDE = 'st_elat';
    private static readonly FIELD_BRIGHTNESS = 'st_wise1';
    
    public static BuildStarDataURL():string {
        return this.BuildApiURL(this.TABLE_CONFIRMED_PLANETS, 
                                [this.FIELD_STAR_NAME, 
                                 this.FIELD_NUMBER_OF_PLANETS, 
                                 this.FIELD_ELIPTIC_LONGITUDE, 
                                 this.FIELD_ELIPTIC_LATITUDE,
                                 this.FIELD_BRIGHTNESS], 
                                true);
    }

    private static BuildApiURL(table:string, fields:string[], distinct: boolean):string {

        // api base url
        let url:string = this.API_BASE_URL;

        // table
        url += this.ARGUMENT_TABLE + '=' + table;

        // select
        if (fields.length > 0) { 
            url += '&' + this.ARGUMENT_SELECT + ((distinct) ? '=' + this.PREDICATE_DISTINCT + ' ': ''); 
            fields.forEach((field, index) => {
                if (index > 0) { url += ','; };
                url += field;
            });
        }

        // format
        url += '&' + this.ARGUMENT_FORMAT + '=' + this.VALUE_PIPED;

        return url;
    }
}