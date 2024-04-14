exports.parse = (settings) => {
    console.log(settings); 
    return {
      //databaseSettings
      name: {
        type: String,
        required: [true, 'A tour must have a name'],
        unique: true
      }
    };
}