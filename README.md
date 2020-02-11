# Modules installed

- `redux`
- `react-redux`

# Kinds of React components

## "Dumb components" - presentation-only

- functions
- no state
- only props

Mainly for applying CSS classes and other UI formatting.

## "Smart containers" - redux-aware

- provides "wiring" between redux and dumb components
- defines `mapStateToProps`
- defines `mapDispatchToProps`
- uses redux's `connect` function to create the "smart container"