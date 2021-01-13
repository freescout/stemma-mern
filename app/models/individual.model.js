module.exports = mongoose => {
  const Individual = mongoose.model(
    'individuals',
    mongoose.Schema(
    {
      name: {
        firstName: String,
        middleName: String,
        lastName: String,
        nickName: String,
      },
      gender: { type: String, required: true, enum: ['male', 'female', 'other'], default: 'other' },
      birth: {
        date: Date,
        place: String,
         parents: [
          {
            id: String,
            role: String
          }
        ],
   
      }, 
      death: {
        date: Date,
        place: String
      },
      /*   partnerships: [
                {
                  ids:String
                }
              ],
              children: [
                {
                  id: String
                }
              ]*/
    }
  ));
  return Individual;
};