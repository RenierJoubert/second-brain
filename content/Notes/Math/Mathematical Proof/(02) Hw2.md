#math #math220 #proof
## Solutions to homework 2

1. Question 1.


> [!proof] Proof
> 
> Let $a,b \in \mathbb Z$, then in order to prove that if
> $ab$ is odd $a,b$ necessarily must both be odd we will choose to
> prove the contrapositive, that is:
> $$
> P \implies Q \quad \equiv \quad \sim Q \implies \sim P.
> $$
> Now given we have
> $$
> \begin{aligned}
> P: \quad &\text{$ab$ is odd} \\
> Q: \quad &\text{$a$ and $b$ are both odd},
> \end{aligned}
> $$
> it follows that
> $$
> \begin{aligned}
> \sim P: \quad &\text{$ab$ is even} \\
> \sim Q: \quad &\text{$a$ and $b$ are not both odd}.
> \end{aligned}
> $$
> So, to begin our proof let us first assume $a$ is even such that it can be expressed as $a=2k$ for $k\in\mathbb Z$, and further let us then suppose that $b$ is odd such that it can be expressed as $b=2\ell + 1$.
>
> Now, substituting in these values for $a,b$ into $ab$ we find
> $$
> ab = 2k(2\ell+1),
> $$
> in which it is clear $ab$ is in fact even as it expressed as a multiple of 2. Therefore, since we have demonstrated the contrapositive statement is true, indeed the original statement must then also be true. ◻

2. Question 2.

> [!proof] Proof
> 
> To prove that if $a\in\mathbb Z$ then $4 \nmid a^2 -3$ we will use proof by contradiction, that is we will begin by instead assuming $4\mid a^2 -3$ such that $a^2 -3$ can be expressed as follows:
> $$
> a^2-3 =4k \qquad \text{for $k\in\mathbb Z$}.
> $$
> Now, given we have $a\in\mathbb Z$ it follows that $a$ must necessarily either be even or odd, for instance if $a$ is even we know it can be expressed as $a=2n$ for $n\in\mathbb Z$. Then, substituting this into equation (7) we find:
>
> $$
> \begin{aligned}
> 4n^2 -3 & = 4k \\
> n^2 - \frac{3}{4} & = k.
> \end{aligned}
> $$
>
> However, this leads us to a contradiction as it is clear
> $$
> \left(n^2 -\frac{3}{4}\right) \notin \mathbb Z.
> $$
> Nevertheless, there is still the case for which odd $a$ might suffice for $4\mid a^2 -3$ to hold true, but we can confirm this for if $a$ is odd it can be written as:
> $$
> a = 2m+1 \qquad \text{for $m\in\mathbb Z$}.
> $$
> Now, again substituting this into equation (7) we find:
> $$
> \begin{aligned}
> 4m^2 +4m +1 -3 & = 4k, \\
> m^2 + m - \frac{1}{2} & = k.
> \end{aligned}
> $$
> Similarly, we reach the contradiction such that again
> $$
> m^2 +m -\frac{1}{2} \notin \mathbb Z.
> $$
> Therefore, given we have demonstrated there is no $a\in\mathbb Z$ for which $4\mid a^2 -3$ holds true within the domain of $\mathbb Z$, it then must be true that for all $a\in\mathbb Z$ we have that $4\nmid a^2 -3$. ◻

3. Question 3.

> [!proof] Proof
> 
> Let $x\in\mathbb R^+$, then to prove that if $\frac{2x-1}{x}>1$, then $x>1$ let us first manipulate the following inequality:
>
> $$
> \frac{2x-1}{x}>1 \iff 2x -\frac{1}{x}-1 >0
> $$
> Now, given we have $x\in\mathbb R^+$ we can first multiply both sides of our inequality by $x$ without flipping the sign, and then factor the resulting quadratic to find:
> $$
> \begin{aligned}
> 2x^2-x-1 & >0,\\
> (2x+1)(x-1) & >0.
> \end{aligned}
> $$
> Now to study the difference, let us first notice that the $(2x+1)$ term is strictly positive and will not influence the sign of the product as $x\in\mathbb R^+$. Therefore, in order for $(2x+1)(x-1)>0$ indeed $x>1$, and thus the original statement holds true such that:
> $$
> \frac{2x-1}{x}>1 \implies x>1 
> $$

4. Question 4.

