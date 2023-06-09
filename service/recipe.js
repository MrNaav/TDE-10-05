const prisma = require("../db/prisma")

const getAllRecipe = () => {
    return prisma.recipe.findMany()
}

const createRecipe = (nome, descricao, tempoPreparo) => {
    return prisma.recipe.create({
        data:{
            nome,
            descricao,
            tempoPreparo
        }
    })
}

const updateRecipe = (id, nome, descricao, tempoPreparo) => {
    return prisma.receita.update ({
        where:{id},
        data:{nome, descricao, tempoPreparo}
    })
}

const deleteRecipe = (id) => {
    return prisma.recipe.delete ({
        where:{id}
    })
}

module.exports = {
    getAllRecipe,
    createRecipe,
    updateRecipe,
    deleteRecipe,
}