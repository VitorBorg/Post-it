create schema postIt;

create table postIt.post (
  idPost serial primary key,
  titlePost text not null,
  textPost text not null,
  datePost timestamp default now()
)