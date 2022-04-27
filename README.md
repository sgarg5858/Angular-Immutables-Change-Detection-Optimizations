# AngularImmutablesCdOptimization

1. 1-simple-approach-default-cd-no-optimization Branch

The code in this branch has various issues: 
1. First whenever we type in input field it is very laggy (because main thread is busy). As we are using default change detection strategy thus whenever we types it trigger CD for all components in view.
2. It calculates salary for each engineer on every CD cycle, as we are using method directly in the template it calls for all engineers on every CD cycle. Since values are same , it is redundant and causing our main thread to be busy all the time.
3. Since we are just entering input we don't need to compute salary or we dont need to check list of employees , checking employees is redundant.

4. If we open Angular Devtools and start profiler and then start entering in input, we can see how much time it takes for each component and it heavily impacts frame rate.

Takes 170~200 ms for CD.


Fixes: 
1. We can use OnPush strategy , we have 2 sibling components which are independent of each other, if we are entering in input of one it should not check th other component.
2. We can replace the function for calculating salary with Pure Pipe, Since in our case, for given skill Level Salary is same we don't need to recompute it everytime.
3.  We can split our engineer-list component into further 2 components, one for input & one for list and use onPush for both, that way when we are entering in input it won't check the list of the same too. as we don't need that.

Let's do these fixes one by one 

2. 2-use-on-push-just-for-engineer-list

Takes 40-80 ms for each CD cycle, now as it only triggers for one engineer list.but triggers on every input (that is bad)

3. 3-split-engineer-list-further-and-use-on-push

With this it will only calculate salary on adding engineer, that will do frame drop, confirm all via Angular Devtools

4. 4-replace-function-with-pipe

Takes 1-2ms

With this everything works fine, As it doesn't recompute salaries as pipes are pure functions.

5. 5-use-immutables

Use Immutable.js library


