interface Noticia {
  image: string;
  title: string;
  content: string;
  state: string;
}

export interface NoticiasResponse {
  noticias: Noticia[];
}

export interface CreateNoticiaBody {
  userId: string;
  title: string;
  content: string;
  state: string;
  city: string;
  image: string;
}
