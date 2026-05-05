#math #math340 #lp #proof #optimization

# Duality introduction:

Suppose we have some LP problem in it's *primal* (main) form
$$
\max \qquad c^Tx
$$
such that
$$
Ax \leq b, \quad x \geq 0
$$
Where
$$
c\in\mathbb R^n, x\in\mathbb R^n, b\in\mathbb R^m, A\in\mathbb R^{m\times n}, \text{and} \quad \lambda\in\mathbb R^m
$$

And $x,\lambda$ are the decision variables

There then always will exist a *dual* version of this LP, and is as follows:
$$
\min \quad b^T \lambda 
$$
such that
$$
A^T\lambda \geq c
$$
These LP's can be then be expressed as follows:

Primal:
$$
\max_{x\geq0}\min_{\lambda\geq0}c^Tx+\lambda^T(b-Ax)
$$
Dual:
$$
\min_{\lambda\geq0}\max_{x\geq0}c^Tx+\lambda^T(b-Ax)
$$

And by applying the dual transformation we can move between the primal and dual as the dual of the dual is just the primal problem.

> [!theorem] Theorem
> If max-min = min-max $\implies$ there is ==strong duality== and both ==LP's have the same optimal solution==


(note every LP has a dual problem but primal is not necessarily always equal to the dual)

So when does this equality hold?

Its clear that:
$$
c^Tx+\lambda^T(b-Ax)\leq \max_{x\geq0}c^Tx+\lambda^T(b-Ax) \quad \forall x \geq 0
$$
Therefore it holds that:
$$
\min_{\lambda\geq0}[c^Tx+\lambda^T(b-Ax)]\leq \min_{\lambda\geq0}[\max_{x\geq0}c^Tx+\lambda^T(b-Ax)] \quad \forall x \geq 0
$$

Once more maximizing $x\geq0$ on both the LHS and RHS we see:
$$
\max_{x\geq0}\min_{\lambda\geq0}[c^Tx+\lambda^T(b-Ax)]\leq \min_{\lambda\geq0}[\max_{x\geq0}c^Tx+\lambda^T(b-Ax)] \quad \forall x \geq 0
$$
As the RHS becomes constant and only depends on $\lambda$ so the additional max is redundant.

By doing we see that we have recovered the following result

$$
\quad \text{Primal} \leq \text{Dual}
$$

---
# Theorem of weak duality

If
$$
x_0\geq 0, \quad Ax_0\leq b,\quad \lambda_0\geq 0, \quad A^T\lambda_0 \geq c
$$
Then by the Theorem of Weak Duality we have that:

> [!theorem] Theorem of Weak Duality
>$$
>
>c^Tx_0\leq \max_{x\geq0}c^Tx\leq\min_{\lambda\geq 0}b^T\lambda\leq b^T\lambda_0
>
>$$

And can see the following properties:

> [!theorem] Boundedness
> If the primal and dual are feasible then they are all bounded.


> [!theorem] Feasibility
> if $c^Tx_0,\quad b^T\lambda_0$ are both feasible then it is possible that $c^Tx_0<b^T\lambda_0$.


> [!theorem] Optimal solutions
> if $c^Tx_0=b^T\lambda_0$ then $x_0$ and $\lambda_0$ are the optimal solutions to their respective LPs.


Which see by the following:
$$
b^T\lambda_0=c^Tx_0\leq \max_{x\geq0}c^Tx\leq\min_{\lambda\geq 0}b^T\lambda\leq b^T\lambda_0,
$$
$$
c^Tx_0= \max_{x\geq0}c^Tx=\min_{\lambda\geq 0}b^T\lambda= b^T\lambda_0.
$$

Furthermore, we can see that a feasible solution to the dual problem gives an upper bound of the objective function for the primal problem. Therefore, ==if the dual LP is unbounded then the primal problem is not feasible.==

---
# Theorem of strong duality

==If an LP (primal) has an optimal solution, then so does it's dual LP, and their respective optimal values are equal== such that $c^Tx=b^T\lambda$.


