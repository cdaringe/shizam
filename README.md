# shizam

rapidly scaffold your npm package with testing, coverage, and linting scripts, and auto-install dev packages to make those scripts possible!

## why

writing boilerplate code over and over stinks.  many of us start new projects _all the time_ and want to easily distribute the structure and methodologies used in all of our projects.  this tiny package simply helps scaffold a common project structure and best of best-known-methods via npm scripts.

"ugh, what's the problem with just doing these things on my own?"

nothing!  i, however, found that [xkcd justified the effort](http://imgs.xkcd.com/comics/is_it_worth_the_time.png). it's great to start a project, install _just one package_ (this one), and automatically have a basic set of scripts and tooling ready-to-roll. #not-a-framework.

## how

Specifically, this package does the following to your project:
  - install common npm scripts (e.g. `"test"`, `"prepublish"`, etc)
  - installs common pre-commit hooks (e.g. validate, lint, test)
  - installs packages that are required for the above tasks to be successful

this package lets you modify the default scripts to your own requirements post-install. on re-install or update, it will NOT squash your modified scripts.  it will, however, continue to install dev dependencies that it thinks are mandatory on subsequent installs.

## what opinions are assumed?

this module scaffolds the following topics using the following packages:

- git precommit hooks
  - by default, attempts to `npm ls`, lint, and test (with coverage enforcement) on each commit
- linting (`standard`)
- testing (`tape`)
- coverage (`nyc`, specifically because it does multi-process coverage better than istanbul alone)
- docs
  - doc generation (`jsdoc`)
  - doc publishing to github.io (`gh-pages`, publishes on `npm postpublish`)
- package versioning
  - automated version bumping, github release publishing, and npm publishing via `npm run publish-minor/patch/major`

all required devDependencies are installed whenever `shizam` is installed/updated/etc iff they are missing.

## usage

`npm i --save-dev shizam@latest`

everything else happens automatically!  and that's the point :)

## contributing

go for it.
