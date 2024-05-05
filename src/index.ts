type FilterType = {
  filter: string | number;
  filterTo?: string | number;
};

type FilterByValuesType = {
  values: string | number[];
};

interface IFilm {
  name: string;
  year: number;
  rating: number;
  awards: string[];
}

class FilmList {
  filmList: IFilm[] = [];
  applySearchValue!: [FilterType, (filter: string | number, filterTo?: string | number) => IFilm[]];
  applyFiltersValue!: [FilterByValuesType, (values: string | number[]) => IFilm[]];

  searchByName(name: string): IFilm[] {
    return this.filmList;
  }

  searchByYear(year: number): IFilm[] {
    return this.filmList;
  }

  searchByRating(rating: number): IFilm[] {
    return this.filmList;
  }

  searchByAwards(awards: string[]): IFilm[] {
    return this.filmList;
  }
}

interface IFilmCategoryList {
  name: string;
  filmList: IFilm[];
}

class FilmCategoryList {
  filmCategoryList: IFilmCategoryList[] = [];
  applySearchValue!: [FilterType, (filter: string | number, filterTo?: string | number) => IFilmCategoryList[]];
  applyFiltersValue!: [FilterByValuesType, (values: string | number[]) => IFilmCategoryList[]];

  searchByName(name: string): IFilmCategoryList[] {
    return this.filmCategoryList;
  }
}