> [!proof] Proof
> 
> Let $x\in\mathbb R$, then in order to prove that $x^2 + |x-6| > 5$ we will do so by case analysis as follows:
>
> $$
> \begin{aligned}
> \text{1. If} & \quad x\geq 6 \quad \text{then we have that,} \quad |x-6| = x-6, \\
> \text{2. If} & \quad x< 6 \quad \text{then we have that,} \quad |x-6| = 6 -x.
> \end{aligned}
> $$
>
> So for our first $x\geq6$ case we observe:
> $$
> x^2 + x -6 >5 \implies x^2 + x - 11 >0.
> $$
> Now, given we have that $x\geq6$ we can conclude $x^2 + x -11 >0$. Therefore we can conclude $x^2+x-6>5$ for $x\geq 6$.
>
> Then, for our second $x<6$ case we observe:
> $$
> x^2 -x + 6>5 \implies x^2 -x + 1 >0 \implies \left(x-\frac{1}{2}\right)^2+\frac{3}{4}>0.
> $$
>
> To which we can observe that $\left(x-\frac{1}{2}\right)^2>0$ for all $x<6$, and therefore we can again conclude that $x^2-x+6>5$ for $x<6$.
>
> Thus we have shown that for all $x\in\mathbb R$, $x^2 + |x-6|>5$ holds true. ◻

5. Question 5.

> [!proof] Proof
> 
> Let $n \in \mathbb Z$, then in order to prove that if 5 is not a factor of $(n^2-1)(n^2-4)$ then $5\mid n$, we will use the contrapositive, that is:
> $$
> P \implies Q \quad \equiv \quad \sim Q \implies \sim P.
> $$
> Now given we have
> $$
> \begin{aligned}
> P: \quad &\text{$5\nmid (n^2-1)(n^2-4)$} \\
> Q: \quad &\text{$5\mid n$},
> \end{aligned}
> $$
> it follows that
> $$
> \begin{aligned}
> \sim P: \quad &\text{$5\mid (n^2-1)(n^2-4)$} \\
> \sim Q: \quad &\text{$5\nmid n$}.
> \end{aligned}
> $$
> So, to begin our proof let us first assume $5\nmid n$ such that by the division algorithm $n$ can be expressed as follows:
> $$
> n = 5q + r \quad \text{where $q,r \in\mathbb Z$}
> $$
> Where $r$ then necessarily is as follows:
> $$
> r \in \left\{ 1,2,3,4 \right\}
> $$
> Now, for $5\mid (n^2-1)(n^2-4)$ to hold true it also follows that:
> $$
> 5\mid (n-1)(n+1)(n-2)(n+2).
> $$
> Then, in order to verify that this does indeed hold true let us refer to equation (28) and check our 4 possible values of $r$ as follows:
> $$
> \begin{aligned}
> \text{1. if $r=1$} & \implies n-1=5q \implies 5\mid (n-1), \\
> \text{2. if $r=2$} & \implies n-2=5q \implies 5\mid (n-2), \\
> \text{3. if $r=3$} & \implies n +2 = 5(q+1) \implies 5\mid (n+2), \\
> \text{4. if $r=4$} & \implies n +1 =5(q+1) \implies 5\mid (n+1.)
> \end{aligned}
> $$
> Therefore, for any possible $r$ we might choose the product $(n^2-1)(n^2-4)$ will be divisible by $5$, given that $5\nmid n$.
>
> Ultimately, by proving the contrapositive $\sim Q \implies \sim P$, such that:
> $$
> 5\nmid n \implies 5\mid (n^2-1)(n^2-4).
> $$
> The original statement must then be true and indeed if $5\nmid (n^2-1)(n^2-4)$ then necessarily $5\mid n$. ◻

6. Question 6.

