// Track.ts
export interface ExternalUrls {
    spotify: string;
  }
  
  export interface Track {
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_urls: ExternalUrls;
    id: string;
    is_local: boolean;
    is_playable: boolean;
    name: string;
    preview_url: string;
    track_number: number;
    type: string;
    uri: string;
  }
  