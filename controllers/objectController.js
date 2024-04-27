const Object = require('./../models/objectModel');
const APIFeatures = require('../utils/apiFeatures');

module.exports = class ObjectController {
    constructor(config) {
        this.objectModel = Object.createObjectModel(config);
        this.getAllObjects = this.getAllObjects.bind(this);
        this.getObject = this.getObject.bind(this);
        this.createObject = this.createObject.bind(this);
        this.updateObject = this.updateObject.bind(this);
        this.deleteObject = this.deleteObject.bind(this);
        }
         
       async getAllObjects(req, res) {
         try {
              const features = new APIFeatures(
                this.objectModel.find(),
                req.query
              )
                .filter()
                .sort()
                .limitFields()
                .paginate();
              const objects = await features.query;
           res.status(200).json({
             status: 'success',
             results: objects.length,
             data: {
               objects
             }
           });
         } catch (err) {
           res.status(404).json({
             status: 'fail',
             message: err
           });
         }
       }

       async getObject(req, res) {
         try {
           const object = await this.objectModel.findById(req.params.id);
           res.status(200).json({
             status: 'success',
             data: {
               object
             }
           });
         } catch (err) {
           res.status(404).json({
             status: 'fail',
             message: err
           });
         }
       }

       async createObject(req, res) {
         try {
           const newObject = await this.objectModel.create(req.body);

           res.status(201).json({
             status: 'success',
             data: {
               object: newObject
             }
           });
         } catch (err) {
           res.status(400).json({
             status: 'fail',
             message: err
           });
         }
       }

       async updateObject(req, res) {
         try {
           const object = await this.objectModel.findByIdAndUpdate(
             req.params.id,
             req.body,
             {
               new: true,
               runValidators: true
             }
           );
           res.status(200).json({
             status: 'success',
             data: {
               object
             }
           });
         } catch (err) {
           res.status(404).json({
             status: 'fail',
             message: err
           });
         }
       }

       async deleteObject(req, res) {
         try {
           console.log(this.objectModel);
           await this.objectModel.findByIdAndDelete(req.params.id);
           res.status(204).json({
             status: 'success'
           });
         } catch (err) {
           res.status(404).json({
             status: 'fail',
             message: err
           });
         }
       }
     }


