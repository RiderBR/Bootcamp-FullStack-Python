from datetime import date, time, datetime, timedelta

def trabalhando_com_date():
    print('DATE')
    data_atul = date.today()
    print(type(data_atul))
    print(data_atul.strftime('%d/%m/%Y'))
    data_atul_str = data_atul.strftime('%A, %B de %Y')
    print(type(data_atul_str))
    print(data_atul_str, '\n')

def trabalhando_com_time():
    print('TIME')
    horario = time(hour=15, minute=57, second=30)
    print(horario)
    horario_str = horario.strftime('%H : %M : %S')
    print(horario_str, '\n')

def trabalhando_com_datetime():
    print('DATETIME')
    data_atual = datetime.now()
    print(data_atual)
    data_atual_str = data_atual.strftime('%d/%m/%Y - %H:%M:%S')
    print(data_atual_str)
    print(data_atual.strftime('%c'))
    print(data_atual,)
    tupla = ('Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabádo', 'Domingo')
    print(tupla[data_atual.weekday()])
    data_criada = datetime(2018, 6, 20, 15, 30, 20)
    print(data_criada)
    print(data_criada.strftime('%c'))
    data_string = '22/09/1996 03:20:55'
    data_convertida = datetime.strptime(data_string, '%d/%m/%Y %H:%M:%S')
    print(data_convertida)
    nova_data = data_convertida + timedelta(days=365, hours=2, minutes=15)
    print(nova_data)

if __name__ == '__main__':
    trabalhando_com_date()
    trabalhando_com_time()
    trabalhando_com_datetime()