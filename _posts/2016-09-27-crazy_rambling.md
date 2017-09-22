---
layout: post
title: Crazy rambling about observables
date: 2016-09-27
comments: true
excerpt_separator: <!--more-->
---
<script type="text/x-mathjax-config">
MathJax.Hub.Config({
  tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]}
});
</script>
<script type="text/javascript" async
  src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-MML-AM_CHTML">
</script>

Here's some random nonsense about my thinking that I want to share/refine while
I'm still learning about [Observables.](http://reactivex.io/)
<!--more-->

Consider the term _Behavior_ to be an output from a program that is expected
1..N times. This output can have many different _side-effects_ but should occur
in a sequential, predictable manner. Observables allow for predictable creation
of _behavior_, and it seems that in a creation of an observable each _side-effect_
should come from the result of a pure function.

The act of subscribing to an observable triggers behavior. If an observable
consists entirely of pure functions, this maintains ensures the benefits of
pure functional programming.

This also seems to tie into a deeper idea from topology. Or at least a pattern;
covering spaces are an entirely different subject from observables. But this picture
seems to tie into the idea of an observable _too_ well.
![covering space](/images/Covering_space_diagram.svg)

Consider the behavior $B$, we lift it to the sandwich of the functions we want
to create the desired behavior. Upon subscription we flatten back to the behavior
$B$.

![notes](/images/observable.jpg)

$B$ = {$f_1$, $f_2$, $f_3$}

And thats all I have, thanks, please refine my thinking in the comments!
