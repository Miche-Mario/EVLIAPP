----------------------------------------------------COURSES
CREATE TABLE courses(
    courseid INT PRIMARY KEY AUTO_INCREMENT,
    coursename VARCHAR(250),
    courseprice INTEGER,
    hastype BOOLEAN
);
CREATE TABLE coursetype(
    coursetypeid INT PRIMARY KEY AUTO_INCREMENT,
    type1 VARCHAR(250),
    type2 VARCHAR(250),
    type3 VARCHAR(250),
    type4 VARCHAR(250),
    type5 VARCHAR(250),
    courseid INT,
    FOREIGN KEY (courseid) REFERENCES courses(courseid)
)
--------------------------------------------------------------------------------ACCOMODATIONS

create table accomodations(
    accomodationid INT PRIMARY KEY AUTO_INCREMENT,
    accomodationname VARCHAR(250),
    accomodationprice INTEGER,
    hastype BOOLEAN
);
CREATE TABLE coursetype(
    accomodationtypeid INT PRIMARY KEY AUTO_INCREMENT,
    type1 VARCHAR(250),
    type2 VARCHAR(250),
    type3 VARCHAR(250),
    type4 VARCHAR(250),
    type5 VARCHAR(250),
    accomodationid INT,
    FOREIGN KEY (accomodationid) REFERENCES accomodations(accomodationid)
)
--------------------------------------------------------------------------------EXAMS

CREATE TABLE exams(
    examid INT PRIMARY AUTO_INCREMENT,
    examname VARCHAR(250),
    examprice INTEGER
);

--------------------------------------------------------------------------------PURCHASES

CREATE TABLE purchases(
    purchaseid int primary key AUTO_INCREMENT,
    purchasename varchar(250),
    purchaseprice integer,
    purchasedescription
);

------------------------------------------------------------------------------------------------STUDENTS

CREATE TABLE student_seq
(
  studentid INT NOT NULL AUTO_INCREMENT PRIMARY KEY
);

-------------------------------------------------------------------------------------------------
CREATE TABLE students
(
  studentid VARCHAR(7) NOT NULL PRIMARY KEY DEFAULT '0', 
  surnameg VARCHAR(250),
  forenamesg VARCHAR(250),
  genderg VARCHAR(250),
  dateofbirthg DATE,
  placeofbirthg VARCHAR(250),
  citizenshipg VARCHAR(250),
  occupationg VARCHAR(250),
  emailg VARCHAR(250),
  telhomeg VARCHAR(250),
  telghanag VARCHAR(250),
  maritalg VARCHAR(250),
  passportidg VARCHAR(250),
  academicg VARCHAR(250),
  noteg VARCHAR(250),
  aboutidg int,
  passportphotographg 
);
-------------------------------------------------------------------------------------------------
DELIMITER $$
CREATE TRIGGER tg_student_insert
BEFORE INSERT ON students
FOR EACH ROW
BEGIN
  INSERT INTO student_seq VALUES (NULL);
  SET NEW.id = CONCAT('EVLI-', LPAD(LAST_INSERT_ID(), 5, '0'));
END$$
DELIMITER ;
