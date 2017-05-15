# shizam

![](https://img.shields.io/badge/standardjs-%E2%9C%93-brightgreen.svg)

opinionated rapidly project scaffolding for **libraries**.  one `--dev` install automatically wires:

- `lint` scripts, via `standard`
- `lint` & `test` task runs on git precommit
- automatic `jsdoc` publishing, post-package publish

## why

writing boilerplate code over and over stinks.  many of us start new projects _all the time_ and want to easily distribute the structure and methodologies used in all of our projects.  this tiny package simply helps scaffold a common project structure and best of best-known-methods via npm scripts.

"ugh, what's the problem with just doing these things on my own?"

nothing!  i, however, found that [xkcd justified the effort](http://imgs.xkcd.com/comics/is_it_worth_the_time.png). it's great to start a project, install _just one package_ (this one), and automatically have a basic set of scripts and tooling ready-to-roll. #not-a-framework.

## how

specifically, this package does the following to your project:
  - install common npm scripts (e.g. `"test"`, `"prepublish"`, etc)
  - installs common pre-commit hooks (e.g. lint, test)
  - installs packages that are required for the above tasks to be successful

this package lets you modify the default scripts to your own requirements post-install. on re-install or update, it will NOT squash your modified scripts.  it will, however, continue to install dev dependencies that it thinks are mandatory on subsequent installs.

## what opinions are assumed?

this module scaffolds the following topics using the following packages:

- git precommit hooks (`test` & `lint`). bring your own `test: ...` script.
- linting (`standard`)
- docs
  - doc generation (`jsdoc`)
  - doc publishing to github.io (`gh-pages`, publishes on `npm postpublish`)

required devDependencies are installed whenever `shizam` is installed/updated/etc _iff_ they are missing.

## usage

`yarn add --dev shizam`

everything else happens automatically!  and that's the point :)

## contributing

go for it.
