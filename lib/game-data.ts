
export type Atmosphere = 'default' | 'cyberpunk' | 'apocalyptic';

export interface Hotspot {
    id: string;
    x: number; // Percentage 0-100
    y: number; // Percentage 0-100
    width: number; // Percentage 0-100
    height: number; // Percentage 0-100
    label: string;
    action: 'transition' | 'jukebox' | 'none';
    targetSceneId?: string;
    transitionVideo?: string; // Path to transition video
}

export interface Scene {
    id: string;
    name: string;
    videoLoop: Record<Atmosphere, string>; // Map atmosphere to video path
    hotspots: Hotspot[];
}

export interface Track {
    id: string;
    title: string;
    artist: string;
    genre: string;
    url: string; // Path to audio file
    atmosphere: Atmosphere[]; // Atmospheres this track belongs to
}

export const ATMOSPHERES: Atmosphere[] = ['default', 'cyberpunk', 'apocalyptic'];

export const INITIAL_SCENE_ID = 'exterior_street';

export const GAME_DATA: Record<string, Scene> = {
    exterior_street: {
        id: 'exterior_street',
        name: 'Street Exterior',
        videoLoop: {
            default: '/assets/videos/street_default_loop.mp4',
            cyberpunk: '/assets/videos/street_cyberpunk_loop.mp4',
            apocalyptic: '/assets/videos/street_apocalyptic_loop.mp4',
        },
        hotspots: [
            {
                id: 'enter_shop',
                x: 45,
                y: 40,
                width: 10,
                height: 20,
                label: 'Enter Shop',
                action: 'transition',
                targetSceneId: 'shop_interior',
                transitionVideo: '/assets/videos/street_to_shop.mp4',
            },
        ],
    },
    shop_interior: {
        id: 'shop_interior',
        name: 'Record Shop',
        videoLoop: {
            default: '/assets/videos/shop_default_loop.mp4',
            cyberpunk: '/assets/videos/shop_cyberpunk_loop.mp4',
            apocalyptic: '/assets/videos/shop_apocalyptic_loop.mp4',
        },
        hotspots: [
            {
                id: 'exit_shop',
                x: 10,
                y: 80,
                width: 15,
                height: 10,
                label: 'Exit to Street',
                action: 'transition',
                targetSceneId: 'exterior_street',
                transitionVideo: '/assets/videos/shop_to_street.mp4',
            },
            {
                id: 'jukebox',
                x: 70,
                y: 30,
                width: 15,
                height: 30,
                label: 'Jukebox',
                action: 'jukebox',
            },
        ],
    },
};

export const MUSIC_TRACKS: Track[] = [
    {
        id: '1',
        title: 'Neon Dreams',
        artist: 'Manzar',
        genre: 'Synthwave',
        url: '/assets/audio/neon_dreams.mp3',
        atmosphere: ['default', 'cyberpunk'],
    },
    {
        id: '2',
        title: 'Wasteland Echoes',
        artist: 'Manzar',
        genre: 'Ambient',
        url: '/assets/audio/wasteland.mp3',
        atmosphere: ['apocalyptic'],
    },
    {
        id: '3',
        title: 'Cyber Pulse',
        artist: 'Manzar',
        genre: 'Techno',
        url: '/assets/audio/cyber_pulse.mp3',
        atmosphere: ['cyberpunk'],
    },
];
