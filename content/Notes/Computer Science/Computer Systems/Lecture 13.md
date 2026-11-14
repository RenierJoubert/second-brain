#ComputerSystems

# The Smash Attack

![[Pasted image 20261112194557.png]]

In this example, `strcpy(u.username, argv[1])` is copying whatever the user input is into the username field of the user struct, but no bounds checking is performed. This is an issue, because in the struct the `is_admin` member is right after the `username[16]` member in memory, so if the user enters a sufficiently long input, that input will also be written into the `is_admin` field. Namely, if the user inputs a 17 character input, then the last char will be stored in the `is_admin` field, hence allowing the user to change their admin privileges. 

![[Pasted image 20261112195125.png]]

The issue in this case is that the for loop does not have a stop condition, so the only way the loop stops is if `\n` is read. Otherwise, the user can keep pressing characters even if the char count exceeds 16 because there is no bounds check on the `buf` array, which is stored on the stack because `buf[16]` is a local variable. This means the user could potentially fill up, and or overwrite the stack. 

## The Buffer Overflow Bug
> Program code is just bytes in memory, similarly, program data is just bytes in memory. Meaning data can be interpreted as code. So, if the user controls the inputted data, and there are no checks on that data, the user can control what code is written into memory.

For example, the return address of a program is stored on the stack in a stack frame as we just discussed, if a user can overwrite this because there is no bounds checking on the input buffer, then the user can decide the control flow of your program. If the user can introduce code into the program from outside, then trick the program into running by changing he return address this can cause some big trouble.

![[Pasted image 20261112200257.png]]

Basically, the idea is that the attacker does not know where the return address is in memory, so to circumvent this, they can just repeatedly input the malicious return address until it has inevitably overwritten the normal return address, then the attacker can just input padding until they reach their desired malicious return address, then they input the malicious code. Once they are done and `getInput()` terminates, executions begins at the malicious code. 

## System Calls
> A system call is a CPU instruction that signals the OS to do something, regular processes usually don't have permission to do this. For example, this could mean reading or writing to the terminal, files, or program execution. 

![[Pasted image 20261112200710.png]]

- `sys $0` reads the data from file described in `r0`, and stores it in memory starting at the address stored in `r1`, and it reads up to the number of bytes stored in `r2`. It then returns the number bytes read in `r0`, and the data read is stored in `r1`.
- `sys $1` writes up to the number of bytes specified by `r2` starting at `r1` to the file described in `r0`. It then returns the number of bytes written in `r0`.
- `sys $2` executes the file at the address stored in memory at the address in `r0`, the length of the file name is specified by `r1`. It returns 0 if it is successful, else -1.

Note that for n=0, 1, `r0` will also either hold 0 or 1, if r0 is zero we are reading a user input, if r0 is one we are outputting to the terminal. 

![[Pasted image 20261112201901.png]]

Here we call `sys $1` so we are writing data, `r0 = 1` so we are using `stdout`. The buffer begins at `str` in memory, and the size is 12 bytes, so we output `hello world` to the terminal.