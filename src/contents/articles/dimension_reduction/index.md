---
title: Dimension Reduction, a review of a review
author: John Detlefs
date: 2016-06-13
template: article.jade
---
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

Hello! This is my first post moving over to a new site built by
[wintersmith](https://github.com/jnordberg/wintersmith). Originally I was going
to use jekyll pages, but there was an issue with the latest ruby version not being
available for Linux, (maybe macs are better...). I spent *way too much* time
figuring out how to install a markdown plugin that allowed for the inclusion of
Latex. I did this all without realizing I could simply include:
```
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>
```
below my article title and latex would easily render. Now that this roadblock is
cleared, I have no excuses preventing me from writing a post about my work.  

<span class="more"></span>

This post is meant to discuss various dimension reduction methods in brief
as a preface to a more in-depth post about diffusion maps as they pertain
to chemistry. It assumes basic math skills, but will try to briefly explain
high-level concepts from Math and Stats. Towards the end I will provide a segue
into the next post, which will be posted on the same day.

[Dimension reduction](https://en.wikipedia.org/wiki/Dimensionality_reduction)
is performed on a data matrix $ M $ consisting of *n* 'feature vectors' wherein
each vector has a set of *m* data points associated with it. The data in the matrix
is considered to have dimension *m*, but oftentimes the actual 'intrinsic dimensionality'
is much lower. As Laurens van der Maaten [defines it][1], 'intrinsic dimensionality'
is 'the the minimum number of parameters needed to account for the observed properties of the data'.

(So far, the most didactic explanation of this fact was presented
in a paper on diffusion maps by [Porte et al][2]
In the paper, a dataset of m-by-n pixel pictures of a simple image randomly rotated
originally has dimension \(mn\) but after dimension reduction, the dataset can be
organized two dimensionally based on angle-of rotation.)

At the most abstract level, dimension reduction methods usually are posed as an
optimization problem that ultimately requires the solution to an eigenvalue problem.
What is an [optimization problem](https://en.wikipedia.org/wiki/Optimization_problem) you ask?
That wikipedia article should help some, the optimization being done in dimension
reduction is finding some linear or non-linear relation $ M $ that minmizes (or maximizes)
a cost function $ \phi (x) $ on some manipulation of the data matrix, call it $ X_{manipulated} $.
Examples of various functions will be given in detail later.

In most cases this can be turned into an eigenproblem posed as:
$$ X_{manipulated} M = \lambda M $$

In some cases, the manipulation is somewhat more complicated, and creates what
is called a [*generalized eigenvalue problem*](https://en.wikipedia.org/wiki/Eigendecomposition_of_a_matrix#Generalized_eigenvalue_problem).
In these situations the problem posed is $$ X_a M = \lambda X_b M $$
Where $X_a$ and $X_b$ are distinct but both still generated from some manipulation
on the original data matrix X.

The methods discussed so far necessitate the use of convex cost functions to be
optimized against. In set theory, convexity indicates that a set contains its subsets.
An open interval $ (a,b) $ is convex whereas the open interval minus a point is not.
Convex functions are similar but not entirely related, a convex function does not
have any *local optima* which means that if you're at a maximum, you know it is global.

(I think there is a reason why people in optimization refer to surfaces as landscapes.
An interesting surface may have many hills and valleys, and finding an optimal path
is like a hiker trying to cross a mountain path blind, potentially problematic.)

Convex functions will always achieve the same solution given some input parameters,
but non-convex functions may get stuck on some local optima. This is why a method
like [t-SNE][3] will converge to different results on different iterations.



It might be a little silly, but the rest of this post will be focused on providing
a quick explanation of various dimension reduction techniques. The general format
will be:
+optimization problem posed
+formal eigenvalue problem given
+interesting insights and relations
+pictures that I like from other work  

Works Cited
-----------
[1]: https://www.tilburguniversity.edu/upload/59afb3b8-21a5-4c78-8eb3-6510597382db_TR2009005.pdf
[2]: http://dip.sun.ac.za/~herbst/research/publications/diff_maps_prasa2008.pdf
[3]: https://lvdmaaten.github.io/publications/papers/JMLR_2008.pdf
