#math #math340 #linear-programming #optimization #game-theory

# A High Level Overview

A matrix game can be represented with an $m \times n$ matrix $A$ with m rows and n columns, where there is a row player and a column player. Each row represents a choice the row player can make to play each round, and each column represents a choice the column player can make to play each round. Then, after each player has made their choice the payoff is given by their intersection. Namely, the payoff is given by $a_{ij}$ where $i$ is the row chosen by the row player and $j$ is the column chosen by the column player.

For example in rock paper scissors the payoff matrix is given by:
$$
\begin{bmatrix}
0 & -1 & 1 \\
1 & 0 & -1 \\
-1 & 1 & 0
\end{bmatrix}
$$
Where for instance $a_{11}$ is rock-rock, $a_{22}$ is paper-paper, and $a_{33}$ is scissors-scissors. Notably, when it is a tie the payoff is zero as no one wins, but when rock beats scissors such as $a_{13}$ the payoff is 1 as the row player won.

*Note that if A is the payoff matrix for the row player, then -A is the payoff matrix for the column player*

## Zero-Sum

The matrix game is a zero-sum game because one player's gain is the other's loss such that:
$$
\text{payoff} \quad p_{1} \quad + \quad \text{payoff} \quad p_{2} \quad = \quad 0
$$
## Strategy

Both players need to choose a strategy for play, that is they need to decide on a probability vector over all of the choices, namely a weight for each choice. This can be a mixed strategy, which is just an even distribution over all the choices. For example in rock paper scissors the row player could choose a mixed strategy such that:
$$
\vec{x}=\begin{bmatrix}
\frac{1}{3} \\
\frac{1}{3} \\
\frac{1}{3}
\end{bmatrix}
$$
## Expected Value (EV)

In brief, the expected value for a player given their strategy is the probability of winning multiplied with their payoff from winning summed with their probability of losing multiplied with their payoff from losing. Namely:
$$
EV(P_{1}) = \vec{x^T}A \vec{y}
$$
For example, in the rock paper scissors example if the row player chose the strategy above and the column player chose a strategy of picking rock half the time and scissors the other half of the time then the EV for player 1 would be:
$$
EV(P_{1}) = \begin{bmatrix}
\frac{1}{3} & \frac{1}{3} & \frac{1}{3} 
\end{bmatrix}
\begin{bmatrix}
0 & -1 & 1 \\
1 & 0 & -1 \\
-1 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
\frac{1}{2} \\
0 \\
\frac{1}{2}
\end{bmatrix}
=0
$$

## Goals For Each Player

The row player chooses their probability vector x in order to maximize $x^TAy$. Where the column player chooses their probability vector y in order to minimize $x^TAy$. Namely, P1 wants to maximize the worst case scenario (because y will always choose the worst column for the row player), and P2 wants to minimize the worst case scenario (minimize the maximum it can lose because).

Specifically, for the row player, they want:
$$
\max_{x}\min_{y} x^TAy
$$
and the column player wants:
$$
\min_{y}\max_{x} x^TAy
$$
Now, if the row player chooses a strategy at random their payoff is *at least:* 
$$
\min_{y}x^TAy
$$
Which is just the minimum the column player will lose, where y is the probability vector chosen to minimize loss.

Where if the column player chooses a strategy at random they will lose *at most*:
$$
\max_{x}x^TAy
$$
Which is just the maximum the row player can win, where x is the probability vector chosen to maximize gains.

Thus we have that:
$$
\min_{y}x^TAy \leq \max_{x}x^TAy
$$
Now, if $\min_{y}x^TAy = \max_{x}x^TAy$ then we call $(x,y)$ *Nash Equilibrium*

## A Fair Game

A matrix game is fair if the following condition holds:
$$
\max_{x}\min_{y}x^TAy = \min_{y}\max_{x}x^TAy = 0
$$
*Note:* This is the optimal value of the LP problem of the matrix game.

- If this value is > 0 then the game favors the row player
- If this value is < 0 then the game favors the column player

==If there is a negative column the game is unfair to the row player==

==If there is a positive row the game is unfair to the column player==

*Note:* if $A=-A^T$ then the game is generally fair.

### Remark

==If a matrix A has a non-positive column AND also a non-negative row then the game is fair.==

## Concavity and Convexity

- A linear function is ==concave==
- The set of probability vectors is ==convex==

## Setting up The LP

We can translate any matrix game given a payoff matrix into an LP problem where the objective function begins as Max v, and the constraints are given by $v \leq x^TAe_{1}, x^TAe_{2}, \cdots x^TAe_{n}$ and $x_{1} + x_{2} + \cdots x_{m} = 1$. That is, the rows of the LP problem are given by the columns of the payoff matrix. For example:

![[IMG_4142.jpeg]]
![[IMG_4143.jpeg]]
Once the LP is set up we first have to typically make one of the current variables a slack variable, ie $x_2 = 1 -x_{1}$ (remember to include this in the dictionary) then have $v$ enter and some other variable leave, after this we can get rid of $v$ as a basic variable and can solve it using simplex to find the optimal solution (the payoff for the row player), and the row players optimal strategy (the optimal probability vector).

## Von Neumann

Let X and Y be true compact sets, if $f(*,y)$ is concave and $f(x,*)$ is convex then:

$$
\min_{y}\max_{x}f(x,y) = \max_{x}\min_{y}f(x,y)
$$
This is applicable because all linear functions are concave and the set of all probability vectors in convex.

## Duality in Matrix Games

We can use *complementary slackness* from [[Duality]] to derive the column players optimal strategy (probability vector) given the row players optimal strategy, that is we can use:
$$
\lambda^*_{i} = -C_{n+i}
$$
Where the i'th column player variable in the optimal solution is given by the coefficient of the i'th slack variable in the row players payoff LP in its final optimal dictionary.
