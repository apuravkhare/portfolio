export interface IframeEmbedProps<T = Record<string, any>> {
  id: string | number;
  title: string;
  iframeSrc: string; 
  metadata: T;
}
