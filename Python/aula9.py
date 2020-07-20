import shutil
# #Comando 'w' escreve no conteudo, substituindo tudo que tiver dentro
# #Comando 'a' atualiza o arquivo, ou seja, escreve dentro do arquivo sem apagar o conteudo ja contido
def escrever_arquivo(texto):
    diretorio = 'F:/GitHub/Bootcamp-FullStack-Python/Python/teste.txt'
    arquivo = open(diretorio, 'w')
    arquivo.write(texto)
    arquivo.close()

def atualizar_arquivo(nome_arquivo, texto):
    arquivo = open(nome_arquivo, 'a')
    arquivo.write(texto)
    arquivo.close()

def ler_arquivo(nome_arquivo):
    arquivo = open(nome_arquivo)
    texto = arquivo.read()
    print(texto)

def media_notas(nome_arquivo):
    arquivo = open(nome_arquivo, 'r')
    aluno_nota = arquivo.read()
    # print(aluno_nota)
    aluno_nota = aluno_nota.split('\n')
    # print(aluno_nota)
    lista_media = []
    for x in aluno_nota:
        lista_nota = x.split(',')
        aluno = lista_nota[0]
        lista_nota.pop(0)
        media = lambda notas: sum([int(i) for i in notas]) / 4
        print(aluno)
        # print(lista_nota)
        print(media(lista_nota))
        lista_media.append({aluno:media(lista_nota)})
    return lista_media

def copia_arquivo(nome_arquivo):
    shutil.copy(nome_arquivo, 'Caminho de destino')

def move_arquivo(nome_arquivo):
    shutil.move(nome_arquivo, 'Caminho de destino')


if __name__ == '__main__':
    # copia_arquivo('notas.txt')
    # escrever_arquivo('Primeira linha.\n')
    # aluno = 'Marcos, 9, 8, 8, 7'
    # atualizar_arquivo('notas.txt', aluno)
    # ler_arquivo('notas.txt')
    lista_media = media_notas('notas.txt')
    print(lista_media)