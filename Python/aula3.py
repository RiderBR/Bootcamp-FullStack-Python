a = int(input('Digite o primeiro valor: '))
b = int(input('Digite o segundo valor: '))
c = int(input('Digite o terceiro valor: '))
#Se, senão se, senão
if a > b and a > c:
    print('O maior número é {}'.format(a))
elif b > a and b > c:
    print('O maior número é {}'.format(b))
else:
    print('O maior número é {}'.format(c))
print('Fim do programa.')