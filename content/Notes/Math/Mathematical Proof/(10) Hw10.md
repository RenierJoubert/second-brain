#math #math220 #proof 

## Solutions to homework 10

1. Question 1.

> [!proof] Proof
> 
> For some function $f:\mathbb Z \to \mathbb Z$ defined by
>
> $$
> f(n) =
> \begin{cases}
> 7-n & \text{$n$ is even }\\
> 5+n & \text{$n$ is odd }
> \end{cases}
> $$
>
> In order to show that $f$ is bijective we will first prove that $f$ is injective. So, suppose for contradiction, that $f$ is not injective, then it follows that there exists distinct integers $m\neq n$ such that
> $$
> f(m)=f(n),
> $$
> Now, let us consider all the possible parities of $m$ and $n$.
>
> Firstly, if $m$ and $n$ are both even we have that $f(m)=7-m$ and $f(n)=7-n$, so $7-m=7-n$, thus implying $m=n$, contradicting $m\neq n$.
>
> Moreover, if $m$ and $n$ are both odd then $f(m)=5+m$ and $f(n)=5+n$, therefore, $5+m=5+n$, and again $m=n$, contradicting $m\neq n$.
>
> Finally, if one of $m,n$ is even and the other is odd, for instance let $m$ be even and $n$ be odd. Then it follows that:
> $$
> 7-m = f(m)=f(n)=5+n,
> $$
> so $7-m=5+n$, and hence $m+n=2$. However, the sum of an even and an odd integer is odd, while $2$ is even, thus we have again reached a contradiction to $m\neq n$. So, ultimately each case leads to a contradiction and thus our initial assumption was false and $f$ is injective.
>
> Now, to prove $f$ is surjective, again suppose, for contradiction, that $f$ is not surjective. Then there exists $y\in\mathbb Z$ with no preimage under $f$.
>
> So, again by case analysis, firstly we can see if $y$ is odd, then $7-y$ is even and $f(7-y)=7-(7-y)=y$, thus $y$ indeed has a preimage and we have reached a contradiction. Furthermore, if $y$ is even, then $y-5$ is odd and $f(y-5)=5+(y-5)=y$, thus again $y$ has a preimage and we have reached a contradiction. Therefore, we may conclude no such $y$ exists and $f$ is surjective.
>
> Since $f$ is both injective and surjective, $f$ is bijective and it's inverse $f^{-1}:\mathbb Z\to\mathbb Z$ is as follows:
> $$
> f^{-1}(n)=\begin{cases}
> 7-n & n\ \text{is odd},\\[4pt]
> n-5 & n\ \text{is even}.
> \end{cases}
> $$ 
   
2. Question 2.

   Consider a function $f:A\to B$ between sets $A$ and $B$. Define
   $$
   F:\mathcal P(A)\longrightarrow \mathcal P(B),\qquad X\longmapsto f(X),
   $$
   where $f(X)=\{\,f(x):x\in X\,\}$ is the image of the subset $X\subseteq A$.

   (a) Suppose
   $$
   f:\{1,2,3\}\longrightarrow\{a,b,c\}
   \qquad\text{is given by}\qquad
   1\mapsto a,\; 2\mapsto a,\; 3\mapsto b.
   $$
   There are then $2^3=8$ subsets of $A=\{1,2,3\}$ and their images under $F$ are as follows:
   $$
   \begin{array}{c|c}
   X & F(X)=f(X)\\\hline
   \varnothing & \varnothing\\
   \{1\} & \{a\}\\
   \{2\} & \{a\}\\
   \{3\} & \{b\}\\
   \{1,2\} & \{a\}\\
   \{1,3\} & \{a,b\}\\
   \{2,3\} & \{a,b\}\\
   \{1,2,3\} & \{a,b\}
   \end{array}
   $$

