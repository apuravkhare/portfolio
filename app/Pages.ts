import Page from "./Page"

export default function allPages(): Page[] {
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
