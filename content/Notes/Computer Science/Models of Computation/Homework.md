#cs #math #cs121 #proof 

# CS 121 Homework

## Question 1.

Prove through direct proof that for any positive integer $n$, if $n \equiv 5 \mod 9$, then $n = 4 \cdot {\lfloor \frac{n}{9}\rfloor} + 5 \cdot {\lceil \frac{n}{9}\rceil}$


> [!theorem] Proof 
> Assume that indeed $n \equiv 5 \mod 9$, then it follows that $n$ can be written as $n = 9k + 5$ for some $k\in\mathbb Z^+$. Now, substituting this equation for $n$ we see that:
> $$
> n = 4 \cdot {\Bigg\lfloor \frac{9k+5}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil \frac{9k+5}{9}\Bigg\rceil}
> $$
> Simplifying we then see that:
> $$
> n = 4 \cdot {\Bigg\lfloor k + \frac{5}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil k + \frac{5}{9}\Bigg\rceil}
> $$
> Now, applying the ceiling and floor functions in turn, we know that the ceiling function maps a real number to the next largest integer greater than or equal to it. Thus, $k$ will remain as $k$ but $\frac{5}{9}$ will be rounded to 1. This yields:
> $$
> n = 4 \cdot {\Bigg\lfloor k + \frac{5}{9}\Bigg\rfloor} + 5(k+1)
> $$
> Similarly, now applying the floor function, we know that it maps a real number to the largest previous integer less than or equal to it. Thus, again $k$ remains as $k$ but $\frac{5}{9}$ will be rounded down to 0. This yields:
> $$ 
> n = 4 \cdot (k+0) + 5(k+1)
> $$
> Simplifying, we obtain $n = 4k + 5k +5$ and thus we have that:
> $$
> n = 9k + 5 \iff n \equiv 5 \mod 9
> $$ 
> And the proof is complete as we have just shown that 
> $$
> n \equiv 5 \mod 9 \implies n = 4 \cdot {\Bigg\lfloor \frac{n}{9}\Bigg\rfloor} + 5 \cdot {\Bigg\lceil \frac{n}{9}\Bigg\rceil}
> $$

## Question 2.

Prove by contradiction that for any three integers $a,b,c > 1$, if $a$ and $c$ share no common factors greater than 1 and $a \equiv b \mod c$ then $b$ and $c$ share no common factors greater than 1.


> [!theorem] Proof 
> First, let us formalize the question as follows, we want to show that $\forall a,b,c \in \mathbb Z^+ > 1$,
> 
> $$
 > \gcd(a,c) = 1 \land a \equiv b \mod c \implies \gcd(b,c) = 1
 >$$
 > Now, for proof by contradiction we will take the negation as follows:  $\exists a,b,c \in \mathbb Z^+ > 1$ such that:
 > $$
 > \gcd(a,c) = 1 \land a \equiv b \mod c \land \gcd(b,c) \neq 1
 >$$
 > So, assume that $a \equiv b \mod c$ such that $a$ can be written as $a = ck + b$ for some $k\in\mathbb Z^+$.  This implies that $ck = (a-b)$ hence $c$ is a multiple of $(a-b)$ and we have that $c \mid(a-b)$ . That being said, we also assumed that $\gcd(b,c)\neq 1$. Therefore, there exists some integer $\ell\in\mathbb Z > 1$  such that $\ell \mid b$ and $\ell \mid c$. Now, given we have that $\ell \mid b$ and $\ell \mid (a-b)$ it follows that $\ell$ will divide the sum of these two terms such that $\ell \mid (a-b) +b$, which yields $\ell \mid a$. However, we have now reached a contradiction because we assumed $\gcd(a,c) = 1$ but we just have shown that there exists a positive integer $\ell >1$ such that $\ell \mid a$ and $\ell \mid c$, and therefore $\gcd(a,c) \neq 1$  and the original statement must be true by proof by contradiction

## Question 3.

Prove by weak induction that if $S(1)=3$ and $S(n+1) =\sqrt{S(n) + 40}$ for $n \geq 1$ then for all positive integers $n$, $S(n) < 7$.


> [!theorem] Proof 
>  Base case: We have that for $n=1$, $S(1)=3$ which is indeed less than 7 as $3<7$ so the statement holds for $n=1$.
>  
>  Inductive hypothesis: Assume that $S(n+1) = \sqrt{ S(n) +40}<7$ holds true for some unspecified $n\in\mathbb Z^+$.
>
>Inductive step: I wish to show that $S(n+2)<7$ is true, so using the the formula for $S(n+1)$ we can see that $S(n+2)$ can be written as follows:
>$$
>S(n+2) = \sqrt{ S(n+1) + 40 }.
>$$
>Now, from the inductive hypothesis, we assumed that $S(n+1)<7$, so substituting this inequality into our equation above we find:
>$$
> S(n+2) < \sqrt{7 + 40  }
>$$
>Hence, $S(n+2) < \sqrt{47}$ and thus $S(n+2) < 7$ as $\sqrt{ 47}<\sqrt{ 49 }$. Therefore, by weak induction, $\forall n \in\mathbb Z^+$ we have that $S(n) <7$.

