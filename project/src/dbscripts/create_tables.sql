create sequence pp.user_id_seq  start 1;

create table pp.user
(   user_id      numeric(8,0)    primary key,
    user_name    varchar(100)    not null,
    enc_passwd   varchar(300),
    locked_yn    char(1)
);

create table pp.role
(
    role_id     numeric(4,0) primary key,
    role_name   varchar(100) not null,
    active_yn   char(1)
);


create table pp.user_role
(
    user_id numeric(8,0) references pp.user(user_id),
    role_id numeric(4,0) references pp.role(role_id)
);

create table pp.jurisdiction_type
(
    juris_type  varchar(100) primary key
);

create table pp.jurisdiction
(
    juris_code      numeric(12,0) primary key,
    juris_name      varchar(200),
    juris_type      varchar(100),
    parent_juris    numeric(12,0) references pp.jurisdiction(juris_code)
);

create table pp.eduofficer
(
    officer_id    numeric(12,0) primary key,
    officer_name  varchar(100),
    phone1        varchar(15),
    phone2        varchar(15),
    email         varchar(100)
);

create table pp.edudesig
(
    desig_id    numeric(3,0) primary key,
    desig_name  varchar(100)
);

create table pp.officer_desig
(
    officer_id  numeric(12,0) references pp.eduofficer(officer_id),
    juris_code  numeric(12,0) references pp.jurisdiction(juris_code),
    desig_id    numeric(3,0)  references pp.edudesig(desig_id),
    other_desig varchar(100)  -- Name of unclassified designation 
);

create table pp.school_management_type
(
    school_mgmt_type
    ....

)
create table pp.school
(
    school_id           numeric(12,0)   primary key,
    school_udise        numeric(13,0)   unique,
    school_name         varchar(200),
    school_mgmt_type 
    juris_code
);


create table pp.student
(
    student_id          numeric(14,0) primary key,
    nmms_reg_number     varchar(20),
    aadhaar             varchar(12),
    student_name        varchar(200),
    father_name         varchar(200),
    nmms_year           numeric(4,0), -- Start of NMMS academic year
    gmat_score          numeric(2,0),
    sat_score           numeric(2,0),
    
);

create table pp.pp_exam_center
(
    
)
create table pp.shortlisted
(
    student_id          numeric(14,0)   references pp.student(student_id),
    pp_hall_ticket_no   varchar(20),
    pp_appeared_yn      char(1),    -- Appeared for PP Test (Y/N)
    pp_exam_center_id   numeric(8,0),
    
);

