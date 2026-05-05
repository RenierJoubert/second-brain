#math #math340 #linear-programming 

# The Simplex Method

The simplex method is an algorithm used to find the optimal solution of a given linear programming problem, its steps are repeated until the objective function only has non-basic variables with negative coefficients meaning we have reached the optimal point.

Its steps are as follows:
1. Choose the variable with the greatest coefficient in the objective function as the entering variable
2. Set all other variables to zero and study the bounds in the constraints, choose the basic variable with the tightest bound to be the leaving variable (if there is a tie choose the one with the smallest subscript)
3. Solve the leaving variable row in terms of the entering variable and substitute that expression in all others rows containing the entering variable
4. Repeat until all coefficients are negative.

## Two Phase Simplex

We use the two phase simplex method whenever we do not have a basic feasible solution, namely if we have 1 or more negative variables in our basic solution that cause it to not be feasible as all variable must be non-negative.

It's steps are as follows:

1. First write out the LP in standard inequality form
2. If the basic solution is not feasible, then we need to create an auxiliary problem.
3. Replace the objective function with $\max -x_{o}$ and subtract $x_{0}$ from every row and form the initial dictionary.
4. Choose $x_{0}$ as the entering variable and determine a leaving variable and do the normal simplex method.
5. Repeat the normal simplex method until we reach a feasible basic solution, if the ==auxiliary problem has a maximum value of 0 then the original LP is feasible.== If it is not 0 stop as the original problem is infeasible.
6. ==Remove the auxiliary variable== $x_0$ from the dictionary.
7. ==Replace the objective function== with the original objective function.
8. ==Rewrite the original objective function in terms of the current non-basic variables== by substituting the current dictionary rows into the objective row.
9. Repeat ordinary simplex using the original objective function.
10. When the original objective row has no positive coefficients, the current dictionary is optimal for the original LP.

## Bland's Rule

- Always choose the variable with the lowest subscript.

## Degeneracy

- A dictionary is degenerate when at least one basic variable has a value of 0 in the current basic solution. This can cause cycling and may cause the pivot to not move us out of the current corner.

## Unboundedness

- If a non-basic variable is strictly positive in every row then the objective function will grow without bound as that variable increases.







