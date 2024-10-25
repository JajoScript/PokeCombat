import type { OtherDreamWorldSprite } from './OtherDreamWorldSprite';
import type { OtherHomeSprite } from './OtherHomeSprite';
import type { OtherOfficialArtworkSprite } from './OtherOfficialArtworkSprite';
import type { OtherShowdownSprite } from './OtherShowdownSprite'

interface OtherSprites {
  dream_world: OtherDreamWorldSprite;
  home: OtherHomeSprite;
  official_artwork: OtherOfficialArtworkSprite;
  showdown: OtherShowdownSprite;
}

export type {
  OtherSprites
}