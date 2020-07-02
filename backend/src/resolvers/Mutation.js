const Mutation = {
  async createItem(parent, args, ctx, info) {
    // TODO: check if the are logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args.data
      }
    }, info)

    return item
  },
  async updateItem(parent, {data, where}, ctx, info) {
    const updatedItem = await ctx.db.mutation.updateItem({
      data,
      where
    }, info)

    return updatedItem
  },
  async deleteItem(parent, {where}, {db}, info) {
    // find the item
    const item = await db.query.item({where}, `{
      id
      title
    }`)
    // TODO
    // check if user own the item or has the permission
    // delete image form cloudinary
    return db.mutation.deleteItem({where}, info)
  }

};

export default Mutation


