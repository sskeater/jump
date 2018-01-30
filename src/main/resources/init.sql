
create table spider_season(
  id int(11) auto_increment primary key,
  name varchar(128) not null comment '赛季名称',
  premierId varchar(32) not null comment '',
  optaId varchar(32) comment 'optaId'
);

create table spider_team(
  id int(11) auto_increment primary key,
  name varchar(128) not null comment '名称',
  premierId varchar(32) not null comment '',
  optaId varchar(32) not null comment 'optaId'
);

create table spider_match(
  id int(11) auto_increment primary key,
  homeId int(11),
  homeScore int(11),
  awayId int(11),
  awayScore int(11),
  matchTime datetime,
  premierId varchar(32) not null comment '',
  optaId varchar(32) comment 'optaId'
);

create table spider_player(
  id int(11) auto_increment primary key,
  name varchar(64) not null,
  teamId int(11) not null,
  shirtNum int(2) not null,
  position int(2),
  premierId varchar(32) not null comment '',
  optaId varchar(32) not null comment 'optaId',
  rank int(1)
);

create table spider_player_data(
  id int(11) auto_increment primary key,
  matchId int(11),
  playerId int(11),
  goal int(11),
  assist int(11),
  fouls int(11),
  tackle int(11),
  yellowCard int(11),
  redCard int(11),
  penaltyMiss int(11),
  scored int(11),
  save int(11),
  penaltySave int(11),
  cleanSheet int(11),
  minPlayed int(11),
  salary int(11),
  sourceType int(11),
  premierId varchar(32) not null comment '',
  optaId varchar(32) comment 'optaId'
);

