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
  }

};

export default Mutation


