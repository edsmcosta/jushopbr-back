function info () { 
    return `This is the API of a Hackernews Clone`
}

async function feed (root, args, context, info) {
    const where = args.filter && args.filter ?  {
                                                    name_contains: args.filter
                                                }            
                                            : {}

    console.log(where)

    const products = await context.prisma.products( { where } )

    return products
}

function productById (root, args, context, info) {
    return context.prisma.product({id: args.id})
}

function userById (root, args, context, info) {
    return context.prisma.user({id: args.id})
}

module.exports = {
      feed ,
      info ,
      productById ,
      userById ,
}