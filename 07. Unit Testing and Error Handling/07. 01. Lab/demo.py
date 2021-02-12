from .operations import add, subtract, multiply, divide, power

def calculate_expression(expression):
    (x, sign, y) = expression.split(' ')
    x = float(x)
    y = float(y)
    
    execute_command = {
        '+': add,
        '-': subtract,
        '*': multiply,
        '/': divide,
        '^': power,
    }
    
    if sign in execute_command:
        execute_command[sign](x, y)
    else:
        raise Exception(f"Invalid sign {sign}")

    return f'{result:.2f}'
