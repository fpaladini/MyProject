using my.bookshop as my from '../db/data-model';

service CatalogService {
    entity Categories as projection on my.Categories;
    entity Courses as projection on my.Courses;
}