> [!proof]
> *Proof.*
>
> **(b)** Is $F$ injective for this $f$? No, because for example $\{1\}\neq\{2\}$ but
> $$
> F(\{1\})= \{a\}=F(\{2\}),
> $$
> thus two different inputs have the same image and therefore $F$ is not injective.
>
> **(c)** If $f$ is injective, then $F$ is injective.
>
> Assume $f$ is injective and let $X,Y\subseteq A$ and suppose
> $$
> F(X)=F(Y), \quad \text{that is } f(X)=f(Y).
> $$
> Now we will show $X=Y$. Take any $x\in X$. Then $f(x)\in f(X)=f(Y)$, so there exists $y\in Y$ with $f(x)=f(y)$. By injectivity of $f$ this yields $x=y\in Y$, hence $X\subseteq Y$. Reversing the roles of $X$ and $Y$ gives $Y\subseteq X$. Thus $X=Y$.
>
> **(d)** If $F$ is surjective, then $f$ is surjective.
>
> Assume $F$ is surjective and let $b\in B$. Then $\{b\}\in\mathcal P(B)$, so there exists $X\subseteq A$ with
> $$
> F(X)=f(X)=\{b\}.
> $$
> Since $X\neq\varnothing$, pick $x\in X$. Then $f(x)\in\{b\}$, hence $f(x)=b$. Thus every $b\in B$ has a preimage, so $f$ is surjective. ◻
3. Question 3.

> [!proof] Proof
> 
> In order to prove there is no interger $a$ such that $a\equiv 3 \pmod{8}$ and $a\equiv 5 \pmod{12}$ we will opt to use proof by contradiction, so begin by assuming there exists some integer $a$ that satisfies both of these congruences
>
> $$
> a\equiv 3 \pmod{8}
> \qquad\text{and}\qquad
> a\equiv 5 \pmod{12}.
> $$
> Then there must exist integers $k$ and $m$ such that
> $$
> a=8k+3 \qquad\text{and}\qquad a=12m+5.
> $$
> Then creating the following equality and manipulating we find
> $$
> 8k+3=12m+5,
> $$
> $$
> 8k=12m+2,
> $$
> $$
> 4k=6m+1.
> $$
> We can see that the left-hand side $4k$ is indeed even, whereas the right-hand side $6m+1$ is odd. Thus we have reached a contradiction therefore showing no integer $a$ can satisfy both congruences simultaneously and that no such $a$ exists. ◻

4. Question 4.

> [!proof] Proof
> 
> Let $x_0,x_1,\dots,x_{10}\in[0,5]$. If there exist $i\neq j$ with $|x_i-x_j|\le\tfrac12$ we are done. Now, suppose for contradiction that
> $$
> |x_i-x_j|>\tfrac12\qquad\text{for all }i\neq j.
> $$
> In particular all the eleven numbers are distinct, so arranging them in increasing order and relabeling we find:
> $$
> y_0<y_1<\cdots<y_{10},
> $$
> where $\{y_0,\dots,y_{10}\}=\{x_0,\dots,x_{10}\}$.
>
> Now, because every pair of distinct $y_k$ differs by more than $\tfrac12$, each consecutive gap satisfies
> $$
> y_{k+1}-y_k > \tfrac12\qquad\text{for }k=0,1,\dots,9.
> $$
> Thus, summing these ten strict inequalities yields
> $$
> y_{10}-y_0=\sum_{k=0}^{9}(y_{k+1}-y_k) > 10\cdot \tfrac12 = 5.
> $$
> However, $y_0,y_{10}\in[0,5]$, so $y_{10}-y_0\le 5$. Therefore, contradicting the inequality $y_{10}-y_0>5$.
>
> Thus our assumption was false, and there must exist indices $i\neq j$ with $|x_i-x_j|\le\tfrac12$. ◻

5. Question 5.

