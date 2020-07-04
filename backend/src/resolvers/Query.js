import {forwardTo} from 'prisma-binding';

const Query = {
  items: forwardTo('db'),
  item: forwardTo('db'),
  itemsConnection: forwardTo('db'),
};

export default Query;
