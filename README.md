# shizam

rapidly scaffold your npm package with testing, coverage, and linting scripts, and auto-install dev packages to make those scripts possible!

## why

writing boilerplate code over and over stinks.  many of us start new projects _all the time_ and want to easily distribute the structure and methodologies used in all of our projects.  `shizam`, in it's tiny form, just helps scaffold a common project structure and best of best-known-methods via npm scripts.

"ugh, what's the problem with just doing these things on my own?"  nothing!  i, however, found that [xkcd justified the effort](http://imgs.xkcd.com/comics/is_it_worth_the_time.png). :)  it's really great to enter a project, explicitly add _just one package_, and have a very basic, very common set of scripts and tooling ready-to-rock. #not-a-framework :)

## how

Specifically, this package does the following to your project:
  - install common npm scripts (e.g. `"test"`, `"prepublish"`, etc)
  - installs common pre-commit hooks (e.g. validate, lint, test)
  - installs packages that are required for the above tasks to be successful

This module also is OK with you deviating your own scripts to your own requirements, however you see fit.  On re-install or update, it will NOT squash your modified scripts.  It will, however, continue to install dev dependencies that it thinks are mandatory!

## what opinions are assumed?

this module scaffolds the following topics using the following packages:

- precommit hooks
  - by default, attempts to `npm ls`, lint, and validate on each commit
- linting (`standard`)
- testing (`tape`)
- coverage (`nyc`, specifically because it does multi-process coverage better than istanbul)
- docs
  - doc generation (`jsdoc`)
  - doc publishing (`gh-pages`, publishes docs on `npm postpublish`)
- package versioning
  - automated version bumping, release publishing, and npm publishing via `npm run publish-minor/patch/major`

all required packages are installed whenever `shizam` is installed iff they are missing.

## usage

`npm i --save-dev shizam@latest`

everything else happens automatically!  and that's the point :)

## contributing

go for it.
