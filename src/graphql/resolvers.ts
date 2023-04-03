import Recipe from '../models/recipe'

const resolvers = {
    Query: {
      async recipe(_: any, { ID }: any) {
        return await Recipe.findById(ID);
      },
      async getRecipes(_: any, { amount }: any) {
        return await Recipe.find()
          .limit(amount);
      },
    },
    Mutation: {
      async createRecipe(_: any, { recipeInput }: any) {
        const createdRecipe = new Recipe({
          name: recipeInput.name,
          description: recipeInput.description,
          thumbsUp: 0,
          thumbsDown: 0,
        });
        const res = await createdRecipe.save();
  
        return {
          id: res._id.toString(),
          name: res.name,
          description: res.description,
          thumbsUp: res.thumbsUp,
          thumbsDown: res.thumbsDown,
        };
      },
      async deleteRecipe(_: any, { ID }: any) {
        const wasDeleted = (await Recipe.deleteOne({ _id: ID })).deletedCount;
        return wasDeleted > 0;
      },
      async editRecipe(_: any, { ID, recipeInput: {name, description} }: any) {
        const wasEdited = (await Recipe.updateOne({ _id: ID }, {name: name, description: description}))
          .modifiedCount;
        return wasEdited;
      },
    },
  };

export default resolvers ;