class Productos {
    constructor(){
        this.productos = []
        this.id = 0    
    }

    listAll(){
        return this.productos.length ? [...this.productos] : {error : 'No hay productos!'}
    }

    list(id){
        const prod = this.productos.find(prod => prod.id == id);
        return prod || {error : 'El producto no existe!'}
    }

    save(prod){
        const newProd = { ...prod, id:++this.id }
        this.productos.push(newProd)
        return newProd
    }

    actualizar(prod, id) {
        const newProd = {...prod, id: Number(id)};
        // Acá findIndex encuentra el producto por ese id // sino encuentra ese id te retorna -1 
        const index = this.productos.findIndex(p => p.id == id)
        // splice pasarle el indice buscado, la cantidad a remplazar y con qué lo voy a reemplazar
        if(index !== -1){
            this.productos.splice(index, 1, newProd)
            return newProd
        } else {
            return {error : 'El producto no existe!'}
        }
    }

    delete(id){
        const index = this.productos.findIndex(p => p.id == id)
        if(index !== -1){
            return this.productos.splice(index, 1)
        } else {
            return { error : 'El producto no existe!' }
        }
    }
}

export default Productos