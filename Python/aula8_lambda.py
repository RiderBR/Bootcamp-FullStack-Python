#Lambda é uma forma de resolver funções simples que possam ser resolvidas em uma unica linha
contador_letras = lambda lista: [len(x) for x in lista]

lista_animais = ['cachorro', 'lobo', 'dragão']
print(contador_letras(lista_animais))

soma = lambda a, b: a + b
subtracao = lambda a, b: a - b
print(soma(5, 10))
print(subtracao(10, 5))

calculadora = {
    'soma': lambda a, b: a + b,
    'subtracao': lambda  a, b: a + b,
    'multiplicacao': lambda a, b: a * b,
    'divisao': lambda a, b: a / b,
}
print(type(calculadora))
soma = calculadora['soma']
multiplicacao = calculadora['multiplicacao']
print('A soma é: {}'.format(soma(10, 5)))
print('A multplicação é: {}'.format(multiplicacao(5, 8)))