interface Noticia {
  image: string;
  title: string;
  content: string;
  state: string;
}

export interface NoticiasResponse {
  noticias: Noticia[];
}
