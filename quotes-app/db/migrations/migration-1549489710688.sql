-- db/migrations/migration.sql

CREATE TABLE IF NOT EXISTS student (
  sid      serial primary key not null check (sid > 999 and sid < 10000),
  email    varchar(40),
  password varchar(20),
  fname    varchar(20),
  lname    varchar(20),
  address1 varchar(40),
  address2 varchar(40),
  city     varchar(40),
  state    varchar(40),
  zip      int,
  sType    varchar(5) check (sType in ('MS','PhD','UGRAD')),
  majorDept    char(4) check (majorDept in ('CSC','MATH','POLS','HIST')),
  gradAssistant char(1) check (gradAssistant in ('Y','N'))
);

ALTER sequence student_sid_seq RESTART WITH 1000;