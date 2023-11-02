import { PrismaClient } from "@prisma/client"

export default async function handler(req, res) {
    //update order
    const prisma = new PrismaClient();

  if(req.method === 'POST') {
    const { id} = req.query

    const updateOrder = await prisma.order.update({
        where: {
            id: parseInt(id)
        },
        // all we need update
        data: {
            states: true
        }
    })
    // update order
    res.status(200).json(updateOrder)
  }
}
