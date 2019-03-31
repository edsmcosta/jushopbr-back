function cart(parent, args, context) {
    return context.prisma.user({ id: parent.id }).cart()
}

function bougth(parent, args, context) {
    return context.prisma.user({ id: parent.id }).bougth()
}
  
module.exports = {
    cart,
    bougth,
}