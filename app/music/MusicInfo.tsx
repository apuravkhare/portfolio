import { BandcampEmbedItem } from './BandcampEmbedItem';
import { constructString } from '../util';

export default function allSongs(): BandcampEmbedItem[] {
  return [
    {
      id: 1,
      title: "Bruise",
      iframeSrc: "https://bandcamp.com/EmbeddedPlayer/track=282621262/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
      metadata: {
        title: "Bruise",
        artist: "Dusty Chords",
        description: constructString(
          "My first release under the name Dusty Chords.",
          "The title takes inspiration from the song Hand Covers Bruise by Trent Reznor, with a similar synth opening the song.",
          "I had a bit of a rough phase in mid-2026, and this song was a way to block the noise out.",
          "I'd describe the sound as a mix of industrial and post-rock."
        ),
        link: "https://dustychords.bandcamp.com/track/bruise"
      }
    },

    {
      id: 2,
      title: "Bruise",
      iframeSrc: "https://bandcamp.com/EmbeddedPlayer/track=282621262/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
      metadata: {
        title: "Bruise",
        artist: "Dusty Chords",
        description: constructString(
          "My first release under the name Dusty Chords.",
          "The title takes inspiration from the song Hand Covers Bruise by Trent Reznor, with a similar synth opening the song.",
          "I had a bit of a rough phase in mid-2026, and this song was a way to block the noise out.",
          "I'd describe the sound as a mix of industrial and post-rock."
        ),
        link: "https://dustychords.bandcamp.com/track/bruise"
      }
    },

    {
      id: 3,
      title: "Bruise",
      iframeSrc: "https://bandcamp.com/EmbeddedPlayer/track=282621262/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/",
      metadata: {
        title: "Bruise",
        artist: "Dusty Chords",
        description: constructString(
          "My first release under the name Dusty Chords.",
          "The title takes inspiration from the song Hand Covers Bruise by Trent Reznor, with a similar synth opening the song.",
          "I had a bit of a rough phase in mid-2026, and this song was a way to block the noise out.",
          "I'd describe the sound as a mix of industrial and post-rock."
        ),
        link: "https://dustychords.bandcamp.com/track/bruise"
      }
    }
  ]
}