> [!proof] Proof
> 
> Let $x,y \in\mathbb Z$, then to prove $3\nmid (x^3+y^3)\iff 3\nmid (x+y)$ we will seek to instead prove $3\mid (x^3+y^3) \iff 3\mid (x+y)$ as:
> $$
> P\iff Q \quad \equiv \quad \sim P \implies \sim Q.
> $$
> To do this we will prove both cases such that:
> $$
> \begin{aligned}
> \text{1.}\quad & \sim Q \implies \sim P \\
> \text{2.}\quad & \sim P \implies \sim Q.
> \end{aligned}
> $$
> For our first case we will assume that $3\mid (x+y)$ such that:
> $$
> (x+y) = 3k \qquad \text{for $k\in\mathbb Z$}.
> $$
> Then, noticing our $(x^3+y^3)$ term can be factored as $(x+y)(x^2-xy+y^2)$ let us then substitute in our equation (39) to find:
> $$
> (x^3+y^3) = 3k(x^2-xy+y^2) \qquad \text{for $k\in\mathbb Z$}.
> $$
> And thus by Euclidean division we can see that indeed if $3\mid (x+y)$, then it follows that $3\mid (x^3+y^3)$. And therefore we have shown:
>
> $$
> 3\mid (x+y) \implies 3 \mid (x^3+y^3).
> $$
>
> However, our second case proves to be a little bit more involved, such that if we want to show:
> $$
> 3\mid (x^3+y^3) \implies 3\mid (x+y),
> $$
> let us first rewrite our $(x^3+y^3)$ once more as follows:
> $$
> \begin{aligned}
> (x^3+y^3) & = (x+y)^3-3xy(x+y) \\
>           & = (x+y)\left((x+y)^2 -3xy\right).
> \end{aligned}
> $$
> Now, for sake of contradiction, suppose that $3\nmid (x+y)$, and since we assume:
> $$
> 3\mid (x+y)\left((x+y)^2 -3xy\right),
> $$
> it then must be true that if $3\nmid (x+y)$ then our other term $\left((x+y)^2 -3xy\right)$ must be divisible by $3$. However, we can see that $-3xy$ is already a multiple of $3$, and therefore
> $$
> (x+y)^2 \equiv 0 \mod3 \quad \text{if\quad $3\mid \left((x+y)^2 -3xy\right)$}.
> $$
> But then we reach a contradiction, for if $(x+y)^2$ is divisible by 3 with no remainder then so must $(x+y)$. And thus we have shown indeed that:
> $$
> 3\mid (x^3+y^3) \implies 3 \mid (x+y).
> $$
> Finally, given we have demonstrated $\sim P \iff \sim Q$, the original statement must then also hold true such that $3\nmid (x^3 + y^3)$ if and only if $3\nmid (x+y)$. ◻

7. Question 7.

> [!proof] Proof
> 
> Let $a,b,k \in \mathbb Z$ and assume $a,b$ are not both zero, then by using Bézout's identity and the contrapositive, we will prove that if $$k\nmid \text{gcd($a,b$)}$$, then $k\nmid a$ or $k\nmid b$. That is to say, we have that:
> $$
> \begin{aligned}
> P: & \quad k \nmid \text{gcd($a,b$)}\\
> Q: & \quad k \nmid a \quad \lor \quad k \nmid b.
> \end{aligned}
> $$
> Therefore, to prove the contrapositive we must demonstrate $\sim Q \implies \sim P$ where in:
> $$
> \begin{aligned}
> \sim Q: & \quad k \mid a \quad \land \quad k \mid b \\
> \sim P: & \quad k \mid\text{gcd$(a,b)$}.
> \end{aligned}
> $$
> Now, given Bézout's identity we know that $\exists x,y \in\mathbb Z$ such that $$ax +by=\text{gcd$(a,b)$}$$. However, first let us assume $k \mid a \quad \land \quad k \mid b$ such that $a,b$ can be expressed as integer multiples of $k$ as follows:
>
> $$
> \begin{aligned}
> a & = nk \qquad \text{for $n\in\mathbb Z$} \\
> b & = mk \qquad \text{for $m\in\mathbb Z$}.
> \end{aligned}
> $$
> Then, using Bézout's identity let us rewrite $$k \mid\text{gcd$(a,b)$}$$ as follows:
> $$
> k \mid ax+by.
> $$
> Now, substituting in our values for $a,b$ from equations (52, 53) we find:
> $$
> \begin{aligned}
> k & \mid nkx + mkx, \\
> k & \mid k(nx + mx).
> \end{aligned}
> $$
> Therefore by Euclidean division we have shown that $$k \mid \text{gcd$(a,b)$}$$, and indeed that the contrapositive holds true, thus the original statement:
> $$
> k\nmid \text{gcd$(a,b)$} \implies k\nmid a \quad \lor \quad k \nmid b,
> $$
> also holds true. ◻
   
   