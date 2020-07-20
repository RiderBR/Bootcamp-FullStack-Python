a = 10
b = 6
soma = a + b
sub = a - b
multi = a * b
div = a / b
resto = a % b
print("Soma: {}\n"
      "Subtração: {}\n"
      "Multiplicação: {}\n"
      "Divisão: {:.2f}\n"
      "Resto da divisão: {}\n".format(soma, sub, multi, div, resto))
#Printar na tela o tipo da variavel
print(type(soma))

#Conversão da variavel de inteiro para string
soma = str(soma)
print(type(soma))