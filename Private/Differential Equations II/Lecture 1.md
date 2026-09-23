#math 

# Review

## First Order ODEs
> First order ODEs take two main forms: ==separable, or linear.==


### Separable ODEs
$$
y'= P(x) \cdot Q(y)
$$
These can be solved as follows:
$$
\begin{align}
y' & = P(x) \cdot Q(y) \\
\frac{dy}{dx}\cdot \frac{1}{Q(y)} & =P(x) \\
\int \frac{1}{Q(y)}dy  & = \int P(x) dx + C
\end{align}
$$
For example, take $y'= y \cdot \cos x$:
$$
\begin{align}
y' & =y \cdot \cos x \\
\frac{dy}{dx } & = y\cos x \\
\int \frac{1}{y} dy  & = \int \cos x dx + C \\
\ln|y|  & = \sin x + C \\
e^{ \ln|y| } & =e^{ \sin x + C } \\
|y|  & = C_{1}e^{ \sin x }
\end{align}
$$




### Linear ODEs
$$
y' + P(x)y = Q(y)
$$
Linear ODEs of this form can be solved by using [[1.4 The Integrating Factor]] as follows:
$$
\begin{align}
y' + \cot(x) \cdot y  & = \cos(x) \\

\end{align}
$$
Now, let $\mu(x)$ be defined as:
$$
\mu(x) = e^{ \int \cot x \, dx  } = e^{ \int \cos x/\sin x \, dx   } 
$$
Solving the integral:
$$
\int \frac{{\cos x}}{\sin x} \, dx = e^{ \int 1/u \, du }= e^{ \ln|\sin x| }= \pm \sin x
$$
Multiplying into the original equation:
$$
\begin{align}

\sin x \cdot y' + \sin x \cdot \cot x \cdot y &  = \sin x\cos x \\
\sin x \cdot y' + \cos x \cdot y  &  =\sin x \cos x \\
[\sin x \cdot y]'  & = \sin x \cos x \\
\int [\sin x \cdot y]' \, dx  & =\int \frac{1}{2}\sin(2x) \, dx +C \\
\sin x \cdot y  & = \frac{1}{2} \cdot \frac{1}{2} \cdot - \cos(2x) + C \\
y & = -\frac{1}{4} \cdot \frac{\cos(2x)}{\sin x}+ \frac{C}{\cos(2x)}
\end{align}
$$
## Second Order ODEs
$$
ay'' + by' + cy=f(x)
$$
## Cauchy-Euler ODEs
$$
x^2y'' + \alpha xy' + \beta y=0
$$