> [!theorem] Theorem of Strong Duality
> Suppose the primal has an optimal solution $x^*$ such that $x\in\mathbb R^n$:
>$$
>x^*=(x_1^*, \cdots, x_n^*).
>$$
>
>then the dual has an optimal solution $\lambda^*$ such that $\lambda\in\mathbb R^m$:
>$$
>\lambda^*=(\lambda_1^*, \cdots, \lambda^*_m).
>$$
>And then  $c^Tx^*=b^T\lambda^*$.




Moreover, from the objective function row of the ==optimal final dictionary== of the primal LP, expressed as follows:

$$
z=z^* + c_1^*x_1+\cdots+c_n^*x_n+c^*_{n+1}x_{n+1}+\cdots+c^*_{n+m}x_{n+m}
$$

Where variables $x_{n+1} \to x_{n+m}$ are slack variables.

We can then derive a dual optimal solution using the following methodology:


> [!theorem] Dual Optimal Solution Values Take the Form
> $$
>\lambda^*=(\lambda_1^*, \cdots, \lambda^*_m), \quad \lambda^*_i = -C^*_{n+i}
>$$



In essence, ==the i'th dual variable is equivalent to the negative coefficient of the i'th slack variable coefficient==. (n is the number of variables in the primal obj function, and i is the m value of the transposed matrix A from the primal (how many $\lambda$ there are)).

---
# Exploring some of the terminology

Given we have a primal LP with the 

![[Pasted image 20260311225552.png]]

We can see the following:

- The transpose of c is simply the obj function coefficients
- b is vector comprised of the constraints in the primal
- A is the mxn matrix constructed by using the coefficients found in the constraints of the primal

From these we can then transpose the necessary matrices / vectors as needed to find the optimal dual solution using the theorem of strong duality:
![[Pasted image 20260311230042.png]]

As we can see indeed $c^Tx^*=b^T\lambda^*=10$.

--- 
# When do we have weak vs. strong duality?

As we know from the ==fundamental theorem of LP==, an LP only has 3 options as demonstrated in the table below:


|                      | Primal | Feasible and optimal | Feasible and unbound | Infeasible   |
| -------------------- | ------ | -------------------- | -------------------- | ------------ |
| Dual                 |        |                      |                      |              |
| Feasible and optimal |        | Strong duality       | not possible         | not possible |
| Feasible and unbound |        | not possible         | not possible         | Weak duality |
| Infeasible           |        | not possible         | Weak duality         | possible     |

We know that we can confirm strong duality when:
$$
c^Tx^*=b^T\lambda^*=\text{optimal solution for both} 
$$
But what about when we only know $x^*$ and not both? Well we cant confirm using strong duality directly as $\lambda^*$ is not given. ==We need to use complementary slackness==

---
# Theorem of complementary slackness


> [!theorem] Complementary Slackness
> Suppose 
>
>$$
>x^*=(x_1^*, \cdots, x_n^*).
>$$
>and
>$$
>\lambda^*=(\lambda_1^*, \cdots, \lambda^*_m).
>$$
>are feasible for both primal and dual problems. Then, **they are optimal IF AND ONLY IF**:
>
>$$
>\begin{align}
>\lambda^*_ix^*_{n+i} = 0 \quad \forall i\in{1\to n}\\
>x^*_j\lambda^*_{m+j}=0 \quad \forall j \in{1\to j}
>\end{align}
>$$

In essence, the product of the ith dual variable with the ith primal slack variable must be zero.
Similarly, the product of the jth primal variable with the jth dual slack variable must be zero.

==Core idea:== if we have an optimal $x^*$ we can use CS to get $\lambda^*$ which too should be optimal (CS is used to verify the standard $\lambda^*_i=-C^*_{n+1}$)

## An Implication
$$
\begin{align}
\lambda^*_ix^*_{n+i} = 0 \quad \forall i\in{1\to m}\\
x^*_j\lambda^*_{m+j}=0 \quad \forall j \in{1\to n}
\end{align}
$$
This also implies that if the i'th dual variable is greater than 0, then because the i'th primal slack variable must equal zero it means the constraint on the i'th row in the primal is tight and the variables sum to the constant.

Similarly, if the j'th primal variable is greater than zero then the j'th dual slack variable must be equal to zero meaning the constraint on the j'th row in the dual is tight and the variables sum to the constant.

Namely something like:
$$  
a_{i1}x_1^*+a_{i2}x_2^*+\cdots+a_{in}x_n^* = b_i.  
$$


An example:
![[Pasted image 20260311232251.png]]

--- 
# But how do we *prove* complementary slackness?

Let $x^*$ and $\lambda^*$ be optimal solutions to their respective primal and dual LPs, we then have that
$$
x^*,\lambda^*\quad \text{are optimal solutions} \iff \text{they are feasible, AND:} \quad b^T\lambda^*=c^Tx^*
$$
$$
\implies  0\leq \lambda^*\cdot(b-Ax^*)=x^*\cdot(c-A^T\lambda^*) \leq 0
$$
Where $b-Ax^*\geq0$ is the primal feasibility (slack) and $c-A^T\lambda^*\leq 0$ is the dual feasibility (slack) from the start of the duality lecture (very similar to the notion of convexity and how stepping in one direction makes you step away from the other etc).

Now, distributing the dot product into the bracket we recover:

$$
\begin{align}
LHS & =\lambda^*\cdot b-(Ax^*)^T\cdot\lambda^* \\
    & = b^T\lambda^*-(x^*)^TA^T\lambda^* \\
    & = c^Tx^*-x^*\cdot(A^T\lambda^*) \\
    & = x^*(c-A^T\lambda^*) =RHS
\end{align}
\quad \therefore \quad \lambda^*x^*_{slack}=x^*\lambda^*_{slack}=0.
$$

---
# Proof of strong duality

Let $x=(x_1,\cdots,x_n)$ be the decision variable, let $x_{slack}=b-Ax\geq 0$, and let $x^*=(x_1^*, \cdots, x_n^*)$ be the optimal solution. Now, let the final optimal dictionary of this LP have the form:
$$
z=z^* +c_1^*x_1^*+\cdots+c_n^*x_n^*+\cdots+c_{n+m}^*x_{n+m}^*
$$
Which can then be expressed as:
$$
z=z^*+c^*x+c^*_{slack}x_{slack}.
$$
As $c_{n+m}^*x_{n+m}^*$ are simply the slack variables and their coefficients.

We can then further write $z^*=cx^*=c^Tx^*=\text{optimal solution}$.

Then, because this dictionary is optimal is implies that:
$$
c^*\leq 0 \quad \text{and} \quad c^*_{slack} \leq 0.
$$
This recovers:

$$
c^Tx=z=cx^*+c^*x+c^*_{slack}x_{slack}
$$
So, using $x_{slack}=b-Ax\geq 0$ we then get:
$$
\begin{align}
c^Tx=& z=cx^*+c^*x+c^*_{slack}(b-Ax) \\
& z = cx^*+c^*x+c^*_{slack}\cdot b - c^*_{slack}\cdot (Ax) \\
\end{align}
$$
$$
\therefore
$$
$$
\begin{align}
c^*_{slack}-c^*\cdot x&=cx^*+c^*_{slack}\cdot b \\
(c-c^*+A^Tc^*_{slack})\cdot x& = cx^*+c^*_{slack}\cdot b \quad \forall x\in\mathbb R^n \quad \text{that are feasible}
\end{align}
$$
That is, if $Ax=b, \quad \forall x$ then $a=b=0$.

Now, define $\lambda^*=-c^*_{slack}$ such that $\lambda^*_i=-c^*_{n+i}$. Since we have that the slack coefficients must be at most zero as stated: $c^*_{slack} \leq 0$ it follows that $\lambda^*\geq0$ therefore $\lambda^*$ must also then be feasible.

We also then have that:
$$
cx^*=-c^*_{slack}\cdot b= b^T\lambda^*
$$

So, ==from the theorem of weak duality== we observe that these two values are equivalent, ==thus both the primal and the dual have the same optimal value.== Then, because *the primal was arbitrary*, as a consequence we have then proven the theorem of strong duality as we have shown for any optimal primal solution $\exists$ an optimal dual solution that yields the same optimal objective value.

# But *intuitively* what do the primal and dual problems represent in real-world examples?


Economically, consider a factory such that its ==profit function== is defined by 
$$
\max c^Tx
$$
which represents the ==total amount of $ the factory can make==, limited to constraints:
$$
Ax \leq b, x\geq 0.
$$
Where $x_i$ represents ==the amount of the i'th product== we want to produce at this factory, and its coefficient, $c_i$ representing ==the amount we can sell one unit of that product for==. Then, $a_{ij}$ represents the ==amount of the j'th raw-material needed to produce 1 unit of the i'th product==, and its constraint, $b_j$ represents the ==total amount of the j'th raw-material we have.==

Whereas in the dual problem:
$$
\min b^T\lambda 
$$
represents the ==total cost to acquire all of the raw-materials== limited to constraints:
$$
A^T\lambda \geq c, \lambda \geq 0.
$$
Which ensures the raw-material cost of product j is greater than or equal to the profit for product j, where $\lambda_j$ represents the price the factory will offer for the j'th raw material, ==that is the net value of the j'th raw material==. Similarly, $\lambda^*$ also represents the net value of the j'th raw material, albeit the value used in the optimal production plan that is.

# How does the optimal value change with constraints?

Consider the typical LP such that:
$$
\max c^T x
$$
such that $Ax \leq b$ and $x\geq 0$. Where $z^*$ is the optimal value, $x^*$ is the optimal primal solution, and $\lambda^*$ is the optimal dual solution. Now let $t\in\mathbb R^n$ be a vector and consider if we change the constraints such that:
$$
Ax \leq b + t.
$$
Then our new optimal value becomes:
$$
z^{**} = z^* +\lambda^*\cdot t.
$$
Where, $z^{**}$ represents the money the primal factory can make with $t$ more raw-materials, $z^*$ represents the optimal value with the original materials, and of course $\lambda^*\cdot t$ the money we have from the extra raw materials.


> [!theorem] A change in constraints
> For a primal problem, a change in $b$ only changes the feasible region; leaving the obj function unchanged. Whereas, in the dual problem the feasible region stays the same, but the objective function changes.



> [!theorem] Uniqueness
> If $x^*$ is the optimal basic solution and is non-degenerate, then the dual has a unique optimal solution $\lambda^*$. Meaning, the optimal point will not change for small $t$ and we can apply $z^{**} = z^* +\lambda^*\cdot t.$ 


# Slack form equations and use cases

Given that we can express the dual slack with $w$ s.t. $w = A^T - c$ it follows that we can then write:

$$
c = A^T\lambda - w
$$
Which can be expressed as follows:
$$
c = \Sigma_{j: v_j^*=0} \lambda^*_ja_j + \Sigma_{i: x^*_i=0}w^*_i(-e_i)
$$
Where the first sum represents the linear combination of the j'th dual variable with the j'th row of the matrix A, given that the j'th primal slack variable is equal to zero ==in accordance with complementary slackness.== And the second sum represents the linear combination of the i'th dual slack variable with its corresponding negative unit vector, ==given that the i'th primal variable = 0.==

This formula has the following counterpart for the primal slack:
$$
v = b - Ax
$$
or
$$
b = Ax + v.
$$
Which can be expressed as follows:
$$
b = \Sigma_{i: w_i^*=0} x_i^*a_i + \Sigma_{j: \lambda_j^*=0}v^*_i(e_j)
$$
Where the first sum represents the linear combination of the i'th primal variable with the i'th column of the matrix A, ==given that the i'th dual slack variable is equal to 0==. And the second sum represents the linear combination of the i'th primal slack variable with its corresponding negative unit vector, ==given that the j'th dual variable = 0.==

==These formulas can be used to find the non-zero solution variables when there is a range of possible options==. That is, when the primal optimal solution is degenerate meaning the dual optimal solution is non unique. These formulas ==can also be used to find the bounds of t such that that a solution will still yield that optimal solution.==

Some examples:
![[IMG_4004.jpg]]

![[IMG_4003.jpg]]