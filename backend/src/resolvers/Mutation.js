import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {APP_SECRET} from '../config';

const Mutation = {
  async createItem(_, args, ctx, info) {
    // TODO: check if the are logged in

    const item = await ctx.db.mutation.createItem({
      data: {
        ...args.data
      }
    }, info)

    return item
  },
  async updateItem(_, {data, where}, ctx, info) {
    const updatedItem = await ctx.db.mutation.updateItem({
      data,
      where
    }, info)

    return updatedItem
  },
  async deleteItem(_, {where}, ctx, info) {
    // find the item
    const item = await ctx.db.query.item({where}, `{ id }`)
    // TODO
    // check if user own the item or has the permission
    // delete image form cloudinary
    return ctx.db.mutation.deleteItem({where}, info)
  },
  async signUp(_, args, ctx, info) {
    // hash the password
    const password = await bcrypt.hash(args.password, 10)
    const user = await ctx.db.mutation.createUser({
      data: {
        ...args,
        password,
        permissions: {set: ['USER']}
      }
    }, info)

    // set cookie
    const token = jwt.sign({userId: user.id}, APP_SECRET)
    ctx.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365 // 1yr
    })

    return user
  }

};

export default Mutation


