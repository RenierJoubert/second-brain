#math #math220 #proof 

## Solutions to homework 5

### 1. We define the sequence $(u_n)_{n\ge 0}$ by
$$
u_0 = 2, \qquad u_{n+1} = \frac{2 + u_n}{1 + u_n}.
$$

---

**(a)** Compute $u_1, u_2, u_3$.

> [!proof]
> We can directly compute $u_1, u_2, u_3$ as follows
>
> $$
> u_1 = \frac{2 + u_0}{1 + u_0} = \frac{2 + 2}{1 + 2} = \frac{4}{3}.
> $$
>
> $$
> u_2 = \frac{2 + u_1}{1 + u_1}
> = \frac{2 + \frac{4}{3}}{1 + \frac{4}{3}}
> = \frac{\frac{10}{3}}{\frac{7}{3}} = \frac{10}{7}.
> $$
>
> $$
> u_3 = \frac{2 + u_2}{1 + u_2}
> = \frac{2 + \frac{10}{7}}{1 + \frac{10}{7}}
> = \frac{\frac{24}{7}}{\frac{17}{7}} = \frac{24}{17}.
> $$
> ◻

---

**(b)** Prove that for all $n \ge 0$, $1 \le u_n \le 2$.

> [!proof] Proof
> 
> We will prove this through proof by induction, 
> 
> Let $u_0 = 2$ be our base case, so $1 \le u_0 \le 2$ holds.
>
> Then fore our inductive step assume $1 \le u_n \le 2$. Then
> $$
> u_{n+1} = \frac{2 + u_n}{1 + u_n}.
> $$
>
> Since $u_n \ge 1$,
> $$
> u_{n+1} \le \frac{2 + 2}{1 + 1} = 2.
> $$
>
> Since $u_n \le 2$,
> $$
> u_{n+1} \ge \frac{2 + 1}{1 + 2} = 1.
> $$
>
> Hence $1 \le u_{n+1} \le 2$.
>
> By induction, the result holds for all $n$. ◻

---

### 2. Prove that for all $n \in \mathbb N$,
$$
\sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2.
$$

> [!proof] Proof
> 
>We will prove this result by induction
> Let $n=1$ be our base case, we observe that it holds:
> $$
> 1^3 = 1 = \left(\frac{1\cdot 2}{2}\right)^2.
> $$
>
> Then for our inductive step assume
> $$
> \sum_{k=1}^n k^3 = \left(\frac{n(n+1)}{2}\right)^2.
> $$
>
> Then
> $$
> \sum_{k=1}^{n+1} k^3 = \left(\frac{n(n+1)}{2}\right)^2 + (n+1)^3.
> $$
>
> Factoring out $(n+1)^2$ yields:
> $$
> = (n+1)^2\left(\frac{n^2}{4} + (n+1)\right)
> = (n+1)^2 \frac{(n+2)^2}{4}.
> $$
>
> Thus
> $$
> \sum_{k=1}^{n+1} k^3 = \left(\frac{(n+1)(n+2)}{2}\right)^2.
> $$
>
> So the result holds. ◻

---

### 3. Let
$$
S_n = \sum_{i=1}^n \frac{1}{i^2}.
$$

Prove that
$$
S_n \le 2 - \frac{1}{n}.
$$

> [!proof] Proof
> 
>We will again prove this through proof by induction,
> so, choose the base case $n=1$:
> $$
> S_1 = 1 \le 2 - 1 = 1.
> $$
>
> Then for the inductive step assume
> $$
> S_n \le 2 - \frac{1}{n}.
> $$
>
> Then we have that:
> $$
> S_{n+1} = S_n + \frac{1}{(n+1)^2}
> \le 2 - \frac{1}{n} + \frac{1}{(n+1)^2}.
> $$
>
> Now it's clear that
> $$
> \frac{1}{(n+1)^2} \le \frac{1}{n} - \frac{1}{n+1},
> $$
> as 
> $$
> \frac{1}{(n+1)^2} \le \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1},
> $$
> because $(n+1)(n+1)> n(n+1)$.
> Hence we have
> $$
> S_{n+1} \le 2 - \frac{1}{n+1},
> $$
>
> and the result holds. ◻

---

### 4. Let
$$
u_n = 3\cdot 5^{2n+1} + 2^{3n+1}.
$$

---

**(a)** Compute $u_{n+1} - \frac{5}{2}u_n$.

> [!proof]
> 
>We see that $u_{n+1}$ is as follows:
> $$
> u_{n+1} = 3\cdot 5^{2n+3} + 2^{3n+4}.
> $$
>And $\frac{5}{2}u_n$ is as follows:
> $$
> \frac{5}{2}u_n = \frac{5}{2}(3\cdot 5^{2n+1} + 2^{3n+1})
> = \frac{15}{2}5^{2n+1} + \frac{5}{2}2^{3n+1}.
> $$
>
> Thus the difference of these two terms can be written as follows:
> $$
> u_{n+1} - \frac{5}{2}u_n = 17 \cdot 2^{3n}.
> $$
> ◻

