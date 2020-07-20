lista = [1, 10]
arquivo = open('teste.txt', 'r')
try:
    texto = arquivo.read()
    divisao = 10 / 0
    numero = lista[2]
    # Causa um erro
    # x = a
except ZeroDivisionError:
    print('Não é possivel realizar divisão por 0')
except ArithmeticError:
    print('Houve um erro ao realizar uma operação aritmética')
except IndexError:
    print('Erro ao acessar um indice inválido da lista')
except BaseException as ex:
    print('Erro desconhecido. Erro: {}'.format(ex))
else:
    print('Executa quando não tiver nenhuma exceção.')
finally:
    # Sempre executa
    print('Fechando o arquivo')
    arquivo.close()