module.exports.config = [
  {
    databaseSettings: {
      name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
      },
      rating: {
        type: Number,
        default: 4.5
      },
      price: {
        type: Number,
        required: [true, 'A tour must have a price']
      }
    },
    objectName: 'tasks'
  },
  {
    databaseSettings: {
      name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
      },
      rating: {
        type: Number,
        default: 4.5
      },
      price: {
        type: Number,
        required: [true, 'A tour must have a price']
      }
    },
    objectName: 'equipments'
  }
];
