'use strict';

var sqlConn = require('../../configs/mysql_config');


//People object create
var Product = function(product){
  this.category_id     = product.category_id;
  this.category_name      = product.category_name;
  this.product_id          = product.product_id;
  this.product_name          = product.product_name;

};


Product.create = function (newProduct, result) {
    sqlConn.query("INSERT INTO product set ?", newProduct, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};



Product.findById = function (id, result) {
    sqlConn.query("Select * from product where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        
        else{
            result(null, res);
        }
    });
};


Product.findByCategoryID = function (id, result) {
    sqlConn.query("Select * from peoples where categoryId = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        
        else{
            result(null, res);
        }
    });
};




Product.findAll = function (result) {
    sqlConn.query("Select * from product", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        
        else{
            console.log('product : ', res);
            result(null, res);
        }
    });
};



Product.update = function(id, product, result){
    sqlConn.query("UPDATE product SET category_id=?,category_name=?,product_id=?,product_name=? WHERE id = ?", [product.category_id,product.category_name,product.product_id,product.product_name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        
        else{
            result(null, res);
        }
    });
};



Product.delete = function(id, result){
    console.log("id",id)
    sqlConn.query("DELETE FROM product WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        
        else{
            result(null, res);
        }
    });
};


module.exports= Product;