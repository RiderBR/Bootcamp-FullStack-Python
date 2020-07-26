#Conjuntos não aceitam duplicidade
conjunto = {1, 2, 3, 4}
print(type(conjunto))
print('Conjunto 1: {}'.format(conjunto))
#adicionar
conjunto.add(5)
print(conjunto)
#remover
conjunto.discard(2)
print(conjunto)

#União
conjunto2 = {2, 6, 7, 8, 5, 4}
print('Conjunto 2: {}'.format(conjunto2))
conjunto_uniao = conjunto.union(conjunto2)
print('União: {}'.format(conjunto_uniao))

#Intersecção, mostra os valores que estão nos dois conjuntos
conjunto_interseccao = conjunto.intersection(conjunto2)
print('Intersecção: {}'.format(conjunto_interseccao))

#Diferença, mostra os valores diferentes dos dois conjuntos
conjunto_diferenca1 = conjunto.difference(conjunto2)
conjunto_diferenca2 = conjunto2.difference(conjunto)
print('Diferenca entre 1 e 2: {}'.format(conjunto_diferenca1),
      '\nDiferença entre 2 e 1: {}'.format(conjunto_diferenca2))

#Diferença simétrica
conjunto_diff_simetrica = conjunto.symmetric_difference(conjunto2)
print('Diferença simétrica: {}'.format(conjunto_diff_simetrica))

#Subset retorna um subconjunto do conjunto
conjunto_a = {1, 2, 3}
conjunto_b = {1, 2, 3, 4, 5}
conjunto_subset = conjunto_a.issubset(conjunto_a)
print('A é um subconjunto de B: {}'.format(conjunto_subset))
#Superset é o contrario de subset
conjunto_superset = conjunto_b.issuperset(conjunto_a)
print('B é um superconjunto de A: {}'.format(conjunto_superset))

#Convertendo de lista para conjunto
lista = ['cachorro', 'gato', 'gato', 'lobo']
lista.sort()
conjunto_animais = set(lista)
print(conjunto_animais)
#Convertendo de conjunto para lista
lista_animais = list(conjunto_animais)
print(lista_animais)