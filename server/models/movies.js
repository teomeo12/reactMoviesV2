const mongoose = require(`mongoose`)

let movieSchema = new mongoose.Schema(
   {
       title: {type: String,unique:true,required:true},
        posterUrl: {type: String},
        year: {type: Number},
        runtime: {type: Number},
        genres: {type: Array},
        director: {type: String},
       actors: {type: String},
       plot: {type: String}

   },
   {
       collection: `movies`
   })

module.exports = mongoose.model(`movies`, movieSchema)