> [!proof] Proof
> 
> In order to show that the equation $5y^2-4x^2=7$ has no integer solutions we will again opt for proof by contradiction, so assume for contradiction, that there exist integers $x$ and $y$ satisfying
> $$
> 5y^2 - 4x^2 = 7.
> $$
>
> Now transforming this equation into modulo $4$ we see,
> $$
> 5y^2 - 4x^2 \equiv 7 \pmod{4}.
> $$
>
> Then, since $4x^2 \equiv 0 \pmod{4}$ for every integer $x$, the equation simplifies as follows,
> $$
> 5y^2 \equiv 7 \pmod{4}.
> $$
>
> Now, because $5 \equiv 1 \pmod{4}$, we have
> $$
> y^2 \equiv 3 \pmod{4}.
> $$
>
> Then, examining all possible values of $y^2$ modulo $4$. For $y \equiv 0,1,2,3 \pmod{4}$, we see the following:
> $$
> \begin{aligned}
> y \equiv 0 \pmod{4} &\;\Rightarrow\; y^2 \equiv 0 \pmod{4},\\
> y \equiv 1 \pmod{4} &\;\Rightarrow\; y^2 \equiv 1 \pmod{4},\\
> y \equiv 2 \pmod{4} &\;\Rightarrow\; y^2 \equiv 0 \pmod{4},\\
> y \equiv 3 \pmod{4} &\;\Rightarrow\; y^2 \equiv 1 \pmod{4}.
> \end{aligned}
> $$
>
> Therefore, $y^2$ can only be congruent to $0$ or $1 \pmod{4}$ but never congruent to $3 \pmod{4}$, yet for our equation to indeed hold it requires:
> $$
> y^2 \equiv 3 \pmod{4}.
> $$
>
> Thus we have reached a contradiction and the equation:
> $$
> 5y^2 - 4x^2 = 7
> $$
> has no integer solutions. ◻

6. Question 6.

> [!proof] Proof
> 
> In order to show that the sum $\sqrt3 + \sqrt43$ has no integer solutions we will again use proof by contradiction, so assume for contradiction, that
> $$
> r=\sqrt{3}+\sqrt{43}
> $$
> is rational. Now, simplifying we find:
> $$
> \sqrt{43}=r-\sqrt{3},
> $$
> $$
> 43 = (r-\sqrt{3})^2 = r^2 - 2r\sqrt{3} + 3,
> $$
> $$
> r^2 - 40 = 2r\sqrt{3},
> $$
> Now, since $r$ is rational, the left-hand side $r^2-40$ is rational, and so the quotient
> $$
> \sqrt{3} = \frac{r^2-40}{2r}
> $$
> is rational. Thus contradicting the fact that $\sqrt{3}$ is irrational. Thus our assumption was false, and $\sqrt{3}+\sqrt{43}$ is indeed irrational. ◻

7. Question 7.

> [!proof] Proof
> 
> In order to show the function $g:A\to B$ defined by
> $$
> g(x)=
> \begin{cases}
> x, & x\in A\cap B,\\[4pt]
> f(x), & x\in A\setminus B.
> \end{cases}
> $$
>
> is bijective, we will verify both its injectivity and surjectivity as follows.
>
> Firstly, suppose $g(x)=g(y)$ for $x,y\in A$. Now analyzing the cases we find:
>
> 1. If $x,y\in A\cap B$ then $g(x)=x$ and $g(y)=y$, so $x=y$.
>
> 2. If $x\in A\cap B$ and $y\in A\setminus B$, then $g(x)=x\in A\cap B$ while $g(y)=f(y)\in B\setminus A$. These cannot be equal, thus we have reached a contradiction.
>
> 3. If $x,y\in A\setminus B$ then $g(x)=f(x)$ and $g(y)=f(y)$. Since $f$ is injective on $A\setminus B$, $f(x)=f(y)$ implies $x=y$.
>
> Thus in every case we obtain $x=y$, so indeed $g$ is injective.
>
> Now, verifying surjectivity let $b\in B$.
>
> 4. If $b\in A\cap B$ then $g(b)=b$ so $b$ has a preimage.
>
> 5. If $b\in B\setminus A$ then, because $f$ is surjective onto $B\setminus A$, there exists $a\in A\setminus B$ with $f(a)=b$, and then $g(a)=f(a)=b$.
>
> Thus every element of $B$ has a preimage under $g$, so $g$ is surjective, and thus we have shown the function $g$ is a bijection. ◻