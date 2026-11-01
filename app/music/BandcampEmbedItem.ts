import { IframeEmbedProps } from "./IframeEmbedProps";

export interface BandcampMetadata {
  title: string;
  artist: string;
  description: string;
  link: string;
}

export type BandcampEmbedItem = IframeEmbedProps<BandcampMetadata>;