## Question 4.

Prove by strong induction for integers $x$ and $n\geq 1$ such that:
$$
\begin{align}
x_{1} & = 3 \\
x_{2} & = 12 \\
x_{3} & = 18 \\
x_{n\geq_{4}} & = x_{n-1} + 2x_{n-2}
\end{align}
$$
That $x_{n}=5\cdot 2^{n-1}+2\cdot (-1)^n$ 


> [!theorem] Proof 
>  Base cases:
>  We see that for $x_1=3$, our formula for $x_n$ yields:
>  $$
>  x_1 = 5 \cdot 2^{1 -1} + 2 \cdot (-1)^1 = 5 - 2 = 3
>  $$
>  Thus, our base case $x_1$ holds as $3=3$. Repeating this for $x_2=12$ we find:
>  $$ 
>  x_2 = 5 \cdot 2^{2 -1} + 2 \cdot (-1)^2 = 10 + 2 = 12
>  $$
>  Thus, our base case $x_2$ also holds as $12=12$. Finally, repeating this for $x_3=18$ we find:
>  $$ 
>  x_3 = 5 \cdot 2^{3 -1} + 2 \cdot (-1)^3 = 20 - 2 = 18
>  $$
>  Thus, our base case $x_3=18$ also holds as $18=18$.
>  
>  Inductive Hypothesis: Assume that for all integers $k<n$, the formula $x_{k}=5\cdot 2^{k-1}+2\cdot (-1)^k$ will hold.
>  
>  Inductive Step: I wish to show that the formula above will also hold for some unspecified integer $n = k +1$. So, consider an unspecified integer $n\geq 4$, from our problem we then know that the formula for $x_n$ is given by:
>  $$
>  x_n = x_{n-1} + 2 \cdot x_{n-2}
> $$
> Now, by the inductive hypothesis, we assumed that $x_k = 5 \cdot 2^{k-1} + 2(-1)^k$. So, substituting this into our formula for $x_n$ we see that:
>  $$
>  x_{k+1} = x_{k} + 2 \cdot x_{k-1} = 5\cdot 2^{k-1}+2\cdot (-1)^k + 2\Big[5\cdot 2^{k-2}+2\cdot (-1)^{k-1}\Big]
> $$
> Now, distributing the 2 we find:
> $$
>  x_{k+1} = 5\cdot 2^{k-1}+2\cdot (-1)^k + 10\cdot 2^{k-2}+4\cdot (-1)^{k-1}
> $$
> Now, using the fact that $10\cdot 2^{k-2} = 5 \cdot 2^{k-1}$ and that $4\cdot (-1)^{k-1} = -4 \cdot (-1)^k$ we can simplify the expression above as follows:
> $$
>  x_{k+1} = 5\cdot 2^{k-1}+2\cdot (-1)^k + 5\cdot 2^{k-1}-4\cdot (-1)^{k}
> $$
> Which simplifies to:
> $$
>  x_{k+1} = 10\cdot 2^{k-1} - 2(-1)^k = 5 \cdot 2^{k} - 2(-1)^k
>  
> $$
> Which we can rewrite as:
> $$
> x_{k+1} = 5\cdot 2^{(k+1)-1} + 2(-1)^{k+1} 
> $$
> Where $n = k + 1$, therefore we have recovered the formula:
> $$
> x_n = 5 \cdot 2^{n-1} + 2 \cdot (-1)^n
> $$
> Thus by strong induction we have shown that for all integers $n\geq 1$, $x_n = 5\cdot 2^{n-1} + 2 \cdot (-1)^n$

## Question 5.

Prove by direct proof that if $f(n) = 5^{10\log_5(n)}$ and $g(n) = n^{10} - 2n^9$ then $f(n) \in O(g(n))$.


> [!theorem] Proof 
> In order to prove that $f(n) \in O(g(n))$ we need to show that:
> $$
> \exists c \in \mathbb R^+, \exists n_{0}\in \mathbb N, \forall n \in \mathbb N, n \geq n_{0} \implies f(n) \leq cg(n)
> $$
> So, we have that $f(n) = 5^{10\log_5(n)}$ which can be written as $f(n) = 5^{\log_5(n^{10})}$ which is just equivalent to $f(n) = n^{10}$. Moreover, we know that $g(n) = n^{10} - 2n^9$ which can be written as the product $g(n) = n^9(n-2)$. Now,  let $c = 2$ and $n_0 = 4$. Then, we have that for $n\geq n_{0} = 4$, that $n - 2 \geq \frac{n}{2}$ . With this inequality we can then rewrite $g(n)$ as follows: 
> $$
> g(n) = n^9(n-2)\geq n^9 \cdot \frac{n}{2}  = \frac{1}{2}n^{10}
> $$
> Then, if $c=2$ we see that $cg(n) \geq 2 \cdot \frac{1}{2}n^{10} = n^{10}$. Thus, we have that $n^{10} \leq n^{10}$ when $c=2$ $\forall n \geq n_0=4$, and as required we hence have that:
> $$
> f(n) \leq cg(n)
> $$
> So, indeed $f(n) \in O(g(n))$







