function newProductSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.product({ mutation_in: ['CREATED'] }).node()
}

const newProduct = {
    subscribe: newProductSubscribe,
    resolve: payload => {
      return payload
    },
}

function newUserSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.user({ mutation_in: ['CREATED'] }).node()
}

const newUser = {
    subscribe: newUserSubscribe,
    resolve: payload => {
      return payload
    },
}
   
module.exports = {
    newProduct ,
    newUser ,
}