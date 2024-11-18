interface Noticia {
    image: string;
    title: string;
    content: string;
  }
  
export interface NoticiasResponse {
    noticias: Noticia[];
  }