---

**(b)** Prove that $17 \mid u_n$ for all $n \ge 0$.

> [!proof] Proof
> 
> We can prove this using proof by induction, first let out base case be 
> $u_0 = 3\cdot 5 + 2 = 17$, which we notice is divisible by 17.
>
> Then, for our inductive step assume $17 \mid u_n$. From part (a),
> $$
> u_{n+1} = \frac{5}{2}u_n + 17\cdot 2^{3n}.
> $$
>
> We can clearly see both terms are divisible by 17, hence $17 \mid u_{n+1}$ and the result holds. ◻

---

### 5. Prove that $2^{n^2} > n!$ for all $n \in \mathbb N$.

> [!proof]
> Using proof by induction we choose the base case
> $n=1$, such that $2^1 = 2 > 1! = 1$.
>
> Now, assume $2^{n^2} > n!$. Then it follows that
> $$
> 2^{(n+1)^2} = 2^{n^2 + 2n +1} = 2^{n^2}\cdot 2^{2n+1}.
> $$
>
> Using the inductive hypothesis we see that:
> $$
> 2^{(n+1)^2} > n!\cdot 2^{2n+1}.
> $$
>
> Then, since $2^{2n+1} > n+1$ for all $n \ge 1$, we get the result that
> $$
> 2^{(n+1)^2} > (n+1)!.
> $$
>
> Thus because the equality $2^{n^2} > n!$ holds for our base case $n$ and $n+1$ by induction we have that it holds for all $n$ and the proof is complete. ◻

---

### 6. Let $n \in \mathbb N$ and suppose that  
$$  
a_0 = 1, \qquad a_1 = 3, \qquad a_2 = 12,  
$$  
and  
$$  
a_n = 2a_{n-1} + a_{n-2} + a_{n-3}  
\qquad \text{for } n \ge 3.  
$$  
  
Show that  
$$  
2^n < a_n < 4^n  
\qquad \text{for all } n \ge 1.  
$$  
  
> [!proof]  Proof
> 
> We will prove this using strong induction on $n$.  
>  
> The recurrence for $a_n$ depends on the three previous terms, namely $a_{n-1}$, $a_{n-2}$, and $a_{n-3}$. Because of this, ordinary induction is not the most natural choice here. In the inductive step, we will need the bounds for several earlier terms at once, so strong induction is the right method.  
>  
> We want to prove that for every integer $n\ge 1$,  
> $$  
> 2^n < a_n < 4^n.  
> $$  
>  
>First checking our base cases directly we see: 
>  
> For $n=1$,  
> $$  
> a_1 = 3.  
> $$  
> Since  
> $$  
> 2^1 = 2 < 3 < 4 = 4^1,  
> $$  
> the inequality holds.  
>  
> For $n=2$,  
> $$  
> a_2 = 12.  
> $$  
> Since  
> $$  
> 2^2 = 4 < 12 < 16 = 4^2,  
> $$  
> the inequality holds.  
>  
> We also compute $a_3$, since the recurrence begins at $n=3$:  
> $$  
> a_3 = 2a_2 + a_1 + a_0 = 2(12) + 3 + 1 = 28.  
> $$  
> Then  
> $$  
> 2^3 = 8 < 28 < 64 = 4^3.  
> $$  
> So the statement also holds for $n=3$.  
>  
> Now for the inductive hypothesis assume that for some integer $n\ge 3$, the inequalities  
> $$  
> 2^k < a_k < 4^k  
> $$  
> hold for every integer $k$ with  
> $$  
> 1 \le k \le n.  
> $$  
>  
> Therefore, we must show that  
> $$  
> 2^{n+1} < a_{n+1} < 4^{n+1}.  
> $$  
>  
> Using the recurrence relation,  
> $$  
> a_{n+1} = 2a_n + a_{n-1} + a_{n-2}.  
> $$  
>  
> Now we prove the lower and upper bounds separately as follows:
>  
> Firstly, by the inductive hypothesis  we observe the lower bound such that:
> $$  
> a_n > 2^n, \qquad a_{n-1} > 2^{n-1}, \qquad a_{n-2} > 2^{n-2},  
> $$  
> Then substituting these into the recurrence gives  
> $$  
> a_{n+1} = 2a_n + a_{n-1} + a_{n-2}  
> > 2\cdot 2^n + 2^{n-1} + 2^{n-2}.  
> $$  
> Simplifying the RHS we see:
> $$  
> 2\cdot 2^n = 2^{n+1},  
> $$  
> thus
> $$  
> a_{n+1} > 2^{n+1} + 2^{n-1} + 2^{n-2}.  
> $$  
> Since $2^{n-1} + 2^{n-2} > 0$, we then have  
> $$  
> a_{n+1} > 2^{n+1}.  
> $$  
> Thus proving the lower bound.  
>  
> Now, for the upper bound, again by the inductive hypothesis we see that:
> $$  
> a_n < 4^n, \qquad a_{n-1} < 4^{n-1}, \qquad a_{n-2} < 4^{n-2}.  
> $$  
> Therefore  
> $$  
> a_{n+1}  
> = 2a_n + a_{n-1} + a_{n-2}  
> < 2\cdot 4^n + 4^{n-1} + 4^{n-2}.  
> $$  
> Now factoring out $4^{n-2}$ we find:
> $$  
> 2\cdot 4^n + 4^{n-1} + 4^{n-2}  
> = 4^{n-2}(2\cdot 4^2 + 4 + 1)  
> = 4^{n-2}(32+4+1)  
> = 37\cdot 4^{n-2}.  
> $$  
> We want to compare this with $4^{n+1}$. Note that  
> $$  
> 4^{n+1} = 4^{n-2}\cdot 4^3 = 64\cdot 4^{n-2}.  
> $$  
> Since $37<64$, it follows that  
> $$  
> 37\cdot 4^{n-2} < 64\cdot 4^{n-2} = 4^{n+1}.  
> $$  
> Hence  
> $$  
> a_{n+1} < 4^{n+1}.  
> $$  
>  
> Combining the lower and upper bounds, we obtain  
> $$  
> 2^{n+1} < a_{n+1} < 4^{n+1}.  
> $$  
>  
> Thus the statement holds for $n+1$, and by strong induction, for every integer $n\ge 1$,  we have shown:
> $$  
> 2^n < a_n < 4^n.  
> $$  
> ◻  
  
---  
  
### 7. Show by strong induction that for every $n \in \mathbb N$, there exists $k \in \mathbb Z$, $k \ge 0$, such that  
$$  
2^k \mid n  
\qquad \text{and} \qquad  
\frac{n}{2^k} \text{ is odd.}  
$$  
  
> [!proof]  Proof
> 
> We will prove this using strong induction on $n$.  
>  
> The statement states that every natural number can be written in the form  
> $$  
> n = 2^k m,  
> $$  
> where $k\ge 0$ and $m$ is odd. Meaning that we can factor out all powers of $2$ from $n$ until what remains is odd. 
>  
> For our base case, let $n=1$, then we choose  
> $$  
> k=0.  
> $$  
> Such that
> $$  
> 2^0 = 1 \mid 1,  
> $$  
> and  
> $$  
> \frac{1}{2^0} = 1,  
> $$  
> which is odd, thus the statement holds for $n=1$.  
>  
> Now assume that for some $n \in \mathbb N$, the statement holds for every natural number $m$ with  
> $$  
> 1 \le m \le n.  
> $$  
> That is, for each such $m$, there exists an integer $k\ge 0$ such that  
> $$  
> 2^k \mid m  
> \qquad \text{and} \qquad  
> \frac{m}{2^k} \text{ is odd.}  
> $$  
>  
> We must now show that the statement also holds for $n+1$.  
>  
> There are then two possible cases:
>  
> **Case 1: $n+1$ is odd.**  
> In this case we may simply choose  
> $$  
> k=0.  
> $$  
> Then  
> $$  
> 2^0 = 1 \mid (n+1),  
> $$  
> and  
> $$  
> \frac{n+1}{2^0} = n+1,  
> $$  
> which is odd by assumption. So the statement holds in this case.  
>  
> **Case 2: $n+1$ is even.**  
> Since $n+1$ is even, there exists a natural number $m$ such that  
> $$  
> n+1 = 2m.  
> $$  
> Because $n+1 \ge 2$, this gives  
> $$  
> m = \frac{n+1}{2},  
> $$  
> and clearly $m < n+1$. In fact $m \le n$, so the inductive hypothesis applies to $m$.  
>  
> Therefore there exists some integer $r\ge 0$ such that  
> $$  
> 2^r \mid m  
> \qquad \text{and} \qquad  
> \frac{m}{2^r} \text{ is odd.}  
> $$  
> Since $2^r \mid m$, we may write  
> $$  
> m = 2^r q  
> $$  
> for some integer $q$, and by the inductive hypothesis $q$ is odd.  
>  
> Now substitute this into $n+1 = 2m$:  
> $$  
> n+1 = 2m = 2(2^r q) = 2^{r+1}q.  
> $$  
> Hence  
> $$  
> 2^{r+1} \mid (n+1),  
> $$  
> and  
> $$  
> \frac{n+1}{2^{r+1}} = q,  
> $$  
> which is odd.  
>  
> So in this case the statement also holds, with  
> $$  
> k = r+1.  
> $$  
>  
> Since both cases work, the statement holds for $n+1$.  
>  
> By strong induction, for every $n \in \mathbb N$, there exists an integer $k\ge 0$ such that  
> $$  
> 2^k \mid n  
> \qquad \text{and} \qquad  
> \frac{n}{2^k} \text{ is odd.}  
> $$  
> ◻
