/// <reference types = "cypress"/>

it.only('Equality', () =>{
    const a = 1;
    expect(a).equal(1);
    expect(a, 'Deveria ser 1').equal(1);
    expect(a).to.be.equal(1);
    expect('a').not.to.be.equal('b')
})

it('Truthy', () =>{
    const a = true;
    const b = null;
    let c;

    expect (true).to.be.true;
    expect (b).to.be.null;
    expect (a).not.to.be.null;
    expect (c).to.be.undefined;
})

it ('Object Equality', () => {
    const obj = {
        a:1,
        b:2

    }
    expect(obj).equals(obj)
    expect(obj).equals(obj)
    expect(obj).eq(obj)
    expect(obj).to.be.equal(obj)
    expect(obj).to.be.deep.equal({a:1, b:2})
    expect(obj).eql({a:1, b:2})
    expect(obj).include({a:1})
    expect(obj).to.have.property('b', 2)
    expect(obj).to.not.be.empty
    expect({}).to.be.empty


})

it ('Arrays', () => {
    const arr = [1, 2, 3]
    expect(arr).to.have.members([1, 2, 3])
    expect(arr).to.include.members([1, 3])
    expect(arr).to.not.be.empty
    expect([]).to.be.empty
})

it ('Types', ()=> {
    const num = 1
    const str = 'String'

    expect(num).to.be.a('number')
    expect(str).to.be.a('String')
    expect({}).to.be.an('Object')
    expect([]).to.be.an('array')
})

it ('String', ()=> {

    const str = 'String de Teste'

    expect(str).to.be.equal('String de Teste')
    expect(str).to.have.length('15')
    expect(str).to.contains('ing')
    // expressão em Regexp
    expect(str).to.match(/String/)
    expect(str).to.match(/^String/) // ^ no inicio
    expect(str).to.match(/Teste$/)  // $ no inicio
    expect(str).to.match(/.{15}/)
    expect(str).to.match(/\W+/) // Existem apenas letras/palavras (+) referece a uma ou mais letras/palavras
    expect(str).to.match(/\D+/) // Não contem numeros (+) referece a um ou numeros

    expect(str).to.have.matches(/^String/, /Teste$/)
    
})

it ('Numbers', () => {
    const number = 7
    const floatNumber = 8.1234

    expect (number).to.be.equal(7)
    expect (number).to.be.above(5) //acimna
    expect (number).to.be.below(9) //abaixo

    expect (floatNumber).to.be.equal(8.1234)
    expect (floatNumber).to.be.closeTo(8.12, 0.2)
    expect (floatNumber).to.be.above(5) //acimna
    expect (floatNumber).to.be.below(9) //abaixo
})

