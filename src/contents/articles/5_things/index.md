---
title: Things I wished I had known when I got serious about programming
author: John Detlefs
date: 2016-06-9 12:30
template: article.jade
---
<p> This is my first post about actual programming! When I started doing
    computational research about three years ago, I was lazy and borderline
    incompetent. Today, the tools I have learned allow me to be equally
    lazy while being somewhat more competent. These range from simple
    lifestyle decisions to basic tech skills.
</p>
<h2> Tip 1: Install Linux </h2>
<p><a href='https://www.linuxmint.com/download.php'>
    <img src='justdoit.gif' ></a>
    Do yourself a favor and install
    Linux. My first install of Linux was done on my laptop, and it turns
    out that the wifi was broken until I installed the new drivers. Figuring
    out why things broke was a bit of a slog, but I eventually
    stumbled upon a great demonstration of the beauty of open source software.
    Incredibly, this <a href='https://github.com/lwfinger/'>
    Realtek employee</a> wrote drivers for Linux on his own time! <a href=
    'http://askubuntu.com/questions/318608/lenovo-yoga-13-realtek-wireless-driver/358479#358479'>
    Installing</a> these drivers was a bit of a rabbit's hole, but I firmly
    believe that system administration builds character. Also, for what
    its worth the install on my desktop was painless. <br>
    </p>
<h2><br> Tip 2: After installing linux, learn your shell commands </h2>
    <h3> Navigating the command line</h3>
    <pre><code>
pwd # shows where you are in the filesystem
cd # changes directory to specfied path
ls # shows existing files in path
cp # copy specified file to new filename
grep # a tool to search for regular expressions or patterns inf iles/directories
mkdir # creates a directory with a specified name in current path
chmod # changes permissions for a file
sudo # if given administrator priveleges, this allows installation
# directories if given as a prefix to a shell command
rm # deletes stuff
which (command here) # shows the path taken to binary executable of a command
    </code></pre>
    <p> Internalizing the numerous tools at ones disposal takes some time.
        Part of me thinks that I have learned command line tools simply
        because it makes me feel like Deckard. <br>
        <div id='images'>
        <img src=enhance.gif></p>
        </div>
    <p> The workflow speed up can be tremendously useful. When it
        comes to tools like git, the Github Graphic User Interfaces (GUIs)
        available to Windows are *awful*
        in comparison and it becomes a necessity. <br><br>

    </p>
    <h3>How I copied these downloaded gifs to my website directory</h3>
    <pre><code>
# after downloading some files, open terminal.
# change to website directory
# for me this is:
cd github/jdetle.github.io
pwd # press enter
# i am in /home/jdetlefs/github/jdetle.github.io
# trying to copy to /home/jdetlefs/github/jdetle.github.io/images
# the filename was some arbitrary string 'YUjaCfF' in Downloads
# when typing a path '~' is a placeholder for '/home/username'
cp ~/Downloads/YU # (press tab in terminal to autocomplete to filename
# YU is a unique identifier for this file, pressing tab twice will list
# all files with these characters as an identifier (DONT PRESS
# ENTER YET)
(continued) images/'filename'.gif # press enter
# check that it exists in the appropriate path
ls images
# 'filename.gif' should exist in this path!
    </code></pre>
    <p> Initially this process may take longer than dragging and dropping
        files, but it quickly becomes far faster than using a GUI. </p>
    <h3> How I add a newly installed program to my $PATH</h3>
    <pre><code>
echo $path
export PATH=$PATH:/path/to/my/program
echo $PATH
    </code></pre>
    <h3> How I work in virtualenvs (kind of complicated) </h3>
    <p> First, upgrade the things! </p>
    <pre><code>
sudo apt-get upgrade
    </pre></code>
        From here, things can get complicated if you have an installation
        of <a href='https://www.continuum.io/downloads'>Anaconda.</a>
        Both <a href='https://pypi.python.org/pypi/pip'>pip</a>
        and anaconda are package managers, and but when installing itself,
        anaconda installs pip in its own directory, and handles virtual
        environments on its own. Things can break when using both conda and
        pip because managing dependencies is ugly and awful and left for
        people with higher pain tolerances than me. Of course, one can
        use conda virtualenvs, the differences probably aren't too significant.
        This is actually still a problem on my laptop, so I am going to
        spend this time installing pip without conda and getting virtualenvs
        to work on my laptop! (<a href='https://www.youtube.com/watch?v=xdZQL04sDBU'>6 and a half hours later.</a>)

        ... Okay so this isn't pretty. If anaconda3 is installed, it looks like
        virtualenvwrappers won't work because virtualenvwrapper only
        works using python2.7? (Don't hold me to this). My solution was
        to delete anaconda3 altogether. Often times I've learned that
        the brute force solution works pretty well. (Somewhere in the
        distance <a href=https://twitter.com/pwang> Peter Wang </a>
        feels a disturbance in the force.)
    <pre><code>
rm -rf anaconda3 # CAREFUL
    </pre></code>
        <em> Be careful with this!!!</em> It recursively deletes this
        directory and all files in it and can ruin your OS install.
    <pre><code>
sudo apt-get install python-pip python-dev python-cython python-numpy g++
sudo pip install --upgrade pip
sudo pip install virtualenvwrapper
vi ~/.bashrc
    </pre></code>
        <p> Crap! Another thing I have to explain! vi opens Vim, a text editor
            that keeps things fast and simple. A fresh installation of
            Ubuntu 14.04 will come with Vi Improved or vim, that is a
            superset of a vi (a relic of days of yore) but has no preinstalled functionality. To
            install a working version of Vim that allows for syntax highlighting
            and easy workflow tools, do the following.
    <pre><code>
sudo apt-get update # cant hurt
sudo apt-get install vim
# ctrl-shift-n to open a new terminal window
# vi ~/.vimrc
# (press shift+colon) i (press enter) will allow you to start inserting
# copy and paste this  with a mouse
set expandtab
set tabstop=4
set softtabstop=4
set shiftwidth=3
set autoindent
set textwidth=80
set nocompatible
set backspace=2
set smartindent
set number
set cindent
colo torte # preinstalled color schemes in /usr/share/vim/vim74/colors
syntax on
# (press shift+colon) wq (press enter) to write and quit
# x does wq simultaneously
    </pre></code>
    <p> Here is some more info on <a href='http://bullium.com/support/vim.html'>Vim</a>.
        Let's get back to editing our bash shell configuration file (~/.bashrc)
    </p>
    <pre><code>
vi ~/.bashrc
# before doing anything add the path
# (shift+colon) i (enter) and line 1 should be
PATH=~/bin:$PATH
# line 2
export PATH
# line 3
source /usr/local/bin/virtualenvwrapper.sh
# (shift+colon) x (enter) and (ctrl+shift+n) to open a new terminal
    </pre></code>
    <p> And there you go! You should have a working installation of
        the <a href='http://virtualenvwrapper.readthedocs.io/en/latest/'>
            virtualenvwrapper</a>
        such that you are ready to use virtual
        environments when making your first pull request on your new
        Linux system!
    </p>
    <h3>Using pip virtualenvs to work on github projects</h3>
    <p> Let's make a pull request for MDAnalysis using the tools we've
        learned! </p>
    <pre><code>
# I like having a github/ folder for my various repositories
# First, let's clone into the repo
cd (press enter) # takes us to home user directory
mkdir github
cd github
    </pre></code>
    <p> Before moving further, you should create a github account if you
        haven't already and fork <a href='https://github.com/MDAnalysis/mdanalysis/'>
        MDAnalysis</a>. This will create a clone of the repo that will
        function as your 'origin' repository. <a href='https://github.com/MDAnalysis/mdanalysis/'>
        MDAnalysis</a> will be the 'upstream' repository that we set up
        later.
    </p>
    <pre><code>
git clone https://github.com/YOURUSERNAME/mdanalysis
# this takes a little bit (289 megabytes)
mkvirtualenv MDA
workon MDA
pip install numpy cython seaborn # installs dependencies
pip install -e . # installs MDAnalysis such that changing files
# changes how packages behave when loaded for a script
    </pre></code>
<p> From here we can start working on establishing a git workflow using branches. </p>
    <pre><code>
git remote add upstream http://github.com/MDAnalysis/mdanalysis
git branch NEW_PULL_REQUEST
git fetch upstream #checks for updates
git checkout upstream/develop -B develop # creates develop
# branch to rebase against later and switches to it
# there might be a way to do this without checking the branch out
# but I dont know how
git checkout NEW_PULL_REQUEST # do work on this branch
    </pre></code>
    <p> Any time you want to save the work you've done, you can see the
        files you've changed with
    </p>
    <pre><code>
git status
    </code></pre>
    <p> Then add them to be staged for a commit that will be merged into
        the upstream develop branch if the pull request is accepted.
    <pre><code>
git add file_name_here
# once you've added everything you want to include in a PR
git commit -m 'Insert a descriptive commit message here'
    </code></pre>
    <p> If you want to make a tiny commit, and blend it into a previous commit.
    <pre><code>
git rebase -i HEAD~(# of commits back you want to go)
    </code></pre>
    <p> Use vim style interactiveness to rebase commits. Changing 'pick'
        to 'fixup' 'squashes' a commit into the previous the first pick
        commit above it without using the commit statement.
        Using squash will combine commit statments. When happy, (shift+colon)
        (ctrl+x) and pressing Y and enter will combine commits.
        If still unsatisfied you can amend the commit manually.
    </p>
    <pre><code>
git commit --amend #edit the commit
    </code></pre>
    <p> When you're ready to save your work to the origin directory.
    <pre><code>
git fetch upstream
git checkout develop
# if prompted:
git pull # updates changes made
# if your command prompt makes a recursive merge, you've done something wrong
git checkout NEW_PULL_REQUEST
git rebase develop # rebase against develop to avoid merge conflicts
git push origin NEW_PULL_REQUEST
    </code></pre>
    <p> Before actually making a pull requestion on github, make sure
        you didn't break any tests, and you've written new tests for
        the new code you've written.
    <pre><code>
cd ~/github/mdanalysis/testsuite/
pip install -e .
cd MDAnalysisTests/
./mda_nosetests (press enter)
    </pre></code>
        <p> Hopefully that helps! There is a bevy of more rigorous work
        that's been done on understand git branching.
        <a href='http://nvie.com/posts/a-successful-git-branching-model/'>
            A succesful Git branching model</a> is very helpful,
        <a href='https://help.github.com/categories/bootcamp/'>
            reading the github helps too.</a>
        <a href='https://atom.io/'>Atom</a> is a very nice editor with
        its github integration and hackability.
        I like to use <a href='jupyter.org'>Jupyter</a>
        as a script playground for MDAnalysis.
    <h2> Tip 3: Get good at googling </h2>
    <p> <img src='noidea.jpg'>This tip from <a href='www.freecodecamp.com'>freeCodeCamp</a>
        is applicable to any problem. <a href='https://github.com/FreeCodeCamp/wiki/blob/master/FreeCodeCamp-Get-Help.md'>
        Read-search-ask</a> is a strategy that will help you learn
        indepently and boost confidence. Adding on to this advice, I have
        found that if you find the email of someone knowledgable in the area
        you are struggling in, simply by writing an email explaining your problem
        you can often find the solution on your own. If you don't
        figure it out, then you might just impress that person with
        your detailed investigation. Even if they aren't impressed, they'll likely help
        you out. People in open source are generally receptive
        to people who demonstrate that they are working hard at becoming self-reliant.
        Always err on the side of not sending that email though; nobody
        likes being harassed with trivial questions.
    </p>
    <h2> Tip 4: When working, avoid distractions, double check,
        triple check, quadruple check... </h2>
        <p> When working on projects involving non-commercial software
            it is especially important to think of all the possible ways you could
            have screwed something up. Check your code for glaring logic
            errors and before running an intensive calculation, run a baseline
            to ensure that things work. In quantum chemistry, an example
            for this would be running a Hartree-Fock calculation with the STO-3G basis set
            before doing something that scales much slower.
            Develop scripts to ensure you are getting expected results,
            become skilled at using grep and simple regex. (<a href='http://regexr.com/'>Regexr</a>
            is a great playground to learn regex)
            Assume that you've written bad code and that bugs will
            be caused by small changes to input parameters. Expect
            things to break easily. Inspect all work exhaustively.
        </p>
        <p> When reading academic papers, print them out and read them away from a PC.
            Usually academic papers use wildly esoteric jargon. <a href='http://ferguson.matse.illinois.edu/resources/5.pdf'>
            This paper</a> on diffusion maps (the subject of my next blog post)
            actually features a 'jargon box' which is just *great*. Academic
            papers usually also assume a high level of familiarity in the
            subject material and are written for those who are skilled at
            reading papers. It is easier to dedicate the intense
            concentration required for most papers when unplugging from tech
            and using some ear plugs.
        </p>
        <p> Finally, when communicating over email you can embrace
            one of two strategies. Either you can add a 'sent from my iPhone'
            tag to everything, or before adding recipients,
            take a second to go get a drink of water come back and
            reread the message for errors. Unfortunately, people will
            judge you for poor grammar even if they don't mean to. (Shoot,
            I just ended a sentence in a preposition...)
        </p>
    <h2> Tip 5: Tackle what intimidates you </h2>
        <p> I seriously believe that this is the number one part of
            becoming an adult and it is something I have only really
            internalized in the last year. Problems will not go away
            by avoiding them. Oftentimes I find myself building up things
            in my head as if they will be a bigger deal than they actually
            are. Figuring out how to us virtualenvs was one example of
            such a barrier that occurred recently. This occurs in my personal
            life as well and invariably the outcome is always better than
            how I imagined it would be.
        </p><img src='shiacrying.gif'>
        <p> Having trouble getting started on a project? Unfortunately Shia isn't
            much help here.
            Segment your work into discrete chunks. If you
            have a pull request you want to make, think of all the
            possible minutia you have to work through in order to get
            things done. I like to use Google Inbox's reminder feature
            to constantly remind myself of these things I need to get done.
            When I finish a task, I can swipe it off my todo list and
            enjoy that feeling of catharsis.
        </p>
        <p> If you are a budding programmer, take an algorithms class
            for free <a href='http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/'>here</a>.
            If you still aren't busy enough, read the MDAnalysis <a href='https://github.com/MDAnalysis/mdanalysis/wiki/Guide-for-Developers'>Guide
            for Developers</a> and start learning with help from a tight-knit
            community of open source contributors.
        </p>