-- Setup all Jurisdictions
insert into pp.jurisdiction_type('STATE');
insert into pp.jurisdiction_type('DIVISION');
insert into pp.jurisdiction_type('DISTRICT');
insert into pp.jurisdiction_type('BLOCK');

insert into pp.jurisdiction values (1, 'Karnataka',     'STATE', NULL);
insert into pp.jurisdiction values (2, 'Maharashtra',   'STATE', NULL);
insert into pp.jurisdiction values (3, 'Tamilnadu',     'STATE', NULL);
insert into pp.jurisdiction values (4, 'Telangana',     'STATE', NULL);
insert into pp.jurisdiction values (5, 'Goa',           'STATE', NULL);
insert into pp.jurisdiction values (6, 'Kerala',        'STATE', NULL);
insert into pp.jurisdiction values (7, 'Andhra Pradesh','STATE', NULL);

insert into pp.jurisdiction(101, 'Belagavi',  'DIVISION', 1);
insert into pp.jurisdiction(102, 'Bengaluru', 'DIVISION', 1);
insert into pp.jurisdiction(103, 'Kalaburgi', 'DIVISION', 1);
insert into pp.jurisdiction(104, 'Mysuru',    'DIVISION', 1);

insert into pp.jurisdiction(10101, 'Belagavi',          'DISTRICT', 101);
insert into pp.jurisdiction(10102, 'Belagavi-Chikkodi', 'DISTRICT', 101);
insert into pp.jurisdiction(10103, 'Dharwad',           'DISTRICT', 101);
insert into pp.jurisdiction(10104, 'Uttara Kannada',    'DISTRICT', 101);
insert into pp.jurisdiction(10105, 'Uttara Kannada-Sirsi',             'DISTRICT', 101);

insert into pp.jurisdiction(1010101, 'Belagavi City',   'BLOCK', 10101);
insert into pp.jurisdiction(1010102, 'Belagavi Rural',  'BLOCK', 10101);
insert into pp.jurisdiction(1010103, 'Bailhongal',      'BLOCK', 10101);


-- Setup User Related Master Tables
insert into pp.user_role values (1, 'SUPER_ADMIN', 'Y');
insert into pp.user_role values (2, 'PP_ADMIN', 'Y');
insert into pp.user_role values (3, 'TEACHER', 'Y');
insert into pp.user_role values (4, 'BATCH_COORDINATOR', 'Y');
insert into pp.user_role values (5, 'STUDENT', 'Y');

-- Setup all designations
insert into pp.edudesig(1, 'Commissioner');
insert into pp.edudesig(2, 'Joint Director');
insert into pp.edudesig(3, 'DDPI(Admin)');
insert into pp.edudesig(4, 'DDPI(DIET)');
insert into pp.edudesig(5, 'DIET Faculty');
insert into pp.edudesig(6, 'BEO');
insert into pp.edudesig(7, 'ECO');
insert into pp.edudesig(8, 'OTHER');

