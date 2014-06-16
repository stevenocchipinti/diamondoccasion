[![Diamond Occasion](https://raw.githubusercontent.com/stevenocchipinti/diamondoccasion/gh-pages/images/diamondoccasion/logo.jpg)](http://diamondoccasion.net.au)


Description
-----------

This is an attempt to turn the Diamond Occasion Joomla site into a static site.  
Static files are faster to serve and more secure because there is no need
to execute PHP on the server upon every request!


How?
----

1. _"Compile"_ the Joomla site to static files with `wget` (see below).
2. Upload the resulting files to a static file host


```bash
#
# Cheatsheet:
#
#   --mirror          same as -r -N -l inf
#   -r                recursive
#   -N                timestamping
#   -l inf            level of recursion
#   -nH               no host prefixes
#   -nP               do not recurse up from the target
#   -p                download the entire page (images, etc.)
#   -k                convert links to relative URLs
#   -E                append the .html extension if it isn't there
#   -e robots=off     ignore the robots.txt restriction
#
 
wget --mirror -nH -np -p -k -E -e robots=off http://diamondoccasion.net.au
```
