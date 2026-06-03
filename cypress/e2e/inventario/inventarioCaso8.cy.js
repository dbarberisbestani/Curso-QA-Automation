/*describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.login('standard_user','secret_sauce')
    })
        
        it('ordenar de menor a mayor precio',()=>{
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        cy.get('.inventory_item_price').then(($precios) => {
            const precios = $precios.map((index, element) => parseFloat(element.innerText.replace('$', ''))).get()
            const preciosOrdenados = [...precios].sort((a, b) => a - b)
            expect(precios).to.deep.equal(preciosOrdenados)
        })

    
    })

}) //probando opciones de ordenamiento de menor a mayor precio*/