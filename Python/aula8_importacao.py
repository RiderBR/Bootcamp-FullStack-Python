from aula8 import contador_letras

if __name__ == '__main__':
    lista = ['cachorro', 'gato', 'lobo']
    total_letras = contador_letras(lista)
    print('Total de letras por palavra de lista: {}'.format(total_letras))