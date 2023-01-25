export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  isWatched: boolean;
};

export type User = {
  id: string;
  fullName: string;
  projects: Project[];
};

export type Project = {
  id: string;
  title: string;
};
