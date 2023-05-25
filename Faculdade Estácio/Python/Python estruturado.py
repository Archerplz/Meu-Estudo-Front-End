# Estratégia 1
a = 10
b = 20
if a > b:
    maior = a
else:
    maior = b
print(f'O maior número é: {maior}')

# Estratégia 2

a = 10
b = 20
maior = a
if b > maior:
    maior = b
print(f'O maior número é : {maior}')

# Exercício 1

numero =46

if numero % 2 == 0:
    situacao = "O número é par"
else:
    situacao = "O número é impar"

print(situacao)

# Exercício 2

media = 8.5

if media >= 7.0:
    situacao = 'Aprovado'
elif media > 5.0:
    situacao = 'em recuperação'
else:
    situacao = "Reprovado"

print(f'O estudante está: {situacao}')

# Exercício 3

preco_unitario = 10
DESCONTO10 = 0.1
DESCONTO20 = 0.2
quantidade = eval(input('Digite a quantidade que vai comprar: '))
if quantidade <= 10: #menor ou igual a 10
    valor_final = preco_unitario*quantidade
elif quantidade <= 20: #Maior que 10 e menor ou igual a 20
    valor_final = preco_unitario*quantidade*(1-DESCONTO10)
else: #maior que 20
    valor_final = preco_unitario*quantidade*(1-DESCONTO20)

print(f'O valor final da compra é:{valor_final}')

# Exercício 4

lista = [10, 2, 5, 7, 6, 3]
n = len(lista)
soma = 0
for i in range(n):
    if lista[i] % 2 == 0:
        soma = soma + lista[i]

print(f'O somatório dos elementos pares da lista é:{soma}')

# Exercício 4/2

lista = [10, 2, 5, 7, 6, 3]

soma = 0
for num in lista:
    if num %2 == 0:
        soma = soma + num
print(f'O somatório dos elementos pares da lista é:{soma}')