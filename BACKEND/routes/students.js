const express = require("express")
const connection = require('../connection')
const router = express.Router();


const jwt = require("jsonwebtoken");
const nodemailer= require("nodemailer");
require('dotenv').config();
var auth = require("../services/authentification")
var checkRole = require('../services/checkRole');
const { authentificateToken } = require("../services/authentification");



router.post('/addStudent', auth.authentificateToken, checkRole.checkRole, (req, res) => {
    let student = req.body;
    var query = "insert into students (surnameg, forenamesg, genderg,dateofbirthg,placeofbirthg,citizenshipg,occupationg,emailg,telhomeg,telghanag,maritalg,passportidg,academicg,noteg,passportphotographg,idscang,surnamee,fornamese,gendere,relationshipe,occupatione,emaile,tel1e,tel2e,addresse,surnamep, forenamesp, genderp, relationshipp,occupationp,emailp,tel1p,tel2p,addressp,nameo,addresso,tel1o,emailo,contacto,tel2o) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"; //40
    connection.query(query, [student.surnameg, student.forenamesg, student.dateofbirthg, student.placeofbirthg,student.citizenshipg,student.occupationg,student.emailg,student.telhomeg,student.telghanag,student.maritalg,student.passportidg,student.idscang,student.surnamee,student.fornamese,student.gendere,student.relationshipe,student.occupatione,student.emaile,student.tel1e,student.tel2e,student.addresse,student.surnamep, student.forenamesp, student.genderp, student.relationshipp,student.occupationp,student.emailp,student.tel1p,student.tel2p,student.addressp,student.nameo,student.addresso,student.tel1o,student.emailo,student.contacto,student.tel2o
                            ], (err, results) => {
        if(!err) {
            return res.status(200).json({message: "Student Added Successfully."});
        }else {
            return res.status(500).json(err);
        }
    })
})

router.post('/studentcourses', auth.authentificateToken, checkRole.checkRole, (req, res) => {
    let studentCourses = req.body;
    var query = "insert into students_courses (students_studentid,courses_courseid) values (?,?)"; //40
    connection.query(query, [studentCourses.students_studentid,studentCourses.courses_courseid], (err, results) => {
        if(!err) {
            return res.status(200).json({message: "Student Added Successfully."});
        }else {
            return res.status(500).json(err);
        }
    })
})