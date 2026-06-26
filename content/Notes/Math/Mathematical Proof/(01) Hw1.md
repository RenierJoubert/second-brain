#math #math220 #proof
## Solutions to homework 1

1. Question 1
  
> [!proof]  Proof
> 
>  
> 1. The statement "2 is even and 11 is prime" is true and can be written in the form:  
> $$  
> P \land Q  
> $$  
> $$  
> \text{Where P: ``2 is even'' and Q: ``11 is prime''}  
> $$  
>  
> 2. The statement "If $n$ is a multiple of 7 and 4, then it is a multiple of 14" is true and can be written in the form:  
> $$  
> (P \land Q) \implies R  
> $$  
> $$  
> \text{Where P: ``If $n$ is a multiple of 7'', Q: ``if $n$ is a multiple of 4'', R: ``$n$ is a multiple of 14''}  
> $$  
>  
> 3. The open sentence "$5 \leq x \leq 17$" can be written in the form:  
> $$  
> P(x) \land Q(x)  
> $$  
> $$  
> \text{Where P: $x \geq 5$, and Q: $x \leq 17$}  
> $$  
>  
> 4. The statement "A real number $x$ is less than -3 or greater than 3 if its square is greater than 9" can be written in the form  
> $$  
> R \iff (P \lor R)  
> $$  
> $$  
> \text{Where R: The square of $x$ is $> 9$, P: $x < -3$, and Q: $x > 3$}  
> $$  
  
2. Question 2.  
  
> [!proof]  
> *Proof.* Given we have $a \in \mathbb{Z}$. Further, assuming $5a + 11$ is odd, then to prove $9a + 3$ is also odd, let us first express $5a + 11$ as follows  
> $$  
> 5a + 11 = 2k + 1 \qquad \text{Where $k \in \mathbb{Z}$}  
> $$  
> Then, notice $9a + 3$ can be written with the following difference:  
> $$  
> 9a + 3 = 5a + 11 + (4a - 8)  
> $$  
> Substituting $5a + 11 = 2k + 1$ where $k \in \mathbb{Z}$ we find  
> $$  
> \begin{aligned}  
> 9a + 3 &= 2k + 1 + 4a - 8 \\  
> &= 2k + 4a - 7 \\  
> &= 2(k + 2a - 4) + 1  
> \end{aligned}  
> $$  
> Now, because it holds that $(k + 2a - 4) \in \mathbb{Z}$ it is clear $2(k + 2a - 4) + 1$ is odd, and thus $9a + 3$ is also odd. ◻  
  
3. Question 3.  
  
> [!proof]  
> *Proof.* Given we have $n \in \mathbb{Z}$ and assuming that $3 \mid n - 2$ in order to then prove $3 \nmid n^2 + 2n + 8$ let us first observe that $n - 2$ can be written as an integer multiple of 3 such that  
> $$  
> \begin{aligned}  
> n - 2 &= 3k \qquad \text{where $k \in \mathbb{Z}$} \\  
> n &= 3k + 2 \qquad \text{where $k \in \mathbb{Z}$}  
> \end{aligned}  
> $$  
> Now, substituting $n = 3k + 2$ into $n^2 + 2n + 8$ we find  
> $$  
> (3k + 2)^2 + 2(3k + 2) + 8  
> $$  
> $$  
> 9k^2 + 18k + 16  
> $$  
> Which can then be written as  
> $$  
> 3(3k^2 + 6k + 5) + 1  
> $$  
> Finally, given $(3k^2 + 6k + 5) \in \mathbb{Z}$ we can observe that  
> $$  
> 3 \nmid 3(3k^2 + 6k + 5) + 1 \qquad \text{as per the principes of division}  
> $$  
> And thus it holds that $3 \nmid n^2 + 2n + 8$. ◻  
  
4. Question 4.  
  
> [!proof]  Proof
> 
> Let $x, y \in \mathbb{R}$, then to show that $xy \leq \tfrac{1}{2}(x^2 + y^2)$ let us study the difference between these terms  
> $$  
> \tfrac{1}{2}(x^2 + y^2) - xy  
> $$  
> $$  
> \begin{aligned}  
> (x^2 + y^2) - 2xy &= x^2 - 2xy + y^2 \\  
> &= (x - y)^2  
> \end{aligned}  
> $$  
> And given that $(x - y)^2 \geq 0$ it follows that  
> $$  
> x^2 - 2xy + y^2 \geq 0  
> $$  
> $$  
> x^2 + y^2 \geq 2xy  
> $$  
> To which we see  
> $$  
> x^2 + y^2 \geq 2xy \iff xy \leq \tfrac{1}{2}(x^2 + y^2)  
> $$  
> And thus we have shown that for $x, y \in \mathbb{R}$, $xy \leq \tfrac{1}{2}(x^2 + y^2)$. ◻  

5.  Question 5

> [!proof]  
> *Proof.* Let $n, a, b, c, d \in \mathbb{Z}$ with $n > 0$, then assuming $n \mid a$ and $n \mid c$, in order to then prove $n \mid (ab + cd + ac)$ we can first recognize that $a$ and $c$ can be written as integer multiples of $n$ such that  
> $$  
> a = kn \qquad \text{where $k \in \mathbb{Z}$}  
> $$  
> $$  
> c = mn \qquad \text{where $m \in \mathbb{Z}$}  
> $$  
> Now substituting these terms into $(ab + cd + ac)$ we find  
> $$  
> \begin{aligned}  
> (ab + cd + ac) &= (bkn + dmn + kmn^2) \\  
> &= n(bk + dm + kmn)  
> \end{aligned}  
> $$  
> Thus we have shown $ab + cd + ac$ can be written as a multiple of $n$ and therefore $n \mid (ab + cd + ac)$ holds as per the principles of division. ◻  
  
6. Question 6.  
  
> [!proof]  
> *Proof.* Given $a \in \mathbb{Z}$ we want to prove that if $3a + 1$ is odd then $5a + 2$ is even, however, my friend's work is not correct as they state:  
> $$  
> a = \frac{2k}{3} \qquad \text{for all $k \in \mathbb{Z}$}  
> $$  
> However this equation does not generate $a \in \mathbb{Z}$ for all $k \in \mathbb{Z}$ so their proof does not hold.  
>  
> On the contrary, I would instead try to prove this statement by first similarly expressing $3a + 1$ as an odd integer such that  
>  
> $$  
> 3a + 1 = 2k + 1  
> $$  
>  
> Then I would write the term we want to show is even, $5a + 2$ in terms of $3a + 1$ such that  
> $$  
> 5a + 1 = (3a + 1) + 2a + 1  
> $$  
> Then substituting $3a + 1 = 2k + 1$ and using some algebraic manipulation we find that  
> $$  
> \begin{aligned}  
> 5a + 2 &= (2k + 1) + 2a + 1 \\  
> &= 2k + 2a + 2 \\  
> &= 2(k + a + 1)  
> \end{aligned}  
> $$  
> And thus I have shown that if $3a + 1$ is odd for $a \in \mathbb{Z}$ then $5a + 2$ must then be even as it can be expressed as a multiple of 2. ◻  
  
7. Question 7.  
  
> [!proof]  
> *Proof.* Given the supplied definition of *funky* numbers above, if we have some $a > 0$ and $b > 0$ that are *funky*, then so is their geometric average, that is $\sqrt{ab}$.  
>  
> For instance, assume that $a, b$ are *funky* such that they can be expressed as follows  
> $$  
> \begin{aligned}  
> a^k &= m \qquad \text{for k $\in \mathbb{N}$ and m $\in \mathbb{Z}$} \\  
> b^t &= n \qquad \text{for t $\in \mathbb{N}$ and n $\in \mathbb{Z}$}  
> \end{aligned}  
> $$  
> Now, let us express their geometric mean as follows  
> $$  
> \begin{aligned}  
> F &= \sqrt{ab} \\  
> &= (ab)^{\tfrac{1}{2}}  
> \end{aligned}  
> $$  
> Then raising both sides to the power of $2kt$ we obtain the following, and note $2kt \in \mathbb{N}$ so we are still working within the given constraints of *funky* numbers.  
> $$  
> \begin{aligned}  
> F^{2kt} &= (ab)^{kt} \\  
> &= a^{kt} b^{kt} \\  
> &= m^t n^k  
> \end{aligned}  
> $$  
> Finally, we have shown that $F^{2kt}$ can be expressed as an integer for we can observe that  
> $$  
> m^t n^k \in \mathbb{Z}  
> $$  
> Therefore we have shown that since $\sqrt{ab} = F$ and after raising $F$ to some $2kt \in \mathbb{N}$ we obtain some $m^t n^k \in \mathbb{Z}$, and thus $\sqrt{ab} \in \mathbb{R}$ by definition is *funky*. ◻
