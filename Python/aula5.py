lista = [1, 3, 5, 7]
lista_animal = ['cachorro', 'gato', 'elefante', 'arara']
print(lista_animal[0])
for x in lista_animal:
    print(x)

# #Somar todos os itens
# soma = 0
# for x in lista:
#     print(x)
#     soma += x
# print(soma)
# #Ou
# print(sum(lista))
# #Valor maximo da lista
# print(max(lista))
# #Valor minimo da lista
# print(min(lista))

#Verificando se tem um item na lista
if 'lobo' in lista_animal:
    print('Existe um lobo na lista.')
else:
    print('Não existe um lobo na lista. Sera incluido.')
    #add item a lista
    lista_animal.append('lobo')
    print('Incluido com sucesso.')
# #Remove o ultimo item da lista
# lista_animal.pop()
# #Pode adicionar a posição do item a ser removido
# lista_animal.pop(2)
# #Remover um item da lista passando o nome
# lista_animal.remove('gato')

#Ordenando os itens da lista
lista_animal.sort()
print(lista_animal)
#Ordenado os itens de forma inversa
lista_animal.reverse()
print(lista_animal)

#Tuplas são imutaveis, ou seja, ela não pode ser alterada
tupla = tuple(1, 10, 12, 14)
print(tupla[2])