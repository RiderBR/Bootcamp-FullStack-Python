class Televisao:
    def __init__(self):
        self.on = False
        self.canal = 5

    def power(self):
        if self.on:
            self.on = False
        else:
            self.on = True

    def aumenta_canal(self):
        if self.on:
            self.canal += 1

    def diminuir_canal(self):
        if self.on:
            self.canal -= 1

if __name__=='__main__':
    televisao = Televisao()
    print('A televisão esta ligada? {}'.format(televisao.on))
    televisao.power()
    print('A televisão esta ligada? {}'.format(televisao.on))
    televisao.power()
    print('A televisão esta ligada? {}'.format(televisao.on))

    print('Canal: {}'.format(televisao.canal))
    televisao.aumenta_canal()
    televisao.aumenta_canal()
    print('Canal: {}'.format(televisao.canal))
    televisao.diminuir_canal()
    print('Canal: {}'.format(televisao.canal))