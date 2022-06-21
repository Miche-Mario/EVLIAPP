const express = require('express');
const { connect, resume } = require('../connection');
const connection = require('../connection');
const router = express.Router();
var auth = require('../services/authentification');
var checkRole = require('../services/checkRole');



router.post('/add', auth.authentificateToken, checkRole.checkRole,(req,res,next) => {
    let category = req.body;
    query = "insert into category (name) values(?)";
    connection.query(query,[category.name], (err, results) => {
        if(!err) {
            return res.status(200).json({message: "Category Added Successfully"});
        }else {
            return res.status(500).json(err)
        }
    })
});


router.get('/categories', auth.authentificateToken,(req, res) => {
    var query = "select * from category order by name";
    connection.query(query, (err, results) => {
        if(!err) {
            return res.status(200).json(results);
        }else {
            return res.status(500).json(err)
        }
    })
})

router.patch("/update", auth.authentificateToken, checkRole.checkRole,(req, res) => {
    let product = req.body;
    var query = "update category set name=? where id=?";
    connection.query(query, [product.name, product.id], (err, results)=> {
        if(!err) {
            if(results.affectedRow == 0) {
                return res.status(404).json({message: 'Category does not found'});
            }
            return res.status(200).json({message: "Category Updated Successfully"})
        } else {
            return res.status(500).json(err);
        }
    })
})

module.exports = router;