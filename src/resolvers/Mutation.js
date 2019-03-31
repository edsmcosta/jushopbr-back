const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const { APP_SECRET, getUserId } = require('../utils')


async function signup(parent, args, context, info) {
    // 1
    const password = await bcrypt.hash(args.password, 10)
    // 2
    const user = await context.prisma.createUser({ ...args, password })
  
    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 4
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    // 1
    const user = await context.prisma.user({ email: args.email })
    if (!user) {
      throw new Error('No such user found')
    }
  
    // 2
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 3
    return {
      token,
      user,
    }
  }

  async function updateUser (parent, args, context, info){
    // 1
    const userId = getUserId(context)

    // 2
    const userExists = await context.prisma.$exists.user({
      id: userId 
    })

    console.log(userExists, args)

    if (!userExists) {
      throw new Error(`Product not found for id: ${args.id}`)
    }

    // 3
    return context.prisma.updateUser(
      { ...args }
    )
  }

  async function  deleteUser (parent, args, context, info){
    const userId = getUserId(context)

    return context.prisma.deleteUser({
        id: userId
    })

  }
  
  async function  postProduct(parent, args, context, info) {
    const userId = getUserId(context)
    return context.prisma.createProduct({
        ...args
    })
  }
  
  async function  deleteProduct (parent, args, context, info){
    const userId = getUserId(context)

    return context.prisma.deleteProduct({
        id: args.id
    })

  }
  
  async function updateProduct (parent, args, context, info){
    // 1
    const userId = getUserId(context)

    // 2
    const productExists = await context.prisma.$exists.product({
      id: args.id 
    })

    console.log(productExists, args)

    if (!productExists) {
      throw new Error(`Product not found for id: ${args.id}`)
    }

    // 3
    return context.prisma.updateProduct(
      { ...args }
    )
  }  

  
  module.exports = {
    signup,
    login,
    postProduct,
    deleteProduct,
    updateProduct,
    deleteUser,
    updateUser,

  }