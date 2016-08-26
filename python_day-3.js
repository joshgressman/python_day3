Python 3.5.2 (v3.5.2:4def2a2901a5, Jun 26 2016, 10:47:25)
[GCC 4.2.1 (Apple Inc. build 5666) (dot 3)] on darwin
Type "copyright", "credits" or "license()" for more information.
>>> WARNING: The version of Tcl/Tk (8.5.9) in use may be unstable.
Visit http://www.python.org/download/mac/tcltk/ for current information.

>>> age = input('Enter your age: ')
Enter your age: 31
>>> print("You have lived for {} seconds." .format(str(int(age) * 365 * 24 * 60 * 60 )))
You have lived for 977616000 seconds.
>>> #what is in the .format method goes inside the {}
>>> #no longer need the str() method will auto convert
>>> print("you have lived for {} seconds." format(int(age) * 365 * 24 * 60 * 60))
SyntaxError: invalid syntax
>>> print("you have lived for {} seconds." .format(int(age) * 365 * 24 * 60 * 60))
you have lived for 977616000 seconds.
>>> print("you have lived for {} seconds." .format(int(age) * 365 * 24 * 60 * 60), age)
you have lived for 977616000 seconds. 31
>>> #you can add ,age and another {} to display the additional info wil sepretate
>>> print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60), age)
Traceback (most recent call last):
  File "<pyshell#9>", line 1, in <module>
    print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60), age)
IndexError: tuple index out of range
>>> print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60), age)
Traceback (most recent call last):
  File "<pyshell#10>", line 1, in <module>
    print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60), age)
IndexError: tuple index out of range
>>> print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60), age))
SyntaxError: invalid syntax
>>> print("you have lived for {} seconds. this corresponds to {} years" .format(int(age) * 365 * 24 * 60 * 60, age))
you have lived for 977616000 seconds. this corresponds to 31 years
>>> numbers =[0,1,2,3,4,5,6,7,8,9,10]
>>> numbers
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
>>> #Boom arrays
>>> len(numbers)
11
>>> # find length the len()
>>> number[2]
Traceback (most recent call last):
  File "<pyshell#18>", line 1, in <module>
    number[2]
NameError: name 'number' is not defined
>>> numbers[2]
2
>>> #Find array index value same as javascript index value
>>> numbers[len(number) -1]
Traceback (most recent call last):
  File "<pyshell#21>", line 1, in <module>
    numbers[len(number) -1]
NameError: name 'number' is not defined
>>> numbers[len(numbers) -1]
10
>>> #this is how you find the last index value
>>> #python for loop
>>> for number in numbers:
	print(number)


0
1
2
3
4
5
6
7
8
9
10
>>> #look at that, iterates through the loop
>>> for number in numbers:
	print(number **2)


0
1
4
9
16
25
36
49
64
81
100
>>> #BOOM square a number or go second power
>>> 
