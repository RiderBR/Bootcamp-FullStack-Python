a = int(input('Entre com o número: '))
div = 0
for x in range(1, a + 1):
    resto = a % x
    print(x, resto)
    if resto == 0:
        div = div + 1
if div == 2:
    print('O número {} é primo.'.format(a))
else:
    print('O número {} não é primo.'.format(a))

a = int(input('Entre com um valor: '))
for num in range(a+1):
    div = 0
    for x in range(1, num + 1):
        resto = num % x
        if resto == 0:
            div += 1
    if div == 2:
        print(num)