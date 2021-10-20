export interface Show {
    id: number;
    url: string;
    name: string;
    type: string;
    language: string;
    genres: string[];
    status: string;
    runtime: number;
    averageRuntime: number;
    premiered: Date;
    ended: Date;
    officialSite: string;
    schedule: Schedule;
    rating: Rating;
    weight: number;
    network: NetWork;
    externals: Externals;
    image: Image;
    summary: string;
    updated: Date;
    _links: Links;
}

interface Schedule {
    time: string;
    days: string[];
}

interface Rating {
    average: number;
}

interface Country {
    name: string;
    code: string;
    timezone: string;
}

interface NetWork {
    id: number;
    name: string;
    country: Country;
}

interface Externals {
    tvrage: number;
    thetvdb: number;
    imdb: string;
}

interface Image {
    medium: string;
    original: string;
}

interface Self {
    href: string;
}

interface PreviousEpisode {
    href: string;
}

interface Links {
    self: Self;
    previousEpisode: PreviousEpisode;
}
