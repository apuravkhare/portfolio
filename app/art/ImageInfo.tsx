import type ArtImage from './Image';
import image_1 from '../../public/DSCF2161.webp'
import image_2 from '../../public/DSCF2162.webp'
import image_3 from '../../public/DSCF2164.webp'
import image_4 from '../../public/DSCF2165.webp'
import image_5 from '../../public/DSCF2166.webp'
import image_6 from '../../public/DSCF2167.webp'
import { constructString } from '../util';



export default function allImages(): ArtImage[] {
  return [
    {
      src: image_1.src,
      title: "Chester Bennington",
      subtitle: constructString(
        "One of my favorite singers of all time. I discovered Linkin Park around the Minutes to Midnight cycle, and have kept up with them ever since.",
        "I have always admired the emotion his voice would convey, and the energy is something I try to portray in my art.")
    },
    {
      src: image_2.src,
      title: "Trent Reznor",
      subtitle: constructString(
        "Nine Inch Nails is my favorite band of all time.",
        "I've always been amazed by how many genres the band has covered, and they still don't seem to be slowing down.",
        "The music I make myself is heavily influenced by Nine Inch Nails, and I love sketching NIN live shows with all their moody lighting.")
    },
    {
      src: image_3.src,
      title: "Spencer Sotelo",
      subtitle: constructString(
        "Spencer Sotelo is the vocalist for the metal band Periphery.",
        "They're a band that I've been lucky enough to follow from start, and their progression has been nothing but inspiring.",
        "Spencer's has the extremely difficult job of writing vocals for very complex music, and he never misses.")
    },
    {
      src: image_4.src,
      title: "Misha Mansoor",
      subtitle: constructString(
        "Misha Mansoor is the guitarist and founder of the metal band Periphery.",
        "It'd be an understatement to say that I'd have quit guitar if it weren't for watching his recording tutorials back in around 2010 - 2012",
        "They made me discover my love for music production, and as a result, helped me get better at the instrument.")
    },
    {
      src: image_5.src,
      title: "Emily Armstrong",
      subtitle: constructString(
        "Emily Armstrong helped bring my beloved band, Linkin Park, back in 2024.",
        "I was lucky enough to see the surprise show on September 5, 2024, and went through every emotion possible during.",
        "I love how she has brought her own personality into the band, and I'm excited to see where they go from here.")
    },
    {
      src: image_6.src,
      title: "Matt Bellamy",
      subtitle: constructString(
        "Matt Bellamy is the vocalist and guitarist for the rock band Muse.",
        "Another one of those artists, that helped me keep practicing guitar, specifically the Stockholm Syndrome performance from Wembley.",
        "I have been lucky enough to see them live a couple times, they're as good, if not better, live.")
    }
  ];
}