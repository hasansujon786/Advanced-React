import {forwardTo} from 'prisma-binding';

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
  me(_, __, ctx, info) {
    const {userId} = ctx.request
    // if there is no current user
    if (!userId) return null

    return ctx.db.query.user({
      where: {id: userId}
    }, info)
  }
};

export default Query;
