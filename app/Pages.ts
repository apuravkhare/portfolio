import PageType from "./PageType"

export default function allPages(): PageType[] {
  return [
    {
      id: 'home',
      display: 'Home'
    },
    {
      id: 'code',
      display: 'Code'
    },
    {
      id: 'art',
      display: 'Art'
    },
    {
      id: 'music',
      display: 'Music'
    },
    {
      id: 'contact',
      display: 'Contact'
    }]
}
