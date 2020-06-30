import {forwardTo} from 'prisma-binding';

const Query = {
  items: forwardTo('db')
  // async items(parent, args, ctx, info) {
  //   const items = await ctx.db.query.items()
  //   return items
  // }
};

export default Query;
