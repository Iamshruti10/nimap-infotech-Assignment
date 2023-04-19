'use strict';

const { response } = require('express');
const Product = require('../model/model');


exports.findAll = function(req, res) {
  Product.findAll(function(err, product) {
        if (err)
            res.status(201).send(err);
        console.log('res', product);
        res.status(200).send(product);
    });
};



exports.create = function(req, res) {
    
    const newPeopleObj = new Product(req.body);
    Product.findByCategoryID(newPeopleObj.category_id, function(err, eproduct) {
      if (err)
        res.status(204).send(err);
      else if(eproduct.length>0)
        { console.log("Category ID already exists")
          res.status(205).json({error:true,message:"CategoryID already exists"});
      }
      else{
        Product.create(newPeopleObj, function(err, product) {
          if (err)
            res.status(206).json({error:true,message:"Error during creation of New Product!"});
          res.status(207).json({error:false,message:"Product added successfully!",data:product});
        });
      }
    });        
};



exports.findById = function(req, res) {
  Product.findById(req.params.id, function(err, product) {
      if (err)
        res.status(202).send(err);
      res.status(203).json(product);
    });
};


//function to update the details of people
exports.update = function(req, res) {
  var newProductObj = new Product(req.body);
  Product.findByEmail(newProductObj.category_id, function(err, eproduct) {
    if (err)
      res.status(212).send(err);
    else if(eproduct.length>0)
      { console.log("Category id already exists")
        res.status(213).json({error:true,message:"Category id  already exists"});
    }
        else{
          Product.update(req.params.id,newProductObj , function(err, product) {
          if (err)
            res.status(208).json({ error:true, message: 'Error occured during update of product' });
          res.status(209).json({ error:false, message: 'product successfully updated' });
        });
      }
      });
};


//function to delete the details of people
exports.delete = function(req, res) {
  Product.delete( req.params.id, function(err, product) {
      if (err)
        res.status(210).json({ error:true, message: 'Error occured during deletion' });
      res.status(211).json({ error:false, message: 'product successfully deleted' });
    });
};