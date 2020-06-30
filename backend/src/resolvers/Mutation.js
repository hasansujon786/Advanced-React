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

};

export default Mutation


