import { Document, Model, model, Schema } from 'mongoose'

interface IRecipe extends Document {
    name: string,
    description: string,
    thumbsUp: Number,
    thumbsDown: Number
}

const recipeSchema = new Schema<IRecipe>({
    name: { type: String, required: true },
    description: { type: String, required: true },
    thumbsUp: { type: Number, required: true },
    thumbsDown: { type: Number, required: true },
  });

const Recipe: Model<IRecipe> = model<IRecipe>('Recipe', recipeSchema);

export default Recipe